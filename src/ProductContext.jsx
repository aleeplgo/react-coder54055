import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  const fetchData = () => {
    setLoading(true); // Establecer el estado de carga a true antes de cargar los datos

    setTimeout(() => {
      const productsData = [
        {
          id: 1,
          image: "https://via.placeholder.com/300",
          name: "Logotipo",
          description: "Lorem ipsum",
          cathegory: "Branding",
          price: 1000,
          quantity: 1
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300",
          name: "Página web",
          description: "Lorem ipsum",
          cathegory: "Web",
          price: 6000,
          quantity: 1
        },
        {
          id: 3,
          image: "https://via.placeholder.com/300",
          name: "Edición de video",
          description: "Lorem ipsum",
          cathegory: "Video",
          price: 2500,
          quantity: 1
        },
        {
          id: 4,
          image: "https://via.placeholder.com/300",
          name: "Playera",
          description: "Lorem ipsum",
          cathegory: "Branding",
          price: 500,
          quantity: 1
        }
      ];

      setProducts(productsData);
      setLoading(false); // Cambiar el estado de carga a false después de cargar los datos
    }, 2000);
  };

  useEffect(() => {
    fetchData(); // Cargar datos inicialmente al montar el componente
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, fetchData }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductProvider, useProductContext };
