'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
    { id: '6', name: 'Limpieza facial prunda', price: 90, summary: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!', description: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!. En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable. 💧🌟', recomendation: '', image: '/img/higieneFacial.jpeg', alt: 'Limpieza facial' },
    { id: '7', name: 'Limpieza facial + Dermaplaning', price: 100, summary: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍', description: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍. Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año. ✨', recomendation: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling' },
    { id: '8', name: 'Limpieza facial + Dermapen', price: 120, summary: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍', description: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍. El dermapen utiliza microagujas para estimular la regeneración de la piel, logrando la reducción de arrugas, líneas finas y cicatrices. Además, al añadir una ampolla específica durante el tto, potenciamos los resultados y maximizamos los beneficios de cada sustancia aplicada. ✨. Incluye masajes con Cryo Sticks, esferas de metal que proporcionan una sensación refrescante y relajante con frío localizado, ayudando a reducir la inflamación post-tratamiento. Además, un masaje relajante en hombros, cervicales y cabeza para un toque de bienestar adicional. 💆‍♀️', recomendation: '⚠️ Este tto no es apto para embarazadas, anticoagulados, diabéticos, ni personas que cursen un proceso inflamatorio de la piel.', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen' },
    { id: '9', name: 'Limpieza facial prunda', price: 90, summary: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!', description: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!. En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable. 💧🌟', recomendation: '', image: '/img/higieneFacial.jpeg', alt: 'Limpieza facial' },
    { id: '10', name: 'Limpieza facial + Dermaplaning', price: 100, summary: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍', description: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍. Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año. ✨', recomendation: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling' },
    { id: '11', name: 'Limpieza facial + Dermapen', price: 120, summary: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍', description: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍. El dermapen utiliza microagujas para estimular la regeneración de la piel, logrando la reducción de arrugas, líneas finas y cicatrices. Además, al añadir una ampolla específica durante el tto, potenciamos los resultados y maximizamos los beneficios de cada sustancia aplicada. ✨. Incluye masajes con Cryo Sticks, esferas de metal que proporcionan una sensación refrescante y relajante con frío localizado, ayudando a reducir la inflamación post-tratamiento. Además, un masaje relajante en hombros, cervicales y cabeza para un toque de bienestar adicional. 💆‍♀️', recomendation: '⚠️ Este tto no es apto para embarazadas, anticoagulados, diabéticos, ni personas que cursen un proceso inflamatorio de la piel.', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen' },
]

export default function CarouselCards() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative px-4 py-8">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {services.map((card, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4">
                            <div className="rounded overflow-hidden shadow-lg p-6 bg-white h-full flex flex-col">
                                <img
                                    className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[200px] object-cover mb-4"
                                    src={card.image}
                                    alt={card.alt}
                                />
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-xl mb-2">{card.name}</div>
                                    <p className="text-gray-700 text-base">
                                        {card.summary}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 flex flex-col gap-6 mt-auto">
                                    <button className="bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                        Book Now
                                    </button>
                                    <a
                                        href={`/service-${card.id}`}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full text-center"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                onClick={scrollPrev}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                onClick={scrollNext}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}
