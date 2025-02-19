import React, { useState, useEffect } from 'react';
import { addToCart } from '../store/cart';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = ({ product, siteUrl, lang, detailProductTranslation }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            console.log('Adding to cart, quantity:', quantity); // Debugging
            addToCart(product, quantity);
            toast.success(detailProductTranslation.addedToCart, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: "#708a6f",
                    color: "#fff",
                    fontWeight: "",
                    borderRadius: "8px",
                },
            });
        }
    };


    const [currentLang, setCurrentLang] = useState(lang);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentLang(window.location.pathname.split("/")[1]);
        }
    }, []);

    console.log(detailProductTranslation.quantity)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="relative aspect-square">
                        <img
                            src={product.image}
                            alt={product.alt || "Product Image"}
                            className="rounded-lg object-cover w-full h-full"
                            style={{ maxHeight: '500px' }}
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <nav className="text-sm mb-2">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <span className="text-gray-800">{product.brand}</span>
                            </li>
                        </ol>
                    </nav>
                    {/* <h1 className="text-2xl font-semibold mb-2">{product.brand}</h1> */}
                    <h2 className="text-4xl font-light text-primary mb-4">{currentLang == 'es' ? product.name_es : product.name_en}</h2>
                    <p className="text-2xl mb-4">US${product.price}</p>
                    <p className="text-sm text-gray-500 mb-6">
                        {currentLang == 'es' ? product.description_es : product.description_en}
                    </p>
                    <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">{detailProductTranslation.quantity}</h3>
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
                                className="flex bg-green-verbena hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full transition-all">
                                {detailProductTranslation.addCart}
                            </button>
                            <ToastContainer
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;