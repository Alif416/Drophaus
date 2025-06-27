// src/components/Navbar.js
import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Drop Shoulder Store</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
        <a href="/checkout">Checkout</a>
      </div>
    </nav>
  );
}
