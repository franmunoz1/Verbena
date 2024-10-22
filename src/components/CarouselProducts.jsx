import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { addToCart } from '../store/cart';
import '@fontsource/tenor-sans';
import '@fontsource-variable/raleway';

export default function CarouselCards({ products, currentLanguage, carouselTraductions }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

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
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                                    <img
                                        src={product.image}
                                        alt={product.alt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full max-h-[300px]"
                                    />
                                </div>
                                <div className="mt-4 flex-grow flex flex-col justify-between items-center">
                                    <div className="text-center">
                                        <h3 className="text-sm text-gray-700 font-bold">
                                            <a href={`/${currentLanguage}/product-${product.id}`}>
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.summary}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway Variable' }}>US$ {product.price}</p>
                                </div>
                                <div className="mt-auto w-full">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-green-verbena hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out"
                                    >
                                        {carouselTraductions.addToCart || 'Add to cart'}
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
