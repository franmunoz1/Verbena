import React, { useState } from 'react';
import CartButton from './CartButton';
import { LanguagePicker } from './LanguagePicker';

const Header = ({ siteUrl, lang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-green-verbena shadow-lg">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                {/* Logo */}
                <a href={`/${lang}`} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-bold text-white">Verbena</span>
                </a>

                {/* Menú de navegación (centrado en escritorio) */}
                <div className="hidden md:flex md:flex-1 md:justify-center">
                    <ul className="font-medium flex flex-row space-x-8 text-white">
                        <li>
                            <a href={`/${lang}`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href={`/${lang}/products`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Products</a>
                        </li>
                        <li>
                            <a href={`/${lang}/services`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Services</a>
                        </li>
                        <li>
                            <a href={`/${lang}/about`} className="py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">About</a>
                        </li>
                    </ul>
                </div>

                {/* Carrito y selector de idioma (alineados a la derecha en escritorio) */}
                <div className="flex items-center space-x-6 text-white">
                    <CartButton lang={lang} siteUrl={siteUrl} />
                    <LanguagePicker siteUrl={siteUrl} />
                    {/* Botón de hamburguesa para vista móvil */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-green-verbena transition-colors duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Menú lateral en móvil */}
                <div className={`fixed top-0 right-0 w-64 h-full bg-green-verbena z-40 transition-transform transform shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <ul className="font-medium flex flex-col p-6 space-y-6 text-white">
                        <li>
                            <a href={`/${lang}`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href={`/${lang}/products`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Products</a>
                        </li>
                        <li>
                            <a href={`/${lang}/services`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">Services</a>
                        </li>
                        <li>
                            <a href={`/${lang}/about`} className="block py-2 px-4 hover:bg-white hover:text-green-verbena rounded transition-colors duration-300">About</a>
                        </li>
                    </ul>
                </div>

                {/* Fondo oscuro al abrir el menú lateral */}
                {isMenuOpen && (
                    <div onClick={toggleMenu} className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"></div>
                )}
            </div>
        </nav>
    );
};

export default Header;
