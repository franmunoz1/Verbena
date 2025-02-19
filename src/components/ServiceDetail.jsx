import React, { useState, useEffect } from 'react';

const ServiceDetail = ({ service, serviceTraductions, lang }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [currentLang, setCurrentLang] = useState(lang);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentLang(window.location.pathname.split("/")[1]);
        }
    }, []);

    const handleWhatsApp = (name, date, treatment) => {
        // Detectar idioma directamente de la URL actual
        const currentLang = window.location.pathname.split("/")[1];

        // Definir mensajes en función del idioma actual
        let greeting, bookingText, nameLabel, dateLabel;

        if (currentLang === "es") {
            greeting = "Hola! Quiero reservar el tratamiento:";
            nameLabel = "Nombre";
            dateLabel = "Fecha seleccionada";
        } else {
            greeting = "Hello! I want to book the treatment:";
            nameLabel = "Name";
            dateLabel = "Selected date";
        }

        // Construcción del mensaje
        const message = `${greeting} ${treatment}.
                ${nameLabel}: ${name}
                ${dateLabel}: ${date}`;

        // Codificar mensaje para URL de WhatsApp
        const url = `https://wa.me/17869256878?text=${encodeURIComponent(message)}`;

        // Abrir enlace de WhatsApp
        window.open(url, '_blank');
    };


    const validateForm = () => {
        if (!name) {
            setError('El nombre no puede estar vacío.');
            return false;
        }
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        if (!nameRegex.test(name)) {
            setError('El nombre solo debe contener letras.');
            return false;
        }
        if (!date) {
            setError('Se debe seleccionar una fecha.');
            return false;
        }
        const today = new Date().toISOString().split('T')[0];
        if (date < today) {
            setError('La fecha no puede ser anterior a hoy.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleWhatsApp(name, date, currentLang === 'es' ? service.name_es : service.name_en);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="relative h-64 sm:h-80 md:h-96">
                        <img src={service.image} alt={service.alt} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
                                {currentLang === 'es' ? service.name_es : service.name_en}
                            </h1>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {currentLang === 'es' ? service.description_es : service.description_en}
                        </p>

                        {service.care_es && service.care_es !== '' && (
                            <div className="bg-green-50 border-l-4 border-red-500 p-4 mb-6">
                                <p className="text-sm text-red-700 font-medium">
                                    {serviceTraductions.cares}:
                                </p>
                                <p className="text-sm text-red-700 ml-4">
                                    {currentLang === 'es' ? service.care_es : service.care_en}
                                </p>
                            </div>
                        )}

                        {service.benefits_es && service.benefits_es !== '' && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                                <p className="text-sm text-green-700 font-medium">
                                    {serviceTraductions.benefits}:
                                </p>
                                <p className="text-sm text-green-700 ml-4">
                                    {currentLang === 'es' ? service.benefits_es : service.benefits_en}
                                </p>
                            </div>
                        )}

                        <div className="flex items-center justify-between mb-8">
                            <span className="text-2xl font-semibold text-gray-800">${service.price}</span>
                            <div className="text-sm text-gray-500">{serviceTraductions.per}</div>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    {serviceTraductions.name}
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
                                    {serviceTraductions.date}
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                                >
                                    {serviceTraductions.send}
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
