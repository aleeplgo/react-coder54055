
function CartWidget() {
  return (
    <div className="group">
      <button className="text-white hover:text-gray-300 relative">
        <span className="material-symbols-outlined h-6 w-6">shopping_cart</span>
        {/* Número de elementos en el carrito */}
        <span className="item-count absolute top-1 right--100 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
      </button>
      {/* Dropdown */}
      <ul className="group-hover:block hidden mt-0 w-48 bg-white border rounded-lg shadow-lg z-10 absolute right-0">
        <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Producto 1</a></li>
        <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Producto 2</a></li>
        <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Producto 3</a></li>
      </ul>
    </div>
  );
}

export default CartWidget;
