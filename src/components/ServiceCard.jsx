import React, { useState } from "react";

const services = [
    { id: '6', name: 'Limpieza facial prunda', price: 90, summary: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!', description: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!. En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable. 💧🌟', recomendation: '', image: '/img/higieneFacial.jpeg', alt: 'Limpieza facial' },
    { id: '7', name: 'Limpieza facial + Dermaplaning', price: 100, summary: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍', description: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍. Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año. ✨', recomendation: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling' },
    { id: '8', name: 'Limpieza facial + Dermapen', price: 120, summary: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍', description: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍. El dermapen utiliza microagujas para estimular la regeneración de la piel, logrando la reducción de arrugas, líneas finas y cicatrices. Además, al añadir una ampolla específica durante el tto, potenciamos los resultados y maximizamos los beneficios de cada sustancia aplicada. ✨. Incluye masajes con Cryo Sticks, esferas de metal que proporcionan una sensación refrescante y relajante con frío localizado, ayudando a reducir la inflamación post-tratamiento. Además, un masaje relajante en hombros, cervicales y cabeza para un toque de bienestar adicional. 💆‍♀️', recomendation: '⚠️ Este tto no es apto para embarazadas, anticoagulados, diabéticos, ni personas que cursen un proceso inflamatorio de la piel.', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen' },
    { id: '9', name: 'Limpieza facial prunda', price: 90, summary: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!', description: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!. En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable. 💧🌟', recomendation: '', image: '/img/higieneFacial.jpeg', alt: 'Limpieza facial' },
    { id: '10', name: 'Limpieza facial + Dermaplaning', price: 100, summary: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍', description: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍. Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año. ✨', recomendation: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling' },
    { id: '11', name: 'Limpieza facial + Dermapen', price: 120, summary: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍', description: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍. El dermapen utiliza microagujas para estimular la regeneración de la piel, logrando la reducción de arrugas, líneas finas y cicatrices. Además, al añadir una ampolla específica durante el tto, potenciamos los resultados y maximizamos los beneficios de cada sustancia aplicada. ✨. Incluye masajes con Cryo Sticks, esferas de metal que proporcionan una sensación refrescante y relajante con frío localizado, ayudando a reducir la inflamación post-tratamiento. Además, un masaje relajante en hombros, cervicales y cabeza para un toque de bienestar adicional. 💆‍♀️', recomendation: '⚠️ Este tto no es apto para embarazadas, anticoagulados, diabéticos, ni personas que cursen un proceso inflamatorio de la piel.', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen' },
];

export default function ServiceCard() {
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("default");

    const handleFilterChange = (e) => setFilter(e.target.value);
    const handleSortChange = (e) => setSort(e.target.value);

    const filteredServices = services
        .filter((service) => filter === "All" || service.category === filter)
        .sort((a, b) => {
            if (sort === "priceAsc") return a.price - b.price;
            if (sort === "priceDesc") return b.price - a.price;
            return 0; // Default sorting
        });

    return (
        <div>
            {/* Barra de filtros */}
            <div className="mb-6 flex gap-4 items-center justify-center pt-4">
                <div>
                    <label htmlFor="category" className="mr-2 font-bold">Filtrar por categoría:</label>
                    <select
                        id="category"
                        className="border py-2 px-4 rounded"
                        onChange={handleFilterChange}
                        value={filter}
                    >
                        <option value="All">Todos</option>
                        <option value="Filler">Filler</option>
                        <option value="Botox">Botox</option>
                        <option value="Peel">Peel</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="sort" className="mr-2 font-bold">Ordenar por precio:</label>
                    <select
                        id="sort"
                        className="border py-2 px-4 rounded"
                        onChange={handleSortChange}
                        value={sort}
                    >
                        <option value="default">Por defecto</option>
                        <option value="priceAsc">Menor a mayor</option>
                        <option value="priceDesc">Mayor a menor</option>
                    </select>
                </div>
            </div>

            {/* Mostrar servicios filtrados */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="max-w-lg rounded overflow-hidden shadow-lg p-6 bg-white flex flex-col"
                        >
                            <img
                                className="w-full h-[300px] object-cover"
                                src={service.image}
                                alt={service.name}
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{service.name}</div>
                                <p className="text-gray-700 text-base">{service.summary}</p>
                                <span className="text-gray-700 font-bold">Price: ${service.price}</span>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex flex-col gap-6 mt-auto">
                                <button className="bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                    Book Now
                                </button>
                                <a
                                    href={`/service-${service.id}`}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full text-center"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay servicios disponibles para la categoría seleccionada.</p>
                )}
            </section>
        </div>
    );
}
