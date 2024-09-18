import React, { useState } from 'react';

const handleWhatsApp = (name, date, treatment) => {
    const message = `Hola! Quiero reservar el tratamiento: ${treatment}.\nNombre: ${name}\nFecha seleccionada: ${date}`;
    const url = `https://wa.me/3512433148?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

const ServiceDetail = ({ treatment, description, recomendation, price, image }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        // Verificar que el nombre no esté vacío
        if (!name) {
            setError('El nombre no puede estar vacío.');
            return false;
        }

        // Verificar que el nombre contenga solo letras
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        if (!nameRegex.test(name)) {
            setError('El nombre solo debe contener letras.');
            return false;
        }

        // Verificar que la fecha esté seleccionada
        if (!date) {
            setError('Se debe seleccionar una fecha.');
            return false;
        }

        // Verificar que la fecha no sea anterior a hoy
        const today = new Date().toISOString().split('T')[0];
        if (date < today) {
            setError('La fecha no puede ser anterior a hoy.');
            return false;
        }

        setError(''); // Limpiar el mensaje de error si todo está bien
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleWhatsApp(name, date, treatment);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <img src={image} alt={treatment} className="w-full h-64 object-cover" />
            <h1 className="text-3xl font-bold mt-4">{treatment}</h1>
            <p className="mt-2 text-lg">{description}</p>
            {recomendation && <span>Recomendaciones: {recomendation}</span>}
            <p className="mt-4 text-xl font-semibold">Precio: ${price}</p>

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

                {error && <p className="text-red-500">{error}</p>}

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-green-500 text-white p-2 rounded w-full"
                >
                    Enviar por WhatsApp
                </button>
            </form>
        </div>
    );
};

export default ServiceDetail;
