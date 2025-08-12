import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProducts } from '../utils/api';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (e) {
        setError(e);
        console.error("Failed to fetch products:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const value = { products, loading, error };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}

