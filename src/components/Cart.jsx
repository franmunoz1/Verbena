import React, { useState, useEffect } from "react";
import { removeFromCart, updateQuantity } from '../store/cart';

export default function Cart({ lang, siteUrl }) {
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
                    Remove
                  </button>
                </div>
              </div>


            )
          })}

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

// import React, { useState, useEffect } from "react"
// import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react"

// export default function Cart({ lang, siteUrl }) {
//   const [cart, setCart] = useState([])

//   const getCart = () => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//       const storedCart = localStorage.getItem('cart')
//       return storedCart ? JSON.parse(storedCart) : []
//     }
//     return []
//   }

//   const handleQuantity = (index, quantity) => {
//     const updatedCart = cart.map((item, i) =>
//       i === index ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
//     )
//     setCart(updatedCart)
//     localStorage.setItem('cart', JSON.stringify(updatedCart))
//   }

//   const removeItem = (index) => {
//     const updatedCart = cart.filter((_, i) => i !== index)
//     setCart(updatedCart)
//     localStorage.setItem('cart', JSON.stringify(updatedCart))
//   }

//   const clearCart = () => {
//     setCart([])
//     localStorage.removeItem('cart')
//   }

//   const enviarPorWhatsapp = () => {
//     if (cart.length === 0) return

//     let mensaje = 'Hola, me gustaría hacer el siguiente pedido:\n\n'
//     cart.forEach(item => {
//       mensaje += `Producto: ${item.name}\nCantidad: ${item.quantity}\nPrecio: $${item.price * item.quantity}\n\n`
//     })
//     const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
//     mensaje += `Total: $${total}\n`

//     const mensajeCodificado = encodeURIComponent(mensaje)
//     const numeroTelefono = '1234567890' // Reemplaza con el número de teléfono que recibirá el mensaje

//     window.open(`https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`, '_blank')
//   }

//   useEffect(() => {
//     const cartData = getCart()
//     setCart(cartData)
//   }, [])

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//         <ShoppingCart className="w-8 h-8" />
//         Your Cart
//       </h2>

//       {cart.length > 0 ? (
//         <div className="p-6 border border-gray-300 rounded-lg">
//           <div className="h-[calc(100vh-300px)] overflow-y-auto">
//             {cart.map((item, index) => (
//               <div key={index} className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b last:border-b-0">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md" />
//                 <div className="flex-grow text-center sm:text-left">
//                   <p className="font-semibold text-lg">{item.name}</p>
//                   <p className="text-sm text-gray-500">Unit Price: ${item.price}</p>
//                   <p className="text-sm font-medium">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
//                 </div>
//                 <div className="flex items-center justify-center sm:justify-start gap-2">
//                   <button
//                     className="border border-gray-300 p-2 rounded-md"
//                     onClick={() => handleQuantity(index, -1)}
//                     disabled={item.quantity === 1}
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus className="h-4 w-4" />
//                   </button>
//                   <span className="w-8 text-center">{item.quantity}</span>
//                   <button
//                     className="border border-gray-300 p-2 rounded-md"
//                     onClick={() => handleQuantity(index, 1)}
//                     aria-label="Increase quantity"
//                   >
//                     <Plus className="h-4 w-4" />
//                   </button>
//                   <button
//                     className="border border-red-500 p-2 rounded-md"
//                     onClick={() => removeItem(index)}
//                     aria-label={`Remove ${item.name} from cart`}
//                   >
//                     <Trash2 className="h-4 w-4 text-red-500" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 space-y-4">
//             <div className="flex justify-between items-center text-xl font-bold">
//               <span>Total:</span>
//               <span>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 className="bg-red-500 text-white w-full sm:w-1/2 p-2 rounded-md"
//                 onClick={clearCart}
//               >
//                 Clear Cart
//               </button>
//               <button
//                 className="bg-green-500 text-white w-full sm:w-1/2 p-2 rounded-md"
//                 onClick={enviarPorWhatsapp}
//               >
//                 Send via WhatsApp
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="p-6 text-center text-gray-500 border border-gray-300 rounded-lg">
//           Your cart is empty.
//         </div>
//       )}
//     </div>
//   )
// }

