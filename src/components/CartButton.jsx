import { useStore } from "@nanostores/react";
import { cart } from "../store/cart";
import { useEffect, useState } from 'react';

export default function CartButton() {
  const cartItems = useStore(cart);
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    let acc = 0;

    if (cartItems && cartItems.length > 0) {
      cartItems.forEach(prod => {
        acc += prod.quantity;
      });
    }

    setCartCounter(acc);
  }, [cartItems]);

  return (
    <div className="items-center justify-center flex">
      <span>{cartCounter}</span>
      <a
        href="/cart"
        className="block py-2 px-3 text-white rounded cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </a>
    </div>
  );
}
