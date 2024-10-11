import React, { useState } from 'react';

const handleWhatsApp = (name, date, treatment) => {
    const message = `Hola! Quiero reservar el tratamiento: ${treatment}.\nNombre: ${name}\nFecha seleccionada: ${date}`;
    const url = `https://wa.me/17869256878?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

const ServiceDetail = ({ service }) => {
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
            handleWhatsApp(name, date, service.name);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="relative h-64 sm:h-80 md:h-96">
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">{service.name}</h1>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                        {service.recomendation && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                                <div className="flex">

                                    <div className="ml-3">
                                        <p className="text-sm text-green-700">
                                            <span className="font-medium">Recomendaciones:</span> {service.recomendation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center">

                                <span className="text-2xl font-semibold text-gray-800">${service.price}</span>
                            </div>
                            <div className="text-sm text-gray-500">Por sesión</div>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Selecciona una fecha
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />

                                </div>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className='flex justify-center'>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-green-verbena text-white p-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                                >
                                    Reservar por whatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
