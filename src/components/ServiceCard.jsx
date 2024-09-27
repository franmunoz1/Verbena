import React, { useState } from "react";

export default function ServiceCard({ services, lang, siteUrl }) {
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
                                    href={`/${lang}/service-${service.id}`}
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

