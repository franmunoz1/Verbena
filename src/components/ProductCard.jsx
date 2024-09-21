// // src/components/ServiceCard.jsx
// import React, { useState } from "react";
// import {cart} from '../store/cart';

// export default function ServiceCard({products}) {
//     // Estado para gestionar el filtro actual
//     // const [filter, setFilter] = useState("All");

//     // // Función para manejar el cambio en el filtro
//     // const handleFilterChange = (e) => {
//     //     console.log("Category selected:", e.target.value);
//     //     setFilter(e.target.value);
//     // };

//     // // Filtrar los servicios según la categoría seleccionada
//     // const filteredServices = services.filter((service) => {
//     //     // Si se selecciona "All", se muestran todos los servicios
//     //     if (filter === "All") return true;
//     //     // De lo contrario, se muestran solo los servicios que coinciden con la categoría seleccionada
//     //     return service.category === filter;
//     // });

//     const addProductToCart = (id) => {
//         const product = products.find((product) => product.id === id);
//         console.log("product", product)
//         cart.set([...cart.get(), {
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1
//         }])

//         console.log("aca", localStorage)

//         localStorage.setItem('cart', JSON.stringify(cart.get()))

//     }




//     return (
//         <div>
//             {/* Barra de filtro */}
//             {/* <div className="mb-4">
//                 <label htmlFor="category" className="mr-2">
//                     Filter by Category:
//                 </label>
//                 <select
//                     id="category"
//                     className="border py-2 px-4 rounded"
//                     onChange={handleFilterChange}
//                     value={filter}
//                 >
//                     <option value="All">All</option>
//                     <option value="Filler">Filler</option>
//                     <option value="Botox">Botox</option>
//                     <option value="Peel">Peel</option>
//                 </select>
//             </div> */}

//             {/* Mostrar servicios filtrados */}
//             <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <div
//                             key={product.id}
//                             className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white"
//                         >
//                             <img
//                                 className="w-full max-h-[200px] object-cover"
//                                 src={product.image}
//                                 alt={product.name}
//                             />
//                             <div className="px-6 py-4">
//                                 <div className="font-bold text-xl mb-2">
//                                     {product.name}
//                                 </div>
//                                 <p className="text-gray-700 text-base">
//                                     {product.description}
//                                 </p>
//                             </div>
//                             <div className="px-6 pt-4 pb-2">
//                                 <button onClick={() => addProductToCart(product.id)} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
//                                     Book Now
//                                 </button>
//                                 <a
//                                     href={`/product-${product.id}`}
//                                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
//                                 >
//                                     Learn More
//                                 </a>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No services available for the selected category.</p>
//                 )}
//             </section>
//         </div>
//     );
// }

// src/components/ServiceCard.jsx
import React from "react";
import { cart } from '../store/cart';

export default function ServiceCard({ products }) {

    const addProductToCart = (id) => {
        const product = products.find((product) => product.id === id);
        const currentCart = cart.get();

        const existingProductIndex = currentCart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, incrementa la cantidad
            currentCart[existingProductIndex].quantity += 1;
        } else {
            // Si el producto no está en el carrito, agrégalo
            currentCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        // Actualiza el carrito en el estado y en localStorage
        cart.set(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));

        console.log("Updated cart:", currentCart);
    }

    return (
        <div>
            {/* Mostrar productos */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white"
                        >
                            <img
                                className="w-full max-h-[200px] object-cover"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {product.name}
                                </div>
                                <p className="text-gray-700 text-base">
                                    {product.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button
                                    onClick={() => addProductToCart(product.id)}
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                    Book Now
                                </button>
                                <a
                                    href={`/product-${product.id}`}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available for the selected category.</p>
                )}
            </section>
        </div>
    );
}

