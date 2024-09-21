import { atom } from 'nanostores';

const getInitialCart = () => {
  if (typeof window !== 'undefined' && localStorage) {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return []; 
};

export const cart = atom(getInitialCart());

export const addToCart = (product) => {
  const currentCart = cart.get();
  const existingProductIndex = currentCart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    currentCart[existingProductIndex].quantity += 1;
  } else {
    currentCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  cart.set([...currentCart]);
  localStorage.setItem('cart', JSON.stringify(currentCart));
};

export const removeFromCart = (productId) => {
  const currentCart = cart.get();

  const updatedCart = currentCart.filter(item => item.id !== productId);

  cart.set([...updatedCart]);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};
