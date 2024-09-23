import React, { useState, useEffect } from "react";
import {removeFromCart, updateQuantity} from '../store/cart';

export default function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  const handleQuantity = (index, quantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + quantity } : item
    );
    setCart(updatedCart);
    updateQuantity(cart[index].id, cart[index].quantity + quantity);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    removeFromCart(cart[index].id);
    setCart(cart.filter((item, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const enviarPorWhatsapp = () => {
    if (cart.length === 0) return;

    let mensaje = 'Hola, me gustaría hacer el siguiente pedido:\n\n';
    cart.forEach(item => {
      mensaje += `Producto: ${item.name}\nCantidad: ${item.quantity}\nPrecio: $${item.price * item.quantity}\n\n`;
    });
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    mensaje += `Total: $${total}\n`;

    // Codificar el mensaje para usarlo en la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroTelefono = '1234567890'; // Reemplaza con el número de teléfono que recibirá el mensaje

    // Abrir el enlace de WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`, '_blank');
  };

  useEffect(() => {
    const cartData = getCart();
    setCart(cartData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-gray-500">Unidad ${item.price}</p>
                <p className="text-gray-500">Subtotal ${item.price * item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleQuantity(index, -1)} disabled={item.quantity === 1}>-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => handleQuantity(index, 1)}>+</button>
              </div>
              <button onClick={() => removeItem(index)} className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-2xl font-bold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          </div>

          <div className="flex gap-4">
            <button onClick={clearCart} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors duration-300">
              Clear Cart
            </button>
            <button onClick={enviarPorWhatsapp} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors duration-300">
              Enviar por Whatsapp
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
