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
      quantity: 1,
      alt: product.alt,
      description: product.description,
      recomendation: product.recomendation,
      summary: product.summary,
      image: product.image,
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

export const updateQuantity = (productId, quantity) => {
  const currentCart = cart.get();
  const existingProductIndex = currentCart.findIndex(item => item.id === productId);

  if (existingProductIndex !== -1) {
    currentCart[existingProductIndex].quantity = quantity;
  }

  cart.set([...currentCart]);
  localStorage.setItem('cart', JSON.stringify(currentCart));
}