import  { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      const productsData = [
        {
          id: 1,
          image: "https://via.placeholder.com/300",
          name: "Logotipo",
          description: "Lorem ipsum",
          category: "Branding",
          price: 1000,
          quantity: 1
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300",
          name: "Página web",
          description: "Lorem ipsum",
          category: "Web",
          price: 6000,
          quantity: 1
        },
        {
          id: 3,
          image: "https://via.placeholder.com/300",
          name: "Edición de video",
          description: "Lorem ipsum",
          category: "Video",
          price: 2500,
          quantity: 1
        },
        {
          id: 4,
          image: "https://via.placeholder.com/300",
          name: "Playera",
          description: "Lorem ipsum",
          category: "Branding",
          price: 500,
          quantity: 1
        }
      ];

      setProducts(productsData);
      setFilteredProducts(productsData);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, fetchData, filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductProvider, useProductContext };
