import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CarouselCards({ currentLanguage, carouselTraductions, lang }) {

    const [currentLang, setCurrentLang] = useState(lang);
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentLang(window.location.pathname.split("/")[1]);
        }
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch("https://franmunoz.online/api/services?populate=*");
                if (!response.ok) {
                    throw new Error("Error al obtener los servicios");
                }
                const result = await response.json();
                console.log("Servicios obtenidos:", result);
                setServices(result.data);
            } catch (error) {
                console.error("Error al obtener servicios:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <div className="relative px-4 py-8 space-y-6 flex flex-col items-center">
            {services && services.length > 0 && services.map((service, index) => {
                const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";
                return (
                    <div
                        key={service.id}
                        className={`w-[220px] h-[260px] sm:w-[260px] sm:h-[280px] 
                        md:w-[320px] md:h-[340px] lg:w-[400px] lg:h-[420px] xl:w-[450px] xl:h-[480px]
                        rounded-lg overflow-hidden shadow-lg p-4 bg-white flex flex-col justify-between
                        ${animationDirection === "fade-right" ? "ml-auto lg:mr-[10%] xl:mr-[12%]" : "mr-auto lg:ml-[10%] xl:ml-[12%]"}`}
                        data-aos={animationDirection}
                    >

                        <img className="w-full h-[300px] object-cover"
                            src={service.image?.url ? `https://franmunoz.online${service.image.url}` : "/default-image.jpg"}
                            alt={service.image?.alternativeText || "Imagen del servicio"} />
                        <div className="text-center px-2 p-2 flex-grow flex items-center justify-center">
                            <div className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
                                {currentLang == 'es' ? service.name_es : service.name_en}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <a
                                href={`/${currentLanguage}/service-${service.documentId}`}
                                className="bg-green-verbena hover:bg-gray-400 text-white font-semibold py-2 px-5 rounded-full 
                                            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all"
                            >
                                {carouselTraductions.reserve}
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
