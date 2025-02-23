import React, { useState, useEffect } from "react";
import { addToCart } from '../store/cart';
import { ToastContainer, toast } from 'react-toastify';

export default function ProductCard({ lang, listProdTraductions }) {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://franmunoz.online/api/products?populate=*");
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const result = await response.json();
                console.log("Productos obtenidos:", result); // Verifica el formato
                setProducts(result.data); // Accede a result.data para obtener los productos
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        fetchProducts();
    }, []);



    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(listProdTraductions.added, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: "#708a6f",
                color: "#fff",
                borderRadius: "8px",
            },
        });
    };

    const handleFilterChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'low-to-high') return a.price - b.price;
        if (sortOrder === 'high-to-low') return b.price - a.price;
        return 0;
    });

    if (loading) return <p>{listProdTraductions.loading}</p>;
    if (error) return <p>{listProdTraductions.error}</p>;

    return (
        <div className="mx-[20px] lg:mx-[50px] flex flex-col lg:flex-row">
            <aside className="w-full lg:w-1/4 mb-6 lg:mr-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">{listProdTraductions.filter}</h2>
                    <select value={selectedCategory} onChange={handleFilterChange} className="w-full p-3 border rounded-md">
                        <option value="">{listProdTraductions.all}</option>
                        <option value="Limpiadores">{listProdTraductions.categorylimp}</option>
                        <option value="Serum">{listProdTraductions.categoryserum}</option>
                        <option value="Cremas">{listProdTraductions.categorycream}</option>
                        <option value="Tónico">{listProdTraductions.categorytonic}</option>
                        <option value="Protector solar">{listProdTraductions.categorysunscreen}</option>
                    </select>
                    <select value={sortOrder} onChange={handleSortChange} className="w-full p-3 border rounded-md mt-4">
                        <option value="">{listProdTraductions.noorder}</option>
                        <option value="low-to-high">{listProdTraductions.lth}</option>
                        <option value="high-to-low">{listProdTraductions.htl}</option>
                    </select>
                </div>
            </aside>

            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                        <div key={product.id} className="group relative flex flex-col h-full shadow-md p-4 rounded-md hover:shadow-lg transition">
                            <a href={`/${lang}/product-${product.documentId}`} className="block">
                                <img
                                    src={product.image?.[0]?.url ? `https://franmunoz.online${product.image[0].url}` : "/default-image.jpg"}
                                    alt={product.image?.[0]?.alternativeText || "Imagen del producto"}
                                    className="w-full h-48 object-contain rounded-md"
                                />

                                <h3 className="text-sm font-bold mt-4">{lang === 'es' ? product.name_es : product.name_en}</h3>
                                <p className="text-xs text-gray-500">{lang === 'es' ? product.summary_es : product.summary_en}</p>
                            </a>
                            <button onClick={() => handleAddToCart(product)} className="w-full bg-green-500 text-white py-2 rounded-lg mt-2">
                                {listProdTraductions.add}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>{listProdTraductions.noprod}</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}
