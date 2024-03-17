import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { RemoveFromCartIcon } from './Icons.jsx'


function CartWidget() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

   // Calcular la cantidad total de productos en el carrito sumando las cantidades de todos los productos
   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

   // Calcular el precio total sumando el precio de cada producto multiplicado por su cantidad
   const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="group">
      <button className="text-white hover:text-gray-300 relative">
        <span className="material-symbols-outlined h-6 w-6">shopping_cart</span>
        <span className="item-count absolute top-1 right--100 bg-red-500 text-white rounded-full px-1 text-xs">
          {totalQuantity}
        </span>
      </button>
      <ul className="group-hover:block hidden mt-0 w-48 bg-white border rounded-lg shadow-lg z-10 absolute right-0">

        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <strong>{item.name}</strong> - ${item.price * item.quantity} {/* Multiplica el precio por la cantidad */}
            </p>
            <footer>
              <small className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Qty: {item.quantity}</small>
              <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">
                <RemoveFromCartIcon/>
              </button>
            </footer>
          </li>
        ))}
        <div className="px-4 py-2 text-gray-800">Total: ${totalPrice}</div> {/* Muestra el precio total */}
        <button onClick={clearCart} className="w-48 px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">
          Vacíar Carrito
        </button>
      </ul>
    </div>
  );
}

export default CartWidget;
