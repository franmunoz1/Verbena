'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const cards = [
    {
        title: "Dermal Filler (Hyaluronic Acid)",
        description: "Hyaluronic acid-based fillers add volume to areas such as the lips, cheeks, undereyes, and jawline with immediately visible results.",
        image: "/img/imghands.jpeg",
        alt: "Dermal Filler (Hyaluronic Acid)"
    },
    {
        title: "Botox Treatment",
        description: "Botox injections reduce the appearance of facial wrinkles by temporarily paralyzing underlying muscles.",
        image: "/placeholder.svg?height=200&width=400",
        alt: "Botox Treatment"
    },
    {
        title: "Chemical Peel",
        description: "Chemical peels improve the appearance of the skin by removing damaged outer layers, revealing fresher, younger-looking skin underneath.",
        image: "/placeholder.svg?height=200&width=400",
        alt: "Chemical Peel"
    },
    {
        title: "Microdermabrasion",
        description: "Microdermabrasion is a minimally invasive procedure that renews overall skin tone and texture, improving the appearance of sun damage, wrinkles, and acne scars.",
        image: "/placeholder.svg?height=200&width=400",
        alt: "Microdermabrasion"
    },
    {
        title: "Laser Hair Removal",
        description: "Laser hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair.",
        image: "/placeholder.svg?height=200&width=400",
        alt: "Laser Hair Removal"
    },
    {
        title: "Facial Rejuvenation",
        description: "Facial rejuvenation procedures aim to restore a more youthful appearance to the face through various techniques.",
        image: "/placeholder.svg?height=200&width=400",
        alt: "Facial Rejuvenation"
    }
]

export default function CarouselCards() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative px-4 py-8">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {cards.map((card, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] p-4">
                            <div className="rounded overflow-hidden shadow-lg p-6 bg-white h-full flex flex-col">
                                <img
                                    className="w-full h-[200px] object-cover mb-4"
                                    src={card.image}
                                    alt={card.alt}
                                />
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-xl mb-2">{card.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 mt-auto flex flex-col gap-2">
                                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                        Book Now
                                    </button>
                                    <a href="/service-4" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-block text-center">
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