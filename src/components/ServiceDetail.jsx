import React, { useState, useEffect } from 'react';

const ServiceDetail = ({ serviceTraductions, lang, serviceId }) => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchServiceDetail = async () => {
            const url = `https://franmunoz.online/api/services/${serviceId}?populate=*`;
            console.log("Fetching URL:", url);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setService(result.data);

                // Precargar la imagen
                if (result.data?.image?.url) {
                    const img = new Image();
                    img.src = `https://franmunoz.online${result.data.image.url}`;
                    img.onload = () => setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        if (serviceId) {
            fetchServiceDetail();
        }
    }, [serviceId]);


    const handleWhatsApp = () => {
        if (!service) return;
        const greeting = lang === 'es' ? "Hola! Quiero reservar el tratamiento:" : "Hello! I want to book the treatment:";
        const nameLabel = lang === 'es' ? "Nombre" : "Name";
        const dateLabel = lang === 'es' ? "Fecha seleccionada" : "Selected date";

        const message = `${greeting} ${lang === 'es' ? service.name_es : service.name_en}.
        ${nameLabel}: ${name}
        ${dateLabel}: ${date}`;

        const url = `https://wa.me/17869256878?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const validateForm = () => {
        if (!name) {
            setError('El nombre no puede estar vacío.');
            return false;
        }
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(name)) {
            setError('El nombre solo debe contener letras.');
            return false;
        }
        if (!date) {
            setError('Se debe seleccionar una fecha.');
            return false;
        }
        if (date < new Date().toISOString().split('T')[0]) {
            setError('La fecha no puede ser anterior a hoy.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleWhatsApp();
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-green-verbena rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!service) return <p>No se encontró el servicio.</p>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="relative h-64 sm:h-80 md:h-96">
                        <img className="w-full h-full object-cover"
                            src={service.image?.url ? `https://franmunoz.online${service.image.url}` : "/default-image.jpg"}
                            alt={service.image?.alternativeText || "Imagen del servicio"} />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
                                {lang === 'es' ? service.name_es : service.name_en}
                            </h1>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {lang === 'es' ? service.description_es : service.description_en}
                        </p>
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
                                    className="bg-green-verbena text-white p-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center gap-2"
                                >
                                    {serviceTraductions.send}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="14"
                                        width="12.25"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="#ffffff"
                                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"
                                        ></path>
                                    </svg>
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
