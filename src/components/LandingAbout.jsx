import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingAbout = ({ landingAboutTraductions }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <div>
            {/* Sección Historia */}
            <section className="py-8 px-4 md:py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-1/2" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-verbena mb-6">
                            {landingAboutTraductions.title}
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-8 font-sans">
                            {landingAboutTraductions.description}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="/img/imgface.jpeg"
                            alt="Nuestra Historia"
                            className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* Sección Misión */}
            <section className="py-8 px-4 md:py-20 ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-1/2 order-2 md:order-1" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="/img/imgFace2.jpeg"
                            alt="Nuestra Misión"
                            className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-verbena mb-6">
                            {landingAboutTraductions.title1}
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-8 font-sans">
                            {landingAboutTraductions.description1}
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Visión */}
            <section className="py-8 px-4 md:py-20 ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-1/2" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-verbena mb-6">
                            {landingAboutTraductions.title2}
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-8 font-sans">
                            {landingAboutTraductions.description2}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="/img/imgFaceGreen.jpeg"
                            alt="Nuestra Visión"
                            className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingAbout;
