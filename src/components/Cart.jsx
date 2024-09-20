import React, { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Check if localStorage is available (client-side only)
  const getCart = () => {
    if (typeof window !== 'undefined' && localStorage) {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  useEffect(() => {
    const cartData = getCart();
    setCart(cartData);
  }, []);

  console.log("cart", cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {/* Render cart items */}
      {cart.length > 0 ? (
        cart.map((item, index) => <div class="" key={index}>
          <p>{item.name} - ${item.price}</p>
          <button>Remove</button>
        </div>)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
