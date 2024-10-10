import React, { useState } from "react";
import { addToCart } from '../store/cart';

export default function ProductCard({ products, lang, siteUrl }) {
    const [selectedCategory, setSelectedCategory] = useState(''); // example filter state

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleFilterChange = (category) => {
        setSelectedCategory(category); // update filter state
    };

    // Filter products based on selected category (this is just a placeholder logic)
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className="mx-[50px] flex flex-col lg:flex-row">
            {/* Aside for filters */}
            <aside className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-6">
                <div className="bg-gray-100 p-4 rounded-md">
                    <h2 className="text-lg font-bold mb-4">Filters</h2>
                    <div className="flex flex-col">
                        <button
                            className={`py-2 px-4 rounded-md text-left ${selectedCategory === '' ? 'bg-green-verbena text-white' : 'bg-gray-200'}`}
                            onClick={() => handleFilterChange('')}
                        >
                            All
                        </button>
                        <button
                            className={`py-2 px-4 mt-2 rounded-md text-left ${selectedCategory === 'category1' ? 'bg-green-verbena text-white' : 'bg-gray-200'}`}
                            onClick={() => handleFilterChange('category1')}
                        >
                            Category 1
                        </button>
                        <button
                            className={`py-2 px-4 mt-2 rounded-md text-left ${selectedCategory === 'category2' ? 'bg-green-verbena text-white' : 'bg-gray-200'}`}
                            onClick={() => handleFilterChange('category2')}
                        >
                            Category 2
                        </button>
                    </div>
                </div>
            </aside>

            {/* Products grid */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="group relative flex flex-col h-full">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full max-h-[300px]"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between flex-grow">
                                <div className="text-center">
                                    <h3 className="text-sm text-gray-700 font-bold">
                                        <h3 className="text-sm text-gray-700 font-bold">
                                            <a href={`/${lang}/product-${product.id}`}>
                                                {product.name}
                                            </a>
                                        </h3>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.summary}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900 text-center">US$ {product.price}</p>
                            </div>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="mt-2 w-full bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
                            >
                                Add to cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No products available for the selected category.</p>
                )}
            </div>
        </div>
    );
}
