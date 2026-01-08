/**
 * Contexto de Produtos
 * 
 * Gerencia os produtos da loja, podendo usar dados locais (constants.ts)
 * ou buscar diretamente do Shopify quando configurado.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import shopifyService, { isShopifyConfigured, fetchShopifyProducts } from '../services/shopify';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  isShopifyEnabled: boolean;
  refreshProducts: () => Promise<void>;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isShopifyEnabled, setIsShopifyEnabled] = useState(false);

  // Verifica se o Shopify está configurado e carrega os produtos
  useEffect(() => {
    const checkAndLoadShopify = async () => {
      const shopifyConfigured = isShopifyConfigured();
      setIsShopifyEnabled(shopifyConfigured);

      if (shopifyConfigured) {
        await refreshProducts();
      }
    };

    checkAndLoadShopify();
  }, []);

  // Função para recarregar produtos do Shopify
  const refreshProducts = async () => {
    if (!isShopifyConfigured()) {
      // Se Shopify não está configurado, usa produtos locais
      setProducts(PRODUCTS);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const shopifyProducts = await fetchShopifyProducts(100);
      
      if (shopifyProducts.length > 0) {
        setProducts(shopifyProducts);
      } else {
        // Fallback para produtos locais se não houver produtos no Shopify
        setProducts(PRODUCTS);
      }
    } catch (err) {
      console.error('Erro ao carregar produtos do Shopify:', err);
      setError('Não foi possível carregar os produtos. Usando dados locais.');
      setProducts(PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  // Busca um produto pelo ID
  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  // Busca produtos por categoria
  const getProductsByCategory = (category: string): Product[] => {
    if (!category || category === 'todos') {
      return products;
    }

    const categoryMap: Record<string, string[]> = {
      'vestuario': ['Camisas', 'Blazers', 'Polos', 'Calças'],
      'calcados': ['Calçados'],
      'relogios': ['Relógios'],
      'perfumes': ['Perfumes'],
      'carteiras': ['Carteiras'],
      'cintos': ['Cintos'],
      'oculos': ['Óculos'],
      'acessorios': ['Carteiras', 'Cintos', 'Óculos'],
    };

    const categoriesMatch = categoryMap[category.toLowerCase()];
    
    if (categoriesMatch) {
      return products.filter(product => 
        categoriesMatch.some(cat => 
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  const value: ProductContextType = {
    products,
    loading,
    error,
    isShopifyEnabled,
    refreshProducts,
    getProductById,
    getProductsByCategory,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  
  if (context === undefined) {
    throw new Error('useProducts deve ser usado dentro de um ProductProvider');
  }
  
  return context;
};

export default ProductContext;

