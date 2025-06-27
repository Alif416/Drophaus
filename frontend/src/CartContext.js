// src/CartContext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => [...prev, product]);
  }

  function removeFromCart(index) {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
