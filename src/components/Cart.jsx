import { useStore } from '@nanostores/react';
import { cart } from '../store/cart';

export default function Cart() {
    console.log("awda")
  const cart = useStore(cart);
  console.log("aca", cart)

  return cart ? <span>...</span> : <span>asd</span>;
}