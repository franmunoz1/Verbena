import { useStore } from "@nanostores/react";
import { cart } from "../store/cart";
import { useEffect, useState } from 'react';

export default function CartButton({ siteUrl, lang }) {
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
    <div className="relative flex items-center justify-center">
      <a
        href={`/${lang}/cart`}
        className="block py-2 px-3 text-black rounded cursor-pointer relative"
      >
        <svg

          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>

        {/* Estilo del contador */}
        {cartCounter > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-verbena text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCounter}
          </span>
        )}

      </a>
    </div>
  );
}
