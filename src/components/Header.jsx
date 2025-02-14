import { useState, useEffect } from "react";
import CartButton from "./CartButton";
import { LanguagePicker } from "./LanguagePicker";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fontsource/cormorant-garamond';

export default function Header({ siteUrl, lang, navbarTraductions }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 z-40 w-full bg-white shadow-md bg-opacity-30 backdrop-blur-sm">
            <div className="container mx-auto p-4">
                {/* Contenedor principal */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href={`/${lang}`} className="flex-1 md:flex-none flex flex-col justify-center md:justify-start items-center gap-x-2">
                        <span
                            className="text-green-verbena font-extrabold text-4xl"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            Verbena
                        </span>
                        <span
                            className="text-[0.6rem] text-green-verbena italic tracking-tighter"
                            style={{ letterSpacing: '0.03em' }}
                        >
                            ESTHETIC CENTER
                        </span>
                    </a>

                    {/* Anchors de navegación y selector de idioma */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <a href={`/${lang}/products`} className="text-muted-foreground hover:text-foreground">
                            {navbarTraductions.products}
                        </a>
                        <a href={`/${lang}/services`} className="text-muted-foreground hover:text-foreground">
                            {navbarTraductions.services}
                        </a>
                        <a href={`/${lang}/giftcard`} className="text-muted-foreground hover:text-foreground">
                            Gift Card
                        </a>
                        <a href={`/${lang}/about`} className="text-muted-foreground hover:text-foreground">
                            {navbarTraductions.about}
                        </a>
                        <LanguagePicker siteUrl={siteUrl} />

                    </div>

                    <div className="hidden md:block">
                        <CartButton lang={lang} className="h-5 w-5" />
                    </div>

                </div>

                {/* Menú para pantallas pequeñas */}
                <div className="flex justify-between items-center mt-4 md:hidden">
                    <button className="rounded-full p-2 border" onClick={toggleMenu}>
                        <MenuIcon className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                    <a href={`/${lang}/services`} className="text-muted-foreground hover:text-foreground">
                        {navbarTraductions.services}
                    </a>
                    <LanguagePicker siteUrl={siteUrl} />
                    <CartButton lang={lang} className="h-5 w-5" />
                </div>

                {/* Menú desplegable lateral solo para móviles */}
                {menuOpen && (
                    <div className="fixed inset-0 z-50 bg-[#f5f1ec] bg-opacity-100 w-[250px] h-screen left-0 overflow-y-auto" data-aos="fade-right">
                        <button className="absolute top-4 right-4 text-2xl font-bold" onClick={toggleMenu}>
                            &times;
                        </button>
                        <nav className="flex flex-col gap-6 mt-8 text-lg p-4">
                            <a href={`/${lang}`} className="text-muted-foreground hover:text-foreground">
                                {navbarTraductions.home}
                            </a>
                            <a href={`/${lang}/products`} className="text-muted-foreground hover:text-foreground">
                                {navbarTraductions.products}
                            </a>
                            <a href={`/${lang}/giftcard`} className="text-muted-foreground hover:text-foreground">
                                Gift Card
                            </a>
                            <a href={`/${lang}/about`} className="text-muted-foreground hover:text-foreground">
                                {navbarTraductions.about}
                            </a>
                        </nav>
                    </div>
                )}

            </div>
        </nav>


    );
}

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




// Last header

// import { useState, useEffect } from "react";
// import CartButton from "./CartButton";
// import { LanguagePicker } from "./LanguagePicker";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import '@fontsource/cormorant-garamond';

// export default function Header({ siteUrl, lang, navbarTraductions }) {
//     const [menuOpen, setMenuOpen] = useState(false);

//     useEffect(() => {
//         AOS.init({ duration: 600 });
//     }, []);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <nav className="sticky top-0 z-40 w-full bg-white  shadow-md" >
//             {/* AGREGAR TRANSPARENCIA HEADER: bg-opacity-30 backdrop-blur-sm */}
//             <div className="container flex mx-auto h-16 items-center justify-between px-4 md:px-6">
//                 {/* Menú hamburguesa solo visible en pantallas pequeñas (izquierda) */}
//                 <button className="md:hidden rounded-full p-2 border" onClick={toggleMenu}>
//                     <MenuIcon className="h-5 w-5" />
//                     <span className="sr-only">Toggle menu</span>
//                 </button>

//                 {/* Logo centrado en pantallas pequeñas, pero en su lugar normal en pantallas grandes */}
//                 <a href={/${lang}} className="flex-1 md:flex-none flex justify-center md:justify-start items-center gap-2">
//                     <div className="flex flex-col text-center leading-none">
//                         <span
//                             className="text-green-verbena font-extrabold text-4xl"
//                             style={{ fontFamily: 'Cormorant Garamond, serif' }}
//                         >
//                             Verbena
//                         </span>
//                         <span
//                             className="text-[0.6rem] text-green-verbena italic tracking-tighter"
//                             style={{ letterSpacing: '0.03em' }}
//                         >
//                             ESTHETIC CENTER
//                         </span>
//                     </div>
//                 </a>

//                 {/* Barra de navegación centrada en pantallas md o mayores */}
//                 <div className="hidden md:flex md:flex-1 justify-center items-center gap-6 text-sm font-medium">
//                     <a href={/${lang}} className="text-muted-foreground hover:text-foreground">
//                         {navbarTraductions.home}
//                     </a>
//                     <a href={/${lang}/products} className="text-muted-foreground hover:text-foreground">
//                         {navbarTraductions.products}
//                     </a>
//                     <a href={/${lang}/services} className="text-muted-foreground hover:text-foreground">
//                         {navbarTraductions.services}
//                     </a>
//                     <a href={/${lang}/giftcard} className="text-muted-foreground hover:text-foreground">
//                         Gift Card
//                     </a>
//                     <a href={/${lang}/about} className="text-muted-foreground hover:text-foreground">
//                         {navbarTraductions.about}
//                     </a>
//                     {/* LanguagePicker visible en computadoras */}
//                     <LanguagePicker siteUrl={siteUrl} />
//                 </div>

//                 {/* Botón de carrito visible en todas las pantallas */}
//                 <div className="flex items-center">
//                     <button className="rounded-full">
//                         <CartButton lang={lang} className="h-5 w-5" />
//                         <span className="sr-only">Cart</span>
//                     </button>
//                 </div>

//                 {/* Menú hamburguesa animado */}
//                 {menuOpen && (
//                     <div
//                         className="fixed inset-0 z-50 bg-white p-6 shadow-md w-[250px] h-full left-0"
//                         data-aos="fade-right"
//                     >
//                         {/* Cruz para cerrar el menú */}
//                         <button className="absolute top-4 right-4 text-2xl font-bold" onClick={toggleMenu}>
//                             &times;
//                         </button>

//                         {/* LanguagePicker visible en móviles */}
//                         <LanguagePicker siteUrl={siteUrl} />

//                         <nav className="flex flex-col gap-6 mt-8 text-lg">
//                             <a href={/${lang}} className="text-muted-foreground hover:text-foreground">
//                                 {navbarTraductions.home}
//                             </a>
//                             <a href={/${lang}/products} className="text-muted-foreground hover:text-foreground">
//                                 {navbarTraductions.products}
//                             </a>
//                             <a href={/${lang}/services} className="text-muted-foreground hover:text-foreground">
//                                 {navbarTraductions.services}
//                             </a>
//                             <a href={/${lang}/giftcard} className="text-muted-foreground hover:text-foreground">
//                                 Gift Card
//                             </a>
//                             <a href={/${lang}/about} className="text-muted-foreground hover:text-foreground">
//                                 {navbarTraductions.about}
//                             </a>
//                         </nav>
//                     </div>
//                 )}
//             </div>
//         </nav >

//     );
// }


// // Iconos como antes
// function MenuIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//         </svg>
//     );
// }

// function MountainIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//         </svg>
//     );
// }