import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductContext';

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ProductPage;