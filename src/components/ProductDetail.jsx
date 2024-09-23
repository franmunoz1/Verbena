import React, { useState } from 'react';
import { addToCart } from '../store/cart';

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(product, quantity);
        }
    };

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt={product.alt} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded max-h-[500px]" src={product.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <div className="flex mb-4"></div>
                        <p className="leading-relaxed">{product.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                        <div className="flex justify-between">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>

                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="w-16 text-center border rounded mr-2"
                                />
                                <button
                                    onClick={handleAddToCart}
                                    className="flex bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
