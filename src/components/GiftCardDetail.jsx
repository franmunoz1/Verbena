import React, { useState } from 'react';
import { cart, addToCart } from '../store/cart';
import { useStore } from '@nanostores/react';
import { ToastContainer, toast } from 'react-toastify';

export default function GiftCardDetail({ lang, siteUrl, giftCardTraductions }) {
    const $cart = useStore(cart);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAmountChange = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
        setShowCustomInput(false);
    };

    const handleCustomAmountClick = () => {
        setSelectedAmount(0);
        setShowCustomInput(true);
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setCustomAmount(value);
            setSelectedAmount(value ? parseInt(value) : 0);
        }
    };

    const handleAddToCart = () => {
        if (!selectedAmount || selectedAmount <= 0) {
            alert('Por favor, selecciona un monto para la tarjeta de regalo.');
            return;
        }

        console.log("Añadiendo al carrito:", selectedAmount); // <-- Prueba si esto se imprime en la consola

        const giftcard = {
            id: 'giftcard',
            name_es: `Giftcard - $${selectedAmount}`,
            image: '/img/giftcard.PNG',
            price: selectedAmount,
            quantity: quantity,
        };

        addToCart(giftcard);

        toast.success(giftCardTraductions.added, {
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
    };




    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Imagen de la Gift Card */}
                <div className="md:w-1/2">
                    <img
                        src="/img/giftcard.PNG"
                        alt="Gift Card"
                        className="rounded-lg object-cover w-full h-full"
                        style={{ maxHeight: '500px' }}
                    />
                </div>

                {/* Información y opciones */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-light text-primary mb-4">Gift Card</h2>
                    <p className="text-sm text-gray-500 mb-6">{giftCardTraductions.titleGiftCard}</p>

                    {/* Selección de monto */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium mb-3">{giftCardTraductions.selectGiftCard}</h3>
                        <div className="flex flex-wrap gap-1">
                            {[25, 50, 100].map(amount => (
                                <button
                                    key={amount}
                                    onClick={() => handleAmountChange(amount)}
                                    className={`px-4 py-2 rounded-lg border transition-all ${selectedAmount === amount
                                        ? 'bg-green-verbena text-white shadow-md'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                >
                                    ${amount}
                                </button>
                            ))}
                            <button
                                onClick={handleCustomAmountClick}
                                className={`px-5 py-2 rounded-lg border transition-all ${showCustomInput ? 'bg-green-verbena text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                            >
                                {giftCardTraductions.otherGiftCard}
                            </button>
                        </div>

                        {/* Input de otro monto con animación */}
                        {showCustomInput && (
                            <div className="mt-3 flex items-center gap-2 animate-fade-in">
                                <span className="text-gray-600">$</span>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-24 text-center border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-verbena outline-none"
                                />
                            </div>
                        )}
                    </div>

                    {/* Selección de cantidad */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium mb-3">{giftCardTraductions.quantityGiftCard}</h3>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={e => setQuantity(parseInt(e.target.value) || 1)}
                            className="w-20 text-center border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-verbena outline-none"
                        />
                    </div>

                    {/* Botón para añadir al carrito */}
                    <div className="mb-6">
                        <button
                            onClick={handleAddToCart}
                            className="bg-green-verbena hover:bg-gray-400 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all"
                        >
                            {giftCardTraductions.addGiftCard}
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>

    );
}
