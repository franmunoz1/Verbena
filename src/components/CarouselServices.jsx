import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CarouselCards({ services, currentLanguage, carouselTraductions, lang }) {

    const [currentLang, setCurrentLang] = useState(lang);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentLang(window.location.pathname.split("/")[1]);
        }
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
            {services && services.length > 0 && services.map((card, index) => {
                const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";
                return (
                    <div
                        key={card.id}
                        className={`w-[200px] h-[240px] sm:w-[260px] sm:h-[280px] 
                        md:w-[320px] md:h-[340px] lg:w-[400px] lg:h-[420px] xl:w-[450px] xl:h-[480px]
                        rounded-lg overflow-hidden shadow-lg p-4 bg-white flex flex-col justify-between
                        ${animationDirection === "fade-right" ? "ml-auto lg:mr-[10%] xl:mr-[12%]" : "mr-auto lg:ml-[10%] xl:ml-[12%]"}`}
                        data-aos={animationDirection}
                    >

                        <img
                            className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px] xl:h-[260px] object-cover rounded-md"
                            src={card.image}
                            alt={card.alt}
                        />
                        <div className="text-center px-2 p-2 flex-grow flex items-center justify-center">
                            <div className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
                                {currentLang == 'es' ? card.name_es : card.name_en}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <a
                                href={`/${currentLanguage}/service-${card.id}`}
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
