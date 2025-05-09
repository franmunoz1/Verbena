import { atom } from 'nanostores';

const getInitialCart = () => {
  if (typeof window !== 'undefined' && localStorage) {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

export const cart = atom(getInitialCart());

export const addToCart = (product, quantity = 1) => {
  const currentCart = cart.get();
  const existingProductIndex = currentCart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    // Update the quantity for the existing product
    currentCart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product with the passed quantity
    currentCart.push({
      id: product.id,
      name: product.name_es,
      price: product.price,
      quantity: quantity, // Use the passed quantity here
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