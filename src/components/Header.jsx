import React, { useState } from 'react';

const Header = () => {
    // Estado para controlar la visibilidad del menú
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para manejar el clic en el botón de hamburguesa
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-green-verbena">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Verbena</span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-verbena md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-verbena dark:bg-green-verbena md:dark:bg-green-verbena dark:border-gray-700 text-white">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded ">Home</a>
                        </li>
                        <li>
                            <a href="/products" className="block py-2 px-3 text-white rounded ">Products</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded ">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded "><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
