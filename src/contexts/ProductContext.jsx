import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productsData = [
            {
              id: 1,
              image: "https://via.placeholder.com/300",
              name: "Logotipo",
              description: "Lorem ipsum",
              price: 1000,
              quantity: 1
            },
            {
              id: 2,
              image: "https://via.placeholder.com/300",
              name: "Página web",
              description: "Lorem ipsum",
              price: 6000,
              quantity: 1
            },
            {
              id: 3,
              image: "https://via.placeholder.com/300",
              name: "Edición de video",
              description: "Lorem ipsum",
              price: 2500,
              quantity: 1
            },
            {
              id: 4,
              image: "https://via.placeholder.com/300",
              name: "Playera",
              description: "Lorem ipsum",
              price: 500,
              quantity: 1
            }
          ];
          resolve(productsData);
        }, 2000);
      });
    };

    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
