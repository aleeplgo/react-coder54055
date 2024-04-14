import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductContext';
import { CartContext } from '../CartContext';


const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const { addToCart } = useContext(CartContext);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />
        </div>
        <div className="col-span-1">
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-800 font-semibold">Precio: ${product.price}</p>
          <button 
  className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
  onClick={() => addToCart(product)}
>
  Añadir al carrito
</button>
        </div>
      </div>
    </div>
  );
}


export default ProductPage;