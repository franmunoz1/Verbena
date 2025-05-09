import React, { useState, useEffect } from "react";

export default function ServiceCard({ lang, siteUrl, servicesTraductions }) {
    const [services, setServices] = useState([]);
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFilterChange = (e) => setFilter(e.target.value);
    const handleSortChange = (e) => setSort(e.target.value);

    const [currentLang, setCurrentLang] = useState(lang);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentLang(window.location.pathname.split("/")[1]);
        }
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch("https://api.verbena-ec.com/api/services?populate=*");
                if (!response.ok) throw new Error("Error al obtener los servicios");

                const result = await response.json();
                setServices(result.data);

                // Pre-cargar imágenes
                const imagePromises = result.data.map((service) =>
                    new Promise((resolve) => {
                        if (service.image?.url) {
                            const img = new Image();
                            img.src = `https://api.verbena-ec.com${service.image.url}`;
                            img.onload = resolve; // Resolver promesa cuando la imagen carga
                            img.onerror = resolve; // Evitar bloqueos si falla la carga
                        } else {
                            resolve();
                        }
                    })
                );

                await Promise.all(imagePromises); // Esperar que todas las imágenes carguen
            } catch (error) {
                console.error("Error al obtener servicios:", error);
                setError(error.message);
            } finally {
                setTimeout(() => setLoading(false), 500); // Reducir delay
            }
        };

        fetchServices();
    }, []);



    const filteredServices = [...services]
        .filter((service) => filter === "All" || service.category === filter)
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));


    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-green-verbena rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div>
            {/* Barra de filtros */}
            {/* <div className="mb-6 flex gap-4 items-center justify-center pt-4">
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
            </div> */}

            {/* Mostrar servicios filtrados */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="max-w-lg rounded overflow-hidden shadow-lg p-6 bg-white flex flex-col"
                        >
                            <img className="w-full h-[300px] object-cover"
                                src={service.image?.url ? `https://api.verbena-ec.com${service.image.url}` : "/default-image.jpg"}
                                alt={service.image?.alternativeText || "Imagen del servicio"} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{currentLang == 'es' ? service.name_es : service.name_en}</div>
                                <p className="text-gray-700 text-base">{currentLang == 'es' ? service.summary_es : service.summary_en}</p>
                                <span className="text-gray-700 font-bold">{servicesTraductions.price}: ${service.price}</span>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex flex-col gap-6 mt-auto">
                                {/* <button className="bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                    Book Now
                                </button> */}
                                <a
                                    href={`/${lang}/service-${service.documentId}`}
                                    className="bg-green-verbena hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full mr-2 text-center transition-all"
                                >
                                    {servicesTraductions.reserve}
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

