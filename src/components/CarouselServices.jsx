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
                const response = await fetch("https://api.verbena-ec.com/api/services?populate=*");
                if (!response.ok) {
                    throw new Error("Error al obtener los servicios");
                }
                const result = await response.json();
                console.log("Servicios obtenidos:", result);
                setServices(result.data);
            } catch (error) {
                console.error("Error al obtener servicios:", error);
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
            {services.length > 0 && services.map((service, index) => {
                const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";
                return (
                    <div
                        key={service.id}
                        className={`w-[240px] min-h-[320px] sm:w-[260px] sm:min-h-[340px] 
                        md:w-[320px] md:min-h-[360px] lg:w-[400px] lg:min-h-[420px] xl:w-[450px] xl:min-h-[480px]
                        rounded-lg shadow-lg p-4 bg-white flex flex-col justify-between
                        ${animationDirection === "fade-right" ? "ml-auto lg:mr-[10%] xl:mr-[12%]" : "mr-auto lg:ml-[10%] xl:ml-[12%]"}`}
                        data-aos={animationDirection}
                    >
                        <img className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] object-cover rounded-lg"
                            src={service.image?.url ? `https://api.verbena-ec.com${service.image.url}` : "/default-image.jpg"}
                            alt={service.image?.alternativeText || "Imagen del servicio"} />

                        <div className="text-center px-2 py-2 flex-grow flex items-center justify-center">
                            <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-h-20 text-wrap">
                                {currentLang == 'es' ? service.name_es : service.name_en}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <a
                                href={`/${currentLanguage}/service-${service.documentId}`}
                                className="bg-green-verbena hover:bg-gray-400 text-white font-semibold py-2 px-5 rounded-full 
                                            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all w-full sm:w-auto text-center"
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
