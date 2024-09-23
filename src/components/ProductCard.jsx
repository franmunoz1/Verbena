import React from "react";
import { addToCart } from '../store/cart';

export default function ServiceCard({ products }) {

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
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
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                    Add to Cart
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
