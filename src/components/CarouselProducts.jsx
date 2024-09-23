import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { addToCart } from '../store/cart';

export default function CarouselCards({ products }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    console.log("products", products)

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
                    {products && products.length > 0 && products.map((card, index) => (
                        <div key={card.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4">
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
                                    <button
                                        onClick={() => handleAddToCart(products)}
                                        className="bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                        Agregar al carrito
                                    </button>
                                    <a
                                        href={`/product-${card.id}`}
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
