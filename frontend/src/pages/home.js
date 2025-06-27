// src/pages/Home.js
import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <h2>Explore Drop Shoulder Collection</h2>
      <div className="product-grid">
        {/* We'll add products here soon */}
        <div className="product-card">
          <img src="/shirt.png" alt="Shirt" />
          <h3>Black Drop Shoulder</h3>
          <p>$20</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
