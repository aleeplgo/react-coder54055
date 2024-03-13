import React, { useState, useRef, useEffect } from 'react';

function CartWidget(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  function handleMouseEnter() {
    setShowDropdown(true);
  }

  return (
    <div className="cart-icon" onMouseEnter={handleMouseEnter} ref={dropdownRef}>
      <span className="item-count">0</span>
      <a href="#">
        <span className="material-symbols-outlined">shopping_cart</span>
      </a>
      {showDropdown && (
        <div className="dropdown">
          <ul>
            <li>{props.product} - ${props.price}</li>
            <li>{props.product} - ${props.price}</li>
            <li>{props.product} - ${props.price}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartWidget;
