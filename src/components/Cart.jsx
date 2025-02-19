import React, { useState, useEffect } from "react";
import { removeFromCart, updateQuantity } from '../store/cart';

export default function Cart({ lang, siteUrl, cartTraductions }) {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const confirmClearCart = () => {
    const isConfirmed = window.confirm(cartTraductions.confirmClearCart || "¿Estás seguro de que quieres vaciar el carrito?");
    if (isConfirmed) {
      clearCart();
    }
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
                  <div className="flex items-center justify-center border border-green-verbena rounded-lg">
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
            <button
              onClick={() => setShowModal(true)}
              className="w-full border border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors duration-300"
            >
              {cartTraductions.clearCart}
            </button>

            <button
              onClick={enviarPorWhatsapp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {cartTraductions.checkoutCart}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </button>

          </div>
        </div>
      ) : (
        <p className="text-gray-500">{cartTraductions.emptyCart}</p>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-4">
              {cartTraductions.questionCart}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setCart([]);
                  localStorage.removeItem('cart');
                  setShowModal(false);
                }}
                className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
              >
                {cartTraductions.confirmCart}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                {cartTraductions.cancelCart}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

  );
}


