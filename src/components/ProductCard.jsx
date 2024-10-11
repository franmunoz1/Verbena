import React, { useState } from "react";
import { addToCart } from '../store/cart';

export default function ProductCard({ products, lang, siteUrl }) {
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado del filtro de categoría
    const [sortOrder, setSortOrder] = useState(''); // Estado del filtro de ordenación

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleFilterChange = (event) => {
        setSelectedCategory(event.target.value); // Actualiza el estado del filtro de categoría
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value); // Actualiza el estado del filtro de ordenación
    };

    // Filtrar productos basados en la categoría seleccionada
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    // Ordenar productos basados en el precio
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOrder === 'low-to-high') {
            return a.price - b.price;
        } else if (sortOrder === 'high-to-low') {
            return b.price - a.price;
        }
        return 0; // No ordenado si no hay filtro de orden
    });

    return (
        <div className="mx-[20px] lg:mx-[50px] flex flex-col lg:flex-row">
            {/* Aside para los filtros */}
            <aside className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-6">
                <div className="bg-gray-100 p-6 rounded-md shadow-md">
                    <h2 className="text-lg font-bold mb-4">Filtros</h2>

                    {/* Select para categoría */}
                    <div className="mb-6">
                        <label htmlFor="categoryFilter" className="block mb-2 text-md font-semibold">Categoría</label>
                        <select
                            id="categoryFilter"
                            value={selectedCategory}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-verbena"
                        >
                            <option value="">Todos</option>
                            <option value="Limpiadores">Limpiadores</option>
                            <option value="Serum">Serum</option>
                            <option value="Hidratantes">Hidratantes</option>
                            <option value="FPS">FPS</option>
                        </select>
                    </div>

                    {/* Select para ordenación por precio */}
                    <div className="mb-6">
                        <label htmlFor="priceSort" className="block mb-2 text-md font-semibold">Ordenar por precio</label>
                        <select
                            id="priceSort"
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-verbena"
                        >
                            <option value="">Sin ordenar</option>
                            <option value="low-to-high">Menor a mayor</option>
                            <option value="high-to-low">Mayor a menor</option>
                        </select>
                    </div>
                </div>
            </aside>

            {/* Grid de productos */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-4">
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                        <div key={product.id} className="group relative flex flex-col h-full shadow-md p-4 rounded-md hover:shadow-lg transition duration-300">
                            <a href={`/${lang}/product-${product.id}`} className="block group flex-grow flex-col justify-between">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.image}
                                        alt={product.alt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full max-h-[300px] rounded-md"
                                    />
                                </div>
                                <div className="mt-4 flex-grow flex flex-col justify-between">
                                    <div className="text-center">
                                        <h3 className="text-sm text-gray-700 font-bold">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.summary}</p>
                                    </div>
                                </div>
                            </a>
                            <div className="text-center mt-2">
                                <p className="text-sm font-medium text-gray-900">US$ {product.price}</p>
                            </div>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="w-full bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles para la categoría seleccionada.</p>
                )}
            </div>
        </div>
    );
}
