import { useContext } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProductContext } from "../ProductContext.jsx"; 
import { AddToCartIcon } from './Icons.jsx';
import { useCart } from "../hooks/useCart.jsx";
import { Link } from 'react-router-dom';

function ItemProduct() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useCart(); 

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="4">
      {products.map((product) => (
        <GridItem key={product.id}>
          <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <Link to={`/producto/${product.id}`}>
              <img className="w-full h-64 object-cover object-center" src={product.image} alt="Product Image" />
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
              </div>
            </Link>
            <div className="p-6">
              <p className="text-gray-700 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">{product.price}</span>
                <button onClick={() => addToCart(product)} className="px-3 py-1 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer"><AddToCartIcon/></button>
              </div>
            </div>
          </div>
        </GridItem>
      ))}
    </Grid>
  );
}

export default ItemProduct;
