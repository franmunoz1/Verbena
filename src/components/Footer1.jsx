import { useState, useEffect } from "react";
import { LanguagePicker } from "./LanguagePicker";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fontsource/cormorant-garamond';

export default function Footer({ siteUrl, lang, footerTraductions }) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 600 });

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white shadow-md mt-12">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="md:col-span-2">
                        <a href={`/${lang}`} className="flex items-center gap-2 mb-4">
                            <span className="text-green-verbena font-extrabold text-3xl" style={{ fontFamily: 'Cormorant Garamond', font: 'serif' }}>Verbena</span>
                        </a>
                        <p className="text-muted-foreground text-sm">
                            Discover the essence of nature with Verbena's organic products and services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href={`/${lang}`} className="text-muted-foreground hover:text-foreground">Home</a></li>
                            <li><a href={`/${lang}/products`} className="text-muted-foreground hover:text-foreground">Products</a></li>
                            <li><a href={`/${lang}/services`} className="text-muted-foreground hover:text-foreground">Services</a></li>
                            <li><a href={`/${lang}/about`} className="text-muted-foreground hover:text-foreground">About</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">{footerTraductions.contactUs}</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <EmailIcon className="h-4 w-4" />
                                <span className="text-muted-foreground">info@verbena.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <PhoneIcon className="h-4 w-4" />
                                <span className="text-muted-foreground">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPinIcon className="h-4 w-4" />
                                <span className="text-muted-foreground">123 Nature St, Green City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-muted-foreground mb-4 md:mb-0">
                        {footerTraductions.copyrigth}
                    </div>
                    <div className="flex items-center gap-4">
                        <LanguagePicker siteUrl={siteUrl} />
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <FacebookIcon className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/verbena.ec/" target="blank" className="text-muted-foreground hover:text-foreground">
                                <InstagramIcon className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <TwitterIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to top button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-green-verbena text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
                    data-aos="fade-up"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </button>
            )}
        </footer>
    );
}

// Icons
function EmailIcon(props) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

function PhoneIcon(props) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

function MapPinIcon(props) {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}

function FacebookIcon(props) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function InstagramIcon(props) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}

function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}

function ArrowUpIcon(props) {
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
            <path d="m18 15-6-6-6 6" />
        </svg>
    )
}