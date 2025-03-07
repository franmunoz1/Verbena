import React, { useState, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { addToCart } from '../store/cart';
import '@fontsource/tenor-sans';
import '@fontsource-variable/raleway';

export default function CarouselCards({ currentLanguage, carouselTraductions, lang }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [products, setProducts] = useState([]);
    const [currentLang, setCurrentLang] = useState(lang);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api.verbena-ec.com/api/products?populate=*");
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const result = await response.json();
                console.log("Productos obtenidos:", result); // Verifica el formato
                setProducts(result.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))); // Accede a result.data para obtener los productos
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        fetchProducts();
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentLang(window.location.pathname.split("/")[1]);
        }
    }, []);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="relative px-4 py-8">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {products && products.length > 0 && products.map((product, index) => (
                        <div key={product.id} className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] shadow-md p-4 rounded-md hover:shadow-lg transition duration-300">
                            <div className="group relative flex flex-col h-full "> {/* Agregado rounded-lg y shadow-lg */}
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none lg:h-80">
                                    <img
                                        src={product.image?.url ? `https://api.verbena-ec.com${product.image.url}` : "/default-image.jpg"}
                                        alt={product.image?.alternativeText || "Imagen del producto"}
                                        className="w-full h-48 object-contain rounded-md"
                                    />
                                </div>
                                <div className="mt-4 flex-grow flex flex-col justify-between items-center">
                                    <div className="text-center">
                                        <h3 className="text-sm text-gray-700 font-bold">
                                            <a href={`/${currentLanguage}/product-${product.documentId}`}>
                                                {currentLang == 'es' ? product.name_es : product.name_en}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{currentLang == 'es' ? product.summary_es : product.summary_en}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway Variable' }}>US$ {product.price}</p>
                                </div>
                                <div className="mt-auto w-full">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-green-verbena hover:bg-gray-400 text-white font-semibold py-3 px-5 rounded-lg shadow-md transition-all"
                                    >
                                        {carouselTraductions.add}
                                    </button>

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
