import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Calcula el total de productos en el carrito
    const calculateTotalItems = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      return total;
    };

    setTotalItems(calculateTotalItems());
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].total += product.price;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1, total: product.price }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
