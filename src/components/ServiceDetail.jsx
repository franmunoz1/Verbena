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

                        {/* {service.benefit && Array.isArray(service.benefit) && service.benefit.length > 0 && (
                            <div className="my-6">
                                <h2 className="text-2xl font-semibold mb-4">
                                    {lang === "es" ? "Beneficios" : "Benefits"}
                                </h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    {service.benefit.map((benefit, index) => (
                                        <li key={index} className="text-gray-600">{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )} */}

                        {/* {service.care_es && service.care_es !== '' && (
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
                        )} */}

                        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                            <p className="text-sm text-yellow-700 font-medium">
                                {lang === 'es'
                                    ? "Para confirmar la reserva, debe abonarse una seña de $30 previamente."
                                    : "To confirm the booking, a $30 deposit must be paid in advance."}
                            </p>
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
                                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                        ></path></svg
                                    >
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
