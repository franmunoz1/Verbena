import React from "react";
import { addToCart } from '../store/cart';

export default function productCard({ products, lang, siteUrl }) {

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="max-w-lg rounded overflow-hidden shadow-lg p-6 bg-white flex flex-col"
                        >
                            <img
                                className="w-full h-[300px] object-cover"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{product.name}</div>
                                <p className="text-gray-700 text-base">{product.summary}</p>
                                <span className="text-gray-700 font-bold">Price: ${product.price}</span>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex flex-col gap-6 mt-auto">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                    Agregar al carrito
                                </button>
                                <a
                                    href={`/${lang}/product-${product.id}`}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full text-center"
                                >
                                    Ver más
                                </a>


                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles para la categoría seleccionada.</p>
                )}
            </section>
        </div>
    );
}
