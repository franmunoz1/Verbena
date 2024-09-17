import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos base de Swiper
import 'swiper/css/pagination'; // Estilos del paginador
import { Pagination } from 'swiper/modules'; // Importación correcta de Pagination

const ShopCarousel = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-12 text-center">Shop</h2>

                {/* Carrusel */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}  // Usar el módulo de paginación aquí
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                >
                    <SwiperSlide>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <img src="https://via.placeholder.com/300x400" alt="Facial Cleanser" className="w-full h-64 object-cover rounded-lg" />
                            <span className="absolute top-4 right-4 bg-white text-gray-900 text-sm px-3 py-1 rounded-full shadow">Sale!</span>
                            <h3 className="text-lg font-medium text-gray-900 mt-4">Facial Cleanser</h3>
                            <p className="text-sm text-gray-500 line-through">£25.00</p>
                            <p className="text-xl font-bold text-gray-900">£19.00</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <img src="https://via.placeholder.com/300x400" alt="Eye Cream" className="w-full h-64 object-cover rounded-lg" />
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-lg">★★★★☆</span>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mt-4">Eye Cream</h3>
                            <p className="text-xl font-bold text-gray-900">£54.00</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <img src="https://via.placeholder.com/300x400" alt="Super Glow" className="w-full h-64 object-cover rounded-lg" />
                            <span className="absolute top-4 right-4 bg-white text-gray-900 text-sm px-3 py-1 rounded-full shadow">Sale!</span>
                            <h3 className="text-lg font-medium text-gray-900 mt-4">Super Glow</h3>
                            <p className="text-sm text-gray-500 line-through">£23.00</p>
                            <p className="text-xl font-bold text-gray-900">£21.00</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <img src="https://via.placeholder.com/300x400" alt="Facial Balancing Gel" className="w-full h-64 object-cover rounded-lg" />
                            <h3 className="text-lg font-medium text-gray-900 mt-4">Facial Balancing Gel</h3>
                            <p className="text-xl font-bold text-gray-900">£32.00</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="flex justify-center mt-8">
                    <a href="/shop" className="inline-block bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
                        Shop All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ShopCarousel;
