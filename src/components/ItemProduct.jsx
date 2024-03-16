import {useState, useEffect} from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function ItemProduct() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        const fetchProducts = () =>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const productsData = [
                        {
                          id: 1,
                          image: "https://via.placeholder.com/300",
                          name: "Logotipo",
                          description: "Lorem ipsum",
                          price: 1000
                        },
                    
                        {
                          id: 2,
                          image: "https://via.placeholder.com/300",
                          name: "Página web",
                          description: "Lorem ipsum",
                          price: 6000
                        },
                    
                        {
                          id: 3,
                          image: "https://via.placeholder.com/300",
                          name: "Edición de video",
                          description: "Lorem ipsum",
                          price: 2500
                        },
                    
                        {
                          id: 4,
                          image: "https://via.placeholder.com/300",
                          name: "Playera",
                          description: "Lorem ipsum",
                          price: 500
                        }
                      ];
                      resolve(productsData); 
                }, 2000);
            });
        };

        fetchProducts().then((data)=>{
            setProducts(data);
        });

    }, []);

  

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="4">
      {products.map((product) => (
        <GridItem key={product.id}>
          <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <img className="w-full h-64 object-cover object-center" src={product.image} alt="Product Image" />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">{product.price}</span>
                <button className="px-3 py-1 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">Añadir al Carrito</button>
              </div>
            </div>
          </div>
        </GridItem>
      ))}
    </Grid>
  );
}

export default ItemProduct;
