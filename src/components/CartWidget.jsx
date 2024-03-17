import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <div className="group">
      <button className="text-white hover:text-gray-300 relative">
        <span className="material-symbols-outlined h-6 w-6">shopping_cart</span>
        <span className="item-count absolute top-1 right--100 bg-red-500 text-white rounded-full px-1 text-xs">
          {cart.length}
        </span>
      </button>
      <ul className="group-hover:block hidden mt-0 w-48 bg-white border rounded-lg shadow-lg z-10 absolute right-0">

        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              <strong>{item.name}</strong> - ${item.price}
            </p>
            <footer>
              <small className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Qty: {item.quantity}</small>
              <button className="px-3 py-1 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">
                Remove
              </button>
            </footer>
          </li>
        ))}
        <button className="w-48 px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer">
          Clear Cart
        </button>
      </ul>
    </div>
  );
}

export default CartWidget;
