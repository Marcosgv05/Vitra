module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Vitra/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "PRODUCTS",
    ()=>PRODUCTS,
    "SITE_TEXT",
    ()=>SITE_TEXT
]);
const PRODUCTS = [
    // VESTUÁRIO
    {
        id: '1',
        brand: 'VITRA ESSENTIALS',
        name: 'Camisa Social Slim Fit',
        price: 289,
        imageFront: 'https://picsum.photos/seed/menShirt1/800/1000',
        imageBack: 'https://picsum.photos/seed/menShirt1back/800/1000',
        category: 'Camisas',
        description: 'Camisa social em algodão egípcio 100 fios. Corte slim fit com colarinho italiano. Acabamento premium para o homem moderno.'
    },
    {
        id: '2',
        brand: 'VITRA BLACK',
        name: 'Blazer Italiano Estruturado',
        price: 899,
        imageFront: 'https://picsum.photos/seed/menBlazer/800/1000',
        imageBack: 'https://picsum.photos/seed/menBlazerback/800/1000',
        category: 'Blazers',
        description: 'Blazer em lã fria italiana com forro acetinado. Corte clássico com ombros estruturados. Elegância atemporal para ocasiões especiais.'
    },
    {
        id: '3',
        brand: 'VITRA CASUAL',
        name: 'Polo Premium Pima',
        price: 229,
        imageFront: 'https://picsum.photos/seed/menPolo/800/1000',
        imageBack: 'https://picsum.photos/seed/menPoloback/800/1000',
        category: 'Polos',
        description: 'Polo em algodão Pima peruano. Malha piqué de alta densidade com acabamento stone. Versatilidade e conforto para o dia a dia.'
    },
    {
        id: '4',
        brand: 'VITRA ESSENTIALS',
        name: 'Calça Chino Stretch',
        price: 349,
        imageFront: 'https://picsum.photos/seed/menChino/800/1000',
        imageBack: 'https://picsum.photos/seed/menChinoback/800/1000',
        category: 'Calças',
        description: 'Calça chino em sarja com elastano. Corte slim moderno e confortável. Ideal para trabalho ou lazer.'
    },
    // CALÇADOS
    {
        id: '5',
        brand: 'VITRA SHOES',
        name: 'Oxford Clássico Couro',
        price: 689,
        imageFront: 'https://picsum.photos/seed/menOxford/800/1000',
        imageBack: 'https://picsum.photos/seed/menOxfordback/800/1000',
        category: 'Calçados',
        description: 'Oxford em couro legítimo italiano com acabamento artesanal. Solado de couro com antiderrapante. O clássico que nunca sai de moda.'
    },
    {
        id: '6',
        brand: 'VITRA SHOES',
        name: 'Loafer Penny Premium',
        price: 549,
        imageFront: 'https://picsum.photos/seed/menLoafer/800/1000',
        imageBack: 'https://picsum.photos/seed/menLoaferback/800/1000',
        category: 'Calçados',
        description: 'Loafer em camurça italiana com detalhe penny. Palmilha anatômica de couro. Sofisticação casual para todas as ocasiões.'
    },
    // RELÓGIOS
    {
        id: '7',
        brand: 'VITRA TIME',
        name: 'Relógio Automático Classic',
        price: 2890,
        imageFront: 'https://picsum.photos/seed/menWatch1/800/1000',
        imageBack: 'https://picsum.photos/seed/menWatch1back/800/1000',
        category: 'Relógios',
        description: 'Relógio automático com caixa em aço inoxidável 316L. Vidro de safira antirreflexo. Pulseira em couro genuíno. Resistente a 50m.'
    },
    {
        id: '8',
        brand: 'VITRA TIME',
        name: 'Cronógrafo Sport Luxe',
        price: 3490,
        imageFront: 'https://picsum.photos/seed/menWatch2/800/1000',
        imageBack: 'https://picsum.photos/seed/menWatch2back/800/1000',
        category: 'Relógios',
        description: 'Cronógrafo com movimento suíço. Caixa em titânio escovado com detalhes dourados. Pulseira em aço com fecho deployant.'
    },
    // PERFUMES
    {
        id: '9',
        brand: 'VITRA SCENT',
        name: 'Eau de Parfum Noir Intense',
        price: 489,
        imageFront: 'https://picsum.photos/seed/menPerfume1/800/1000',
        imageBack: 'https://picsum.photos/seed/menPerfume1back/800/1000',
        category: 'Perfumes',
        description: 'Fragrância amadeirada com notas de oud, sândalo e âmbar. Longa duração de até 12 horas. Para o homem que deixa sua marca.'
    },
    {
        id: '10',
        brand: 'VITRA SCENT',
        name: 'Eau de Toilette Fresh Marine',
        price: 359,
        imageFront: 'https://picsum.photos/seed/menPerfume2/800/1000',
        imageBack: 'https://picsum.photos/seed/menPerfume2back/800/1000',
        category: 'Perfumes',
        description: 'Fragrância fresca com notas cítricas, aquáticas e madeira de cedro. Ideal para o dia a dia. Frescor que acompanha você.'
    },
    // CARTEIRAS E ACESSÓRIOS DE COURO
    {
        id: '11',
        brand: 'VITRA LEATHER',
        name: 'Carteira Bifold Classic',
        price: 329,
        imageFront: 'https://picsum.photos/seed/menWallet1/800/1000',
        imageBack: 'https://picsum.photos/seed/menWallet1back/800/1000',
        category: 'Carteiras',
        description: 'Carteira bifold em couro italiano com 8 slots para cartões. Compartimento para notas e porta-moedas interno. Design slim e elegante.'
    },
    {
        id: '12',
        brand: 'VITRA LEATHER',
        name: 'Porta-Cartões Minimalista',
        price: 189,
        imageFront: 'https://picsum.photos/seed/menCardHolder/800/1000',
        imageBack: 'https://picsum.photos/seed/menCardHolderback/800/1000',
        category: 'Carteiras',
        description: 'Porta-cartões slim em couro saffiano. Capacidade para 6 cartões com proteção RFID. Minimalismo funcional no bolso.'
    },
    // CINTOS
    {
        id: '13',
        brand: 'VITRA LEATHER',
        name: 'Cinto Reversível Premium',
        price: 279,
        imageFront: 'https://picsum.photos/seed/menBelt1/800/1000',
        imageBack: 'https://picsum.photos/seed/menBelt1back/800/1000',
        category: 'Cintos',
        description: 'Cinto reversível preto/marrom em couro legítimo. Fivela giratória em metal escovado. Dois cintos em um, versatilidade total.'
    },
    {
        id: '14',
        brand: 'VITRA LEATHER',
        name: 'Cinto Social Clássico',
        price: 249,
        imageFront: 'https://picsum.photos/seed/menBelt2/800/1000',
        imageBack: 'https://picsum.photos/seed/menBelt2back/800/1000',
        category: 'Cintos',
        description: 'Cinto em couro box com acabamento espelhado. Fivela clássica em níquel. Essencial para looks formais impecáveis.'
    },
    // ÓCULOS
    {
        id: '15',
        brand: 'VITRA EYEWEAR',
        name: 'Óculos Aviador Titanium',
        price: 689,
        imageFront: 'https://picsum.photos/seed/menSunglasses1/800/1000',
        imageBack: 'https://picsum.photos/seed/menSunglasses1back/800/1000',
        category: 'Óculos',
        description: 'Óculos aviador em titânio ultraleve com lentes polarizadas. Proteção UV400. O ícone do estilo masculino reinventado.'
    },
    {
        id: '16',
        brand: 'VITRA EYEWEAR',
        name: 'Óculos Wayfarer Acetato',
        price: 549,
        imageFront: 'https://picsum.photos/seed/menSunglasses2/800/1000',
        imageBack: 'https://picsum.photos/seed/menSunglasses2back/800/1000',
        category: 'Óculos',
        description: 'Armação em acetato italiano com lentes degradê. Design clássico wayfarer com ajuste confortável. Estilo que atravessa gerações.'
    }
];
const CATEGORIES = [
    {
        id: 'cat-1',
        title: 'Vestuário',
        image: 'https://picsum.photos/seed/menSuit/1200/1200',
        size: 'large',
        link: '/produtos?categoria=vestuario'
    },
    {
        id: 'cat-2',
        title: 'Relógios',
        image: 'https://picsum.photos/seed/luxuryWatch/600/1200',
        size: 'tall',
        link: '/produtos?categoria=relogios'
    },
    {
        id: 'cat-3',
        title: 'Perfumes',
        image: 'https://picsum.photos/seed/menFragrance/600/600',
        size: 'square',
        link: '/produtos?categoria=perfumes'
    },
    {
        id: 'cat-4',
        title: 'Acessórios',
        image: 'https://picsum.photos/seed/menAccessories/600/600',
        size: 'square',
        link: '/produtos?categoria=acessorios'
    }
];
const SITE_TEXT = {
    brand: 'Vitra.',
    nav: {
        shop: 'LOJA',
        brands: 'MARCAS',
        editorial: 'EDITORIAL',
        sale: 'PROMOÇÃO',
        about: 'SOBRE',
        contact: 'CONTATO',
        cart: 'SACOLA'
    },
    hero: {
        title1: 'ESTILO',
        title2: 'MASCULINO',
        subtitle: 'O espaço definitivo do homem moderno',
        cta: 'Explorar'
    },
    products: {
        title: 'Novidades',
        subtitle: 'Peças selecionadas para o homem que valoriza qualidade, sofisticação e atenção aos detalhes.',
        viewAll: 'Ver Todos os Produtos',
        quickAdd: 'Adicionar Rápido',
        explore: 'Explorar'
    },
    philosophy: {
        label: 'A Filosofia',
        quote: '"Elegância masculina é a arte de estar sempre preparado, sem nunca parecer exagerado."',
        description: 'Vitra é o destino do homem contemporâneo. Curamos cada peça pensando em qualidade, durabilidade e estilo atemporal. Porque o verdadeiro luxo está nos detalhes.'
    },
    cart: {
        title: 'Sua Sacola',
        empty: 'Sua sacola está vazia.',
        continueShopping: 'Continuar Comprando',
        size: 'Tamanho',
        subtotal: 'Subtotal',
        shipping: 'Frete e impostos calculados no checkout.',
        checkout: 'Finalizar Compra'
    },
    footer: {
        description: 'O destino definitivo para o homem moderno. Vestuário, acessórios e fragrâncias premium selecionados com excelência.',
        shop: {
            title: 'Loja',
            newArrivals: 'Novidades',
            bestSellers: 'Mais Vendidos',
            accessories: 'Acessórios',
            sale: 'Promoções'
        },
        support: {
            title: 'Suporte',
            shipping: 'Envio & Devoluções',
            sizeGuide: 'Guia de Tamanhos',
            faq: 'Perguntas Frequentes',
            contact: 'Fale Conosco'
        },
        newsletter: {
            title: 'Newsletter',
            description: 'Receba em primeira mão lançamentos exclusivos e conteúdo sobre estilo masculino.',
            placeholder: 'SEU E-MAIL',
            button: 'Assinar'
        },
        copyright: '© 2024 Vitra. Todos os direitos reservados.'
    },
    about: {
        title: 'Sobre Nós',
        subtitle: 'Nossa História',
        mission: 'Nossa Missão',
        values: 'Nossos Valores'
    },
    contact: {
        title: 'Contato',
        subtitle: 'Entre em contato conosco',
        form: {
            name: 'Nome',
            email: 'E-mail',
            subject: 'Assunto',
            message: 'Mensagem',
            send: 'Enviar Mensagem'
        }
    }
};
}),
"[project]/Vitra/services/shopify.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "createShopifyCheckout",
    ()=>createShopifyCheckout,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchShopifyProductByHandle",
    ()=>fetchShopifyProductByHandle,
    "fetchShopifyProducts",
    ()=>fetchShopifyProducts,
    "fetchShopifyProductsByCategory",
    ()=>fetchShopifyProductsByCategory,
    "isShopifyConfigured",
    ()=>isShopifyConfigured
]);
// Configuração do Shopify
// Next.js usa process.env para variáveis de ambiente no servidor
// e process.env.NEXT_PUBLIC_* para variáveis públicas no cliente
const SHOPIFY_STORE_DOMAIN = (("TURBOPACK compile-time truthy", 1) ? process.env.SHOPIFY_STORE_DOMAIN : "TURBOPACK unreachable") || '';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = (("TURBOPACK compile-time truthy", 1) ? process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN : "TURBOPACK unreachable") || '';
// URL da API GraphQL do Shopify
const SHOPIFY_API_URL = SHOPIFY_STORE_DOMAIN ? `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json` : '';
const isShopifyConfigured = ()=>{
    return Boolean(SHOPIFY_STORE_DOMAIN && SHOPIFY_STOREFRONT_ACCESS_TOKEN);
};
// Função auxiliar para fazer requisições GraphQL ao Shopify
async function shopifyFetch(query, variables) {
    if (!isShopifyConfigured()) {
        throw new Error('Shopify não está configurado. Verifique as variáveis de ambiente.');
    }
    const response = await fetch(SHOPIFY_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN
        },
        body: JSON.stringify({
            query,
            variables
        })
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
const CATEGORY_TO_COLLECTION = {
    'vestuario': 'vestuario',
    'calcados': 'calcados',
    'relogios': 'relogios',
    'perfumes': 'perfumes',
    'carteiras': 'carteiras',
    'cintos': 'cintos',
    'oculos': 'oculos',
    'acessorios': 'acessorios'
};
// Converte produto do Shopify para o formato do app
function convertShopifyProduct(shopifyProduct) {
    const images = shopifyProduct.images.edges.map((edge)=>edge.node.url);
    return {
        id: shopifyProduct.id.replace('gid://shopify/Product/', ''),
        brand: shopifyProduct.vendor || 'VITRA',
        name: shopifyProduct.title,
        price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
        imageFront: images[0] || 'https://picsum.photos/seed/placeholder/800/1000',
        imageBack: images[1] || images[0] || 'https://picsum.photos/seed/placeholder/800/1000',
        category: shopifyProduct.productType || 'Geral',
        description: shopifyProduct.description
    };
}
async function fetchShopifyProducts(limit = 50) {
    const data = await shopifyFetch(PRODUCTS_QUERY, {
        first: limit
    });
    return data.products.edges.map((edge)=>convertShopifyProduct(edge.node));
}
async function fetchShopifyProductByHandle(handle) {
    const data = await shopifyFetch(PRODUCT_BY_HANDLE_QUERY, {
        handle
    });
    if (!data.productByHandle) {
        return null;
    }
    return convertShopifyProduct(data.productByHandle);
}
async function fetchShopifyProductsByCategory(category, limit = 20) {
    const collectionHandle = CATEGORY_TO_COLLECTION[category.toLowerCase()] || category;
    try {
        const data = await shopifyFetch(PRODUCTS_BY_COLLECTION_QUERY, {
            handle: collectionHandle,
            first: limit
        });
        if (!data.collectionByHandle) {
            return [];
        }
        return data.collectionByHandle.products.edges.map((edge)=>convertShopifyProduct(edge.node));
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
async function createShopifyCheckout(items) {
    const lineItems = items.map((item)=>({
            variantId: `gid://shopify/ProductVariant/${item.variantId}`,
            quantity: item.quantity
        }));
    const data = await shopifyFetch(CREATE_CHECKOUT_MUTATION, {
        input: {
            lineItems
        }
    });
    if (data.checkoutCreate.checkoutUserErrors.length > 0) {
        console.error('Erro ao criar checkout:', data.checkoutCreate.checkoutUserErrors);
        return null;
    }
    return data.checkoutCreate.checkout?.webUrl || null;
}
const __TURBOPACK__default__export__ = {
    isConfigured: isShopifyConfigured,
    fetchProducts: fetchShopifyProducts,
    fetchProductByHandle: fetchShopifyProductByHandle,
    fetchProductsByCategory: fetchShopifyProductsByCategory,
    createCheckout: createShopifyCheckout
};
}),
"[project]/Vitra/context/ProductContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductProvider",
    ()=>ProductProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Contexto de Produtos
 * 
 * Gerencia os produtos da loja, podendo usar dados locais (constants.ts)
 * ou buscar diretamente do Shopify quando configurado.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/services/shopify.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ProductContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ProductProvider = ({ children })=>{
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isShopifyEnabled, setIsShopifyEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Extrai categorias dinamicamente dos produtos
    const getCategoriesFromProducts = (productList)=>{
        const categoryMap = {
            'vestuario': 'Vestuário',
            'calcados': 'Calçados',
            'relogios': 'Relógios',
            'perfumes': 'Perfumes',
            'carteiras': 'Carteiras',
            'cintos': 'Cintos',
            'oculos': 'Óculos'
        };
        // Mapeamento de categorias de produto para IDs de categoria
        const productCategoryToCategoryId = {
            'Camisas': 'vestuario',
            'Blazers': 'vestuario',
            'Polos': 'vestuario',
            'Calças': 'vestuario',
            'Calçados': 'calcados',
            'Relógios': 'relogios',
            'Perfumes': 'perfumes',
            'Carteiras': 'carteiras',
            'Cintos': 'cintos',
            'Óculos': 'oculos'
        };
        // Extrai categorias únicas dos produtos
        const uniqueProductCategories = new Set(productList.map((product)=>product.category));
        // Converte para CategoryOption[] e remove duplicatas
        const categoriesSet = new Map();
        uniqueProductCategories.forEach((productCategory)=>{
            const categoryId = productCategoryToCategoryId[productCategory];
            if (categoryId && !categoriesSet.has(categoryId)) {
                categoriesSet.set(categoryId, categoryMap[categoryId] || productCategory);
            }
        });
        // Adiciona "Todos" no início
        const categories = [
            {
                id: 'todos',
                label: 'Todos'
            }
        ];
        // Ordena as categorias restantes
        Array.from(categoriesSet.entries()).sort((a, b)=>a[1].localeCompare(b[1])).forEach(([id, label])=>{
            categories.push({
                id,
                label
            });
        });
        // Adiciona "Acessórios" se houver carteiras, cintos ou óculos
        const hasAccessories = uniqueProductCategories.has('Carteiras') || uniqueProductCategories.has('Cintos') || uniqueProductCategories.has('Óculos');
        if (hasAccessories && !categories.find((c)=>c.id === 'acessorios')) {
            categories.push({
                id: 'acessorios',
                label: 'Acessórios'
            });
        }
        return categories;
    };
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getCategoriesFromProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]));
    // Verifica se o Shopify está configurado e carrega os produtos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAndLoadShopify = async ()=>{
            const shopifyConfigured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isShopifyConfigured"])();
            setIsShopifyEnabled(shopifyConfigured);
            if (shopifyConfigured) {
                await refreshProducts();
            }
        };
        checkAndLoadShopify();
    }, []);
    // Função para recarregar produtos do Shopify
    const refreshProducts = async ()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isShopifyConfigured"])()) {
            // Se Shopify não está configurado, usa produtos locais
            setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const shopifyProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchShopifyProducts"])(100);
            if (shopifyProducts.length > 0) {
                setProducts(shopifyProducts);
                setCategories(getCategoriesFromProducts(shopifyProducts));
            } else {
                // Fallback para produtos locais se não houver produtos no Shopify
                setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]);
                setCategories(getCategoriesFromProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]));
            }
        } catch (err) {
            console.error('Erro ao carregar produtos do Shopify:', err);
            setError('Não foi possível carregar os produtos. Usando dados locais.');
            setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]);
            setCategories(getCategoriesFromProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"]));
        } finally{
            setLoading(false);
        }
    };
    // Busca um produto pelo ID
    const getProductById = (id)=>{
        return products.find((product)=>product.id === id);
    };
    // Busca produtos por categoria
    const getProductsByCategory = (category)=>{
        if (!category || category === 'todos') {
            return products;
        }
        const categoryMap = {
            'vestuario': [
                'Camisas',
                'Blazers',
                'Polos',
                'Calças'
            ],
            'calcados': [
                'Calçados'
            ],
            'relogios': [
                'Relógios'
            ],
            'perfumes': [
                'Perfumes'
            ],
            'carteiras': [
                'Carteiras'
            ],
            'cintos': [
                'Cintos'
            ],
            'oculos': [
                'Óculos'
            ],
            'acessorios': [
                'Carteiras',
                'Cintos',
                'Óculos'
            ]
        };
        const categoriesMatch = categoryMap[category.toLowerCase()];
        if (categoriesMatch) {
            return products.filter((product)=>categoriesMatch.some((cat)=>product.category.toLowerCase().includes(cat.toLowerCase())));
        }
        return products.filter((product)=>product.category.toLowerCase() === category.toLowerCase());
    };
    const value = {
        products,
        categories,
        loading,
        error,
        isShopifyEnabled,
        refreshProducts,
        getProductById,
        getProductsByCategory
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Vitra/context/ProductContext.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useProducts = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts deve ser usado dentro de um ProductProvider');
    }
    return context;
};
const __TURBOPACK__default__export__ = ProductContext;
}),
"[project]/Vitra/context/CartContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CartProvider = ({ children })=>{
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const addToCart = (product)=>{
        setCartItems((prev)=>{
            const existing = prev.find((item)=>item.id === product.id);
            if (existing) {
                return prev.map((item)=>item.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                    size: 'M'
                }
            ];
        });
        setIsCartOpen(true);
    };
    const updateQuantity = (id, delta)=>{
        setCartItems((prev)=>prev.map((item)=>{
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: Math.max(1, item.quantity + delta)
                    };
                }
                return item;
            }));
    };
    const removeItem = (id)=>{
        setCartItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const cartItemCount = cartItems.reduce((acc, item)=>acc + item.quantity, 0);
    const onOpenCart = ()=>setIsCartOpen(true);
    const onCloseCart = ()=>setIsCartOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            isCartOpen,
            onOpenCart,
            onCloseCart,
            addToCart,
            updateQuantity,
            removeItem,
            cartItemCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Vitra/context/CartContext.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useCart = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
}),
"[project]/Vitra/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$ProductContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/context/ProductContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/context/CartContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$ProductContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/Vitra/app/providers.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Vitra/app/providers.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Vitra/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c5566747._.js.map