import React, { useState, useEffect } from "react";
import { removeFromCart, updateQuantity } from '../store/cart';

export default function Cart({ lang, siteUrl, cartTraductions }) {
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

    // Detectar idioma directamente de la URL actual
    const currentLang = window.location.pathname.split("/")[1];

    // Definir mensajes en función del idioma actual
    let greeting, productLabel, quantityLabel, priceLabel, totalLabel;

    if (currentLang === "es") {
      greeting = "Hola, me gustaría hacer el siguiente pedido:\n\n";
      productLabel = "Producto";
      quantityLabel = "Cantidad";
      priceLabel = "Precio";
      totalLabel = "Total";
    } else {
      greeting = "Hello, I would like to place the following order:\n\n";
      productLabel = "Product";
      quantityLabel = "Quantity";
      priceLabel = "Price";
      totalLabel = "Total";
    }

    // Construcción del mensaje
    let mensaje = greeting;
    cart.forEach(item => {
      mensaje += `${productLabel}: ${item.name}\n${quantityLabel}: ${item.quantity}\n${priceLabel}: $${item.price * item.quantity}\n\n`;
    });

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    mensaje += `${totalLabel}: $${total}\n`;

    // Codificar mensaje para URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroTelefono = '17869256878'; // Número de destino en WhatsApp

    // Abrir enlace de WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`, '_blank');
  };

  useEffect(() => {
    const cartData = getCart();
    setCart(cartData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">{cartTraductions.titleCart}</h2>

      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => {

            return (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-[#f9f8f4] shadow-md rounded-lg p-4 space-y-4 md:space-y-0">
                <img src={item.image} alt={item.name} className="w-24 h-24 md:w-16 md:h-16 object-cover rounded-md mr-4" />

                <div className="flex-1 text-center md:text-left">
                  <p className="font-semibold text-lg text-[#2e3814]">{item.name}</p>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                  <div className="flex items-center justify-center border border-[#dedaba] rounded-lg">
                    <button
                      onClick={() => handleQuantity(index, -1)}
                      disabled={item.quantity === 1}
                      className="px-2 text-[#2e3814]">
                      -
                    </button>
                    <span className="px-4 text-[#2e3814]">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantity(index, 1)}
                      className="px-2 text-[#2e3814]">
                      +
                    </button>
                  </div>

                  <p className="text-[#2e3814]">${item.price.toFixed(2)}</p>

                  <button
                    onClick={() => removeItem(index)}
                    className="text-[#2e3814] underline hover:text-red-600 transition-colors duration-300">
                    {cartTraductions.quitCart}
                  </button>
                </div>
              </div>


            )
          })}

          <div className="text-right mt-4">
            <p className="text-2xl font-bold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          </div>

          <div className="flex gap-4">
            <button onClick={clearCart} className="w-full border border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors duration-300">
              {cartTraductions.clearCart}
            </button>
            <button onClick={enviarPorWhatsapp} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors duration-300">
              {cartTraductions.checkoutCart}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">{cartTraductions.emptyCart}</p>
      )}
    </div>
  );
}


