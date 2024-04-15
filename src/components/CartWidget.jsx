import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import { RemoveFromCartIcon } from './Icons.jsx';

function CartWidget() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito sumando las cantidades de todos los productos
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Calcular el precio total sumando el precio de cada producto multiplicado por su cantidad
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

/*  const handleCheckout = () => {
  const totalProducts = cart.length;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const queryString = `totalProducts=${totalProducts}&totalItems=${totalItems}&totalPrice=${totalPrice}`;
  window.location.href = `/checkout?${queryString}`;
}; */
const handleCheckout = () => {
  // Crear un array de objetos con los detalles de cada producto en el carrito
  const productsDetails = cart.map(product => ({
    id: product.id,
    name: product.name,
    quantity: product.quantity,
    price: product.price,
    image: product.image 
  }));

  // Crear una cadena de consulta con los detalles de los productos
  const productQueryString = productsDetails.map(product => {
    const { id, name, quantity, price, image } = product;
    return `product=${id}&name=${encodeURIComponent(name)}&quantity=${quantity}&price=${price}&image=${encodeURIComponent(image)}`;
  }).join('&');

 // Incluir el totalPrice en la URL
 const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
 const queryString = `${productQueryString}&totalPrice=${totalPrice}`;

 // Redirigir al checkout con los detalles de los productos y el totalPrice en la URL
 const baseUrl = '/react-coder54055'; // El basename configurado en BrowserRouter
 window.location.href = `${baseUrl}/checkout?${queryString}`;
};

  
  return (
    <div className="group relative">
      <button className="text-white hover:text-gray-300 relative">
        <span className="material-symbols-outlined h-6 w-6">shopping_cart</span>
        <span className="item-count absolute top-1 right--100 bg-red-500 text-white rounded-full px-1 text-xs">
          {totalQuantity}
        </span>
      </button>
      <div className="group-hover:block hidden mt-0 w-100 bg-white border rounded-lg shadow-lg z-10 absolute right-0 overflow-hidden">
        <h2 className="px-4 py-2 text-left text-black">Mi carrito</h2>
        <div>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-black">Producto</th>
                <th className="px-4 py-2 text-left text-black">Imagen</th>
                <th className="px-4 py-2 text-left text-black">Cantidad</th>
                <th className="px-4 py-2 text-right text-black">Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2">
                    <span className="text-gray-800">{item.name}</span>
                  </td>
                  <td className="px-4 py-2">
                    <img src={item.image} alt={item.name} className="w-12 h-auto mr-2" />
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 text-gray-800 font-semibold rounded-l hover:bg-gray-400">
                      -
                    </button>
                    <span className="px-2 text-gray-800">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 text-gray-800 font-semibold rounded-r hover:bg-gray-400">
                      +
                    </button>
                  </td>
                  <td className="px-4 py-2 text-right text-gray-800">${item.price * item.quantity}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">
                      <RemoveFromCartIcon/>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="px-4 py-2 text-left">Total:</td>
                <td colSpan="2" className="px-4 py-2 text-right">${totalPrice}</td>
              </tr>
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">
                  <button onClick={clearCart} className="w-full px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">
                  <button onClick={handleCheckout} className="w-full px-3 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-700 cursor-pointer">
                  Ir a pagar ${totalPrice.toFixed(2)}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartWidget;
