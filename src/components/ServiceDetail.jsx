import React, { useState } from 'react';

const handleWhatsApp = (name, date, treatment) => {
    const message = `Hola! Quiero reservar el tratamiento: ${treatment}.\nNombre: ${name}\nFecha seleccionada: ${date}`;
    const url = `https://wa.me/3512433148?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

const ServiceDetail = ({ treatment, description, benefits, price, imageUrl }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className="container mx-auto p-4">
            <img src={imageUrl} alt={treatment} className="w-full h-64 object-cover" />
            <h1 className="text-3xl font-bold mt-4">{treatment}</h1>
            <p className="mt-2 text-lg">{description}</p>
            <h2 className="text-2xl font-semibold mt-4">Beneficios:</h2>
            <ul className="list-disc ml-4">
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
            <p className="mt-4 text-xl font-semibold">Precio: {price}</p>

            <form className="mt-6">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Selecciona una fecha:</label>
                    <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="button"
                    onClick={() => handleWhatsApp(name, date, treatment)}
                    className="bg-green-500 text-white p-2 rounded w-full"
                >
                    Enviar por WhatsApp
                </button>
            </form>
        </div>
    );
};

export default ServiceDetail;
