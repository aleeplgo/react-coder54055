import { createContext, useState, useEffect, useContext, useCallback } from "react";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const productsCollection = collection(db, "products");
      const snapshot = await getDocs(productsCollection);
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
      setFilteredProducts(productsData);
    } catch (error) {
      console.error("Error al obtener documentos de Firestore:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ProductContext.Provider
      value={{ products, loading, fetchData, filteredProducts, setFilteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductProvider, useProductContext };
