import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Autoplay functionality
    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000); // Move to the next image every 3 seconds

        return () => clearInterval(autoplay); // Cleanup interval on unmount
    }, [emblaApi]);

    const images = [
        { src: '/img/imgface.jpeg', alt: 'Image 1' },
        { src: '/img/laminadoCejas.jpeg', alt: 'Image 2' },
        { src: '/img/imghands.jpeg', alt: 'Image 3' },
    ];

    return (
        <div className="relative px-2 py-8">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4 bor">
                            <div className="rounded overflow-hidden shadow-lg p-6 bg-white h-full">
                                <img
                                    className="w-full h-[250px] object-cover mb-4"
                                    src={image.src}
                                    alt={image.alt || `Image ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
