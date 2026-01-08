export interface Product {
  id: string;
  variantId?: string; // ID da variante no Shopify (necessário para checkout headless)
  brand: string;
  name: string;
  price: number;
  imageFront: string;
  imageBack: string;
  category: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export type CategorySize = 'large' | 'tall' | 'square';

export interface Category {
  id: string;
  title: string;
  image: string;
  size: CategorySize;
  link: string;
}

export type PageRoute = '/' | '/produtos' | '/produto/:id' | '/sobre' | '/contato';
