import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el documentId de la URL
import { addToCart } from '../store/cart';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = ({ siteUrl, lang, detailProductTranslation }) => {
    const { documentId } = useParams(); // Obtiene el documentId de la URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(documentId)

    useEffect(() => {
        const fetchProductDetail = async () => {
            const url = `https://franmunoz.online/api/products/${documentId}?populate=*`;
            console.log("Fetching URL:", url); // 👀 Verifica la URL

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setProduct(result.data);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (documentId) {
            fetchProductDetail();
        }
    }, [documentId]);


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

    if (loading) return <p>{detailProductTranslation.loading}</p>;
    if (error) return <p>{detailProductTranslation.error}</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="relative aspect-square">
                        <img
                            src={product.image}
                            alt={product.alt || 'Product Image'}
                            className="rounded-lg object-contain w-full h-full"
                            style={{ maxHeight: '500px' }}
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-light text-primary mb-4">
                        {lang === 'es' ? product.name_es : product.name_en}
                    </h2>
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
