/**
 * Serviço de integração com Shopify Storefront API
 * 
 * Este serviço permite buscar produtos diretamente da sua loja Shopify.
 * 
 * CONFIGURAÇÃO:
 * 1. No painel admin do Shopify, vá em Apps > Develop apps
 * 2. Crie um novo app e habilite a Storefront API
 * 3. Copie o Storefront access token
 * 4. Configure as variáveis de ambiente no arquivo .env
 */

import { Product } from '../types';

// Configuração do Shopify
const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

// URL da API GraphQL do Shopify
const SHOPIFY_API_URL = SHOPIFY_STORE_DOMAIN 
  ? `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`
  : '';

// Verifica se o Shopify está configurado
export const isShopifyConfigured = (): boolean => {
  return Boolean(SHOPIFY_STORE_DOMAIN && SHOPIFY_STOREFRONT_ACCESS_TOKEN);
};

// Função auxiliar para fazer requisições GraphQL ao Shopify
async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify não está configurado. Verifique as variáveis de ambiente.');
  }

  const response = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Erro na API do Shopify: ${response.statusText}`);
  }

  const json = await response.json();
  
  if (json.errors) {
    throw new Error(`Erro GraphQL: ${json.errors[0].message}`);
  }

  return json.data;
}

// Interface para produto do Shopify
interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor: string;
  productType: string;
  tags: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
      };
    }>;
  };
}

// Query para buscar todos os produtos
const PRODUCTS_QUERY = `
  query Products($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          handle
          description
          vendor
          productType
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 2) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

// Query para buscar um produto específico
const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      vendor
      productType
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }
`;

// Query para buscar produtos por coleção/categoria
const PRODUCTS_BY_COLLECTION_QUERY = `
  query ProductsByCollection($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      id
      title
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            vendor
            productType
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 2) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Mapeia categoria para collection handle do Shopify
const CATEGORY_TO_COLLECTION: Record<string, string> = {
  'vestuario': 'vestuario',
  'calcados': 'calcados',
  'relogios': 'relogios',
  'perfumes': 'perfumes',
  'carteiras': 'carteiras',
  'cintos': 'cintos',
  'oculos': 'oculos',
  'acessorios': 'acessorios',
};

// Converte produto do Shopify para o formato do app
function convertShopifyProduct(shopifyProduct: ShopifyProduct): Product {
  const images = shopifyProduct.images.edges.map(edge => edge.node.url);
  const firstVariant = shopifyProduct.variants.edges[0]?.node;
  
  return {
    id: shopifyProduct.id.replace('gid://shopify/Product/', ''),
    variantId: firstVariant?.id.replace('gid://shopify/ProductVariant/', ''), // ID da variante para checkout
    brand: shopifyProduct.vendor || 'VITRA',
    name: shopifyProduct.title,
    price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    imageFront: images[0] || 'https://picsum.photos/seed/placeholder/800/1000',
    imageBack: images[1] || images[0] || 'https://picsum.photos/seed/placeholder/800/1000',
    category: shopifyProduct.productType || 'Geral',
    description: shopifyProduct.description,
  };
}

/**
 * Busca todos os produtos do Shopify
 */
export async function fetchShopifyProducts(limit: number = 50): Promise<Product[]> {
  interface ProductsResponse {
    products: {
      edges: Array<{ node: ShopifyProduct }>;
      pageInfo: { hasNextPage: boolean; endCursor: string };
    };
  }

  const data = await shopifyFetch<ProductsResponse>(PRODUCTS_QUERY, { first: limit });
  return data.products.edges.map(edge => convertShopifyProduct(edge.node));
}

/**
 * Busca um produto específico pelo handle (slug)
 */
export async function fetchShopifyProductByHandle(handle: string): Promise<Product | null> {
  interface ProductResponse {
    productByHandle: ShopifyProduct | null;
  }

  const data = await shopifyFetch<ProductResponse>(PRODUCT_BY_HANDLE_QUERY, { handle });
  
  if (!data.productByHandle) {
    return null;
  }
  
  return convertShopifyProduct(data.productByHandle);
}

/**
 * Busca produtos por categoria/coleção
 */
export async function fetchShopifyProductsByCategory(category: string, limit: number = 20): Promise<Product[]> {
  const collectionHandle = CATEGORY_TO_COLLECTION[category.toLowerCase()] || category;

  interface CollectionResponse {
    collectionByHandle: {
      products: {
        edges: Array<{ node: ShopifyProduct }>;
      };
    } | null;
  }

  try {
    const data = await shopifyFetch<CollectionResponse>(PRODUCTS_BY_COLLECTION_QUERY, { 
      handle: collectionHandle, 
      first: limit 
    });
    
    if (!data.collectionByHandle) {
      return [];
    }
    
    return data.collectionByHandle.products.edges.map(edge => convertShopifyProduct(edge.node));
  } catch (error) {
    console.error(`Erro ao buscar produtos da categoria ${category}:`, error);
    return [];
  }
}

// Query para criar checkout (carrinho)
const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

/**
 * Cria um checkout no Shopify e retorna a URL para finalizar a compra
 */
export async function createShopifyCheckout(
  items: Array<{ variantId: string; quantity: number }>
): Promise<string | null> {
  interface CheckoutResponse {
    checkoutCreate: {
      checkout: {
        id: string;
        webUrl: string;
      } | null;
      checkoutUserErrors: Array<{
        code: string;
        field: string[];
        message: string;
      }>;
    };
  }

  const lineItems = items.map(item => ({
    variantId: `gid://shopify/ProductVariant/${item.variantId}`,
    quantity: item.quantity,
  }));

  const data = await shopifyFetch<CheckoutResponse>(CREATE_CHECKOUT_MUTATION, {
    input: { lineItems },
  });

  if (data.checkoutCreate.checkoutUserErrors.length > 0) {
    console.error('Erro ao criar checkout:', data.checkoutCreate.checkoutUserErrors);
    return null;
  }

  return data.checkoutCreate.checkout?.webUrl || null;
}

export default {
  isConfigured: isShopifyConfigured,
  fetchProducts: fetchShopifyProducts,
  fetchProductByHandle: fetchShopifyProductByHandle,
  fetchProductsByCategory: fetchShopifyProductsByCategory,
  createCheckout: createShopifyCheckout,
};

