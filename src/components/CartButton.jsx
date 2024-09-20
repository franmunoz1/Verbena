import { useStore } from '@nanostores/react';
import { cart as getCart} from '../store/cart';

export default function CartButton() {
  console.log("el vla", getCart.get())
  // lee el valor del store con el hook `useStore`
  const cart = useStore(getCart);
  // escribe en el store importado usando `.set`
  return (
    <div class={"items-center justify-center flex"}>
      <span>{cart.length}</span>
      <a 
      href="/cart"
    className="block py-2 px-3 text-white rounded cursor-pointer "><svg xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                            </a>
    </div>
  )
}