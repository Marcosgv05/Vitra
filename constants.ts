import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
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

export const CATEGORIES: Category[] = [
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

// Textos do site em português
export const SITE_TEXT = {
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
