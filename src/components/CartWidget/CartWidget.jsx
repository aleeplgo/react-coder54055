import { useState } from 'react'


function CartWidget() {
  // Estado para controlar la visibilidad del dropdown
  const [showDropdown, setShowDropdown] = useState(false);

// Función para alternar la visibilidad del dropdown
function toggleDropdown() {
    setShowDropdown(!showDropdown);
}

return (

<div className="cart-icon" onClick={toggleDropdown}>
<span className="item-count">0</span>
<a href="#"> <span className="material-symbols-outlined">shopping_cart</span></a>
</div>

    
)
}

export default CartWidget;
