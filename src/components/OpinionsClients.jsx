import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OpinionsClients = ({ opinionsTraductions }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            className="w-full py-6 md:py-24 lg:py-32 min-h-screen flex justify-center container bg-[#f5f1ec] mx-auto"
            data-aos="fade-up"
        >
            <div className="container px-4 md:px-6">
                <h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-left mb-8 text-green-verbena border-b-4 border-green-verbena pb-2"
                    data-aos="fade-right"
                >
                    {opinionsTraductions.title}
                </h2>
                <div
                    className="flex flex-col lg:grid lg:grid-cols-1 gap-6"
                    data-aos="fade-up"
                >
                    {[
                        {
                            name: 'Lara Garay',
                            text: opinionsTraductions.first,
                        },
                        {
                            name: 'Mary ann Watson',
                            text: opinionsTraductions.second,
                        },
                        {
                            name: 'María Otero',
                            text: opinionsTraductions.third,
                        },
                        {
                            name: 'Rachel Martinez',
                            text: opinionsTraductions.fourth,
                        },
                        {
                            name: 'Lautaro García',
                            text: opinionsTraductions.fifth,
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-6 shadow-lg w-full bg-white transition-transform duration-300 hover:scale-105"
                            data-aos="zoom-in"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 fill-current text-yellow-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"></polygon>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                            <p className="font-semibold text-green-verbena">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpinionsClients;
