import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingAbout = () => {
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
                            Nuestra historia
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-8 font-sans">
                            En Verbena, nuestra historia comenzó en el 2020, bajo la visión de nuestra CEO, Arianna Romero, quien, tras graduarse , decidió crear un espacio donde la belleza y el bienestar se entrelazan. Con un compromiso inquebrantable hacia la excelencia, nos hemos aliado con los profesionales más destacados en el ámbito de la estética facial, garantizando que cada tratamiento no solo potencie la salud de tu piel, sino que también eleve tu estado emocional. Nuestra misión es ofrecer un enfoque holístico que refleje la filosofía de que la verdadera belleza comienza desde adentro. Te invitamos a ser parte de nuestra comunidad, donde cada visita es una oportunidad para iluminarte y renovarte.
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
                            Nuestra misión
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-8 font-sans">
                            "La piel refleja lo que sientes. En Verbena, te ayudamos a iluminarte desde el corazón, proporcionando tratamientos que no solo mejoran tu piel, sino que también elevan tu estado de ánimo."
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Visión */}
            <section className="py-8 px-4 md:py-20 ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-1/2" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-verbena mb-6">
                            Nuestra visión
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-8 font-sans">
                            Crear un espacio donde la salud de la piel y el autocuidado se fusionen, empoderando a las personas para que se sientan confiadas y radiantes desde adentro hacia afuera.
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