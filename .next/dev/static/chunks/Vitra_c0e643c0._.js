(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Vitra/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Vitra/services/shopify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Configuração do Shopify
// Next.js usa process.env para variáveis de ambiente no servidor
// e process.env.NEXT_PUBLIC_* para variáveis públicas no cliente
const SHOPIFY_STORE_DOMAIN = (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN) || '';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) || '';
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Vitra/context/ProductContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductProvider",
    ()=>ProductProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Contexto de Produtos
 * 
 * Gerencia os produtos da loja, podendo usar dados locais (constants.ts)
 * ou buscar diretamente do Shopify quando configurado.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/services/shopify.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ProductContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ProductProvider = ({ children })=>{
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isShopifyEnabled, setIsShopifyEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProductProvider.useState": ()=>getCategoriesFromProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"])
    }["ProductProvider.useState"]);
    // Verifica se o Shopify está configurado e carrega os produtos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductProvider.useEffect": ()=>{
            const checkAndLoadShopify = {
                "ProductProvider.useEffect.checkAndLoadShopify": async ()=>{
                    const shopifyConfigured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShopifyConfigured"])();
                    setIsShopifyEnabled(shopifyConfigured);
                    if (shopifyConfigured) {
                        await refreshProducts();
                    }
                }
            }["ProductProvider.useEffect.checkAndLoadShopify"];
            checkAndLoadShopify();
        }
    }["ProductProvider.useEffect"], []);
    // Função para recarregar produtos do Shopify
    const refreshProducts = async ()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShopifyConfigured"])()) {
            // Se Shopify não está configurado, usa produtos locais
            setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const shopifyProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$services$2f$shopify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchShopifyProducts"])(100);
            if (shopifyProducts.length > 0) {
                setProducts(shopifyProducts);
                setCategories(getCategoriesFromProducts(shopifyProducts));
            } else {
                // Fallback para produtos locais se não houver produtos no Shopify
                setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]);
                setCategories(getCategoriesFromProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]));
            }
        } catch (err) {
            console.error('Erro ao carregar produtos do Shopify:', err);
            setError('Não foi possível carregar os produtos. Usando dados locais.');
            setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]);
            setCategories(getCategoriesFromProducts(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"]));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Vitra/context/ProductContext.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductProvider, "dwduKVbDU4gaUALv+QvCK+37AmE=");
_c = ProductProvider;
const useProducts = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts deve ser usado dentro de um ProductProvider');
    }
    return context;
};
_s1(useProducts, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const __TURBOPACK__default__export__ = ProductContext;
var _c;
__turbopack_context__.k.register(_c, "ProductProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Vitra/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CartProvider = ({ children })=>{
    _s();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
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
_s(CartProvider, "2pgWLTKKRjRT9jgSq48lit0ZbDc=");
_c = CartProvider;
const useCart = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Vitra/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$ProductContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/context/ProductContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vitra/context/CartContext.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$ProductContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
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
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Vitra/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Vitra/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Vitra/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Vitra$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Vitra/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Vitra/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Vitra_c0e643c0._.js.map