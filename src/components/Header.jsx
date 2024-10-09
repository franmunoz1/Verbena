import { useState, useEffect } from "react";
import CartButton from "./CartButton";
import { LanguagePicker } from "./LanguagePicker";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import '@fontsource/cormorant-garamond';

export default function Header({ siteUrl, lang }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 600 }); // Inicializamos AOS con una duración de animación
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="sticky top-0 z-40 w-full bg-white shadow-md">
            <div className="container flex mx-auto h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <a href={`/${lang}`} className="flex items-center gap-2">
                    <span className="text-green-verbena font-extrabold text-4xl" style={{ fontFamily: 'Cormorant Garamond', font: 'serif' }}>Verbena</span>
                </a>

                {/* Barra de navegación centrada en pantallas md o mayores */}
                <div className="hidden md:flex md:flex-1 justify-center items-center gap-6 text-sm font-medium">
                    <a href={`/${lang}`} className="text-muted-foreground hover:text-foreground">
                        Home
                    </a>
                    <a href={`/${lang}/products`} className="text-muted-foreground hover:text-foreground">
                        Products
                    </a>
                    <a href={`/${lang}/services`} className="text-muted-foreground hover:text-foreground">
                        Services
                    </a>
                    <a href={`/${lang}/about`} className="text-muted-foreground hover:text-foreground">
                        About
                    </a>
                    {/* LanguagePicker visible en computadoras */}
                    <LanguagePicker siteUrl={siteUrl} />
                </div>

                {/* Botón de carrito y hamburguesa */}
                <div className="flex items-center gap-4">
                    <button className="rounded-full">
                        <CartButton lang={lang} className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </button>

                    {/* Menú hamburguesa solo para pantallas pequeñas */}
                    <button
                        className="rounded-full p-2 border md:hidden"
                        onClick={toggleMenu}
                    >
                        <MenuIcon className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </button>

                    {/* Menú hamburguesa animado */}
                    {menuOpen && (
                        <div
                            className="fixed inset-0 z-50 bg-white p-6 shadow-md w-[250px] h-full right-0"
                            data-aos="fade-left"
                        >
                            {/* Cruz para cerrar el menú */}
                            <button
                                className="absolute top-4 right-4 text-2xl font-bold"
                                onClick={toggleMenu}
                            >
                                &times;
                            </button>

                            {/* LanguagePicker visible en móviles */}
                            <LanguagePicker siteUrl={siteUrl} />

                            <nav className="flex flex-col gap-6 mt-8 text-lg">
                                <a href={`/${lang}`} className="text-muted-foreground hover:text-foreground">
                                    Home
                                </a>
                                <a href={`/${lang}/products`} className="text-muted-foreground hover:text-foreground">
                                    Products
                                </a>
                                <a href={`/${lang}/services`} className="text-muted-foreground hover:text-foreground">
                                    Services
                                </a>
                                <a href={`/${lang}/about`} className="text-muted-foreground hover:text-foreground">
                                    About
                                </a>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}


// Iconos como antes
function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}



// import React, { useState } from 'react';
// import CartButton from './CartButton';
// import { LanguagePicker } from './LanguagePicker';

// const Header = ({ siteUrl, lang }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-green-verbena shadow-lg">
//             <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
//                 {/* Logo */}
//                 <a href={`/${lang}`} className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <span className="self-center text-3xl font-bold text-white">Verbena</span>
//                 </a>

//                 {/* Menú de navegación (centrado en escritorio) */}
//                 <div className="hidden md:flex md:flex-1 md:justify-center">
//                     <ul className="font-medium flex flex-row space-x-8 text-white">
//                         <li>
//                             <a href={`/${lang}`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Home</a>
//                         </li>
//                         <li>
//                             <a href={`/${lang}/products`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Products</a>
//                         </li>
//                         <li>
//                             <a href={`/${lang}/services`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Services</a>
//                         </li>
//                         <li>
//                             <a href={`/${lang}/about`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">About</a>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Carrito y selector de idioma (alineados a la derecha en escritorio) */}
//                 <div className="flex items-center space-x-6 text-white">
//                     <CartButton lang={lang} siteUrl={siteUrl} />
//                     <LanguagePicker siteUrl={siteUrl} />
//                     {/* Botón de hamburguesa para vista móvil */}
//                     <button
//                         onClick={toggleMenu}
//                         type="button"
//                         className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-green-verbena transition-colors duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
//                         aria-controls="navbar-default"
//                         aria-expanded={isMenuOpen}
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Menú lateral en móvil */}
//                 <div className={`fixed top-0 right-0 w-64 h-full bg-green-verbena z-40 transition-transform transform shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
//                     <ul className="font-medium flex flex-col p-6 space-y-6 text-white">
//                         <li>
//                             <a href={`/${lang}`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Home</a>
//                         </li>
//                         <li>
//                             <a href={`/${lang}/products`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Products</a>
//                         </li>
//                         <li>
//                             <a href={`/${lang}/services`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Services</a>
//                         </li>
//                         <li>
//                             <a href={`/${lang}/about`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">About</a>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Fondo oscuro al abrir el menú lateral */}
//                 {isMenuOpen && (
//                     <div onClick={toggleMenu} className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"></div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Header;