import React, { useState, useEffect } from 'react';
import { addToCart } from '../store/cart';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = ({ siteUrl, lang, detailProductTranslation, productId }) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            const url = `https://api.verbena-ec.com/api/products/${productId}?populate=*`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setProduct(result.data);

                // Precargar imagen antes de mostrar el contenido
                if (result.data.image?.[0]?.url) {
                    const img = new Image();
                    img.src = `https://api.verbena-ec.com${result.data.image[0].url}`;
                    img.onload = () => setLoading(false);
                    img.onerror = () => setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        if (productId) {
            fetchProductDetail();
        }
    }, [productId]);

    const handleAddToCart = () => {
        if (quantity > 0 && product) {
            addToCart(product, quantity);
            toast.success(detailProductTranslation.addedToCart, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: '#708a6f',
                    color: '#fff',
                    borderRadius: '8px',
                },
            });
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-green-verbena rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="relative aspect-square">
                        <img
                            src={product.image?.url ? `https://api.verbena-ec.com${product.image.url}` : "/default-image.jpg"}
                            alt={product.image?.alternativeText || "Imagen del producto"}
                            className="rounded-lg object-contain w-full h-full"
                            style={{ maxHeight: '500px' }}
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-light text-primary mb-4">
                        {lang === 'es' ? product.name_es : product.name_en}
                    </h2>
                    <p className="text-md text-gray-500 mb-6">{product.capacity}</p>
                    <p className="text-2xl mb-4">US${product.price}</p>
                    <p className="text-sm text-gray-500 mb-6">
                        {lang === 'es' ? product.description_es : product.description_en}
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
                                className="flex bg-green-verbena hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full transition-all"
                            >
                                {detailProductTranslation.addCart}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetail;
