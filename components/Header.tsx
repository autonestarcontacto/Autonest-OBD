
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '#servicios' },
        { name: 'Planes', href: '#planes' },
        { name: 'Testimonios', href: '#testimonios' },
    ];

    const NavLinkItems = () => (
        <>
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-gray-600 hover:text-autonest-blue transition-colors duration-300 font-medium md:p-0">
                    {link.name}
                </a>
            ))}
        </>
    )

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <img src="https://i.imgur.com/8Qz4q4A.png" alt="Autonest Logo" className="h-10 w-auto" />
                    <span className="text-2xl font-bold text-autonest-dark tracking-tight">AUTONEST</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLinkItems />
                </nav>
                <div className="flex items-center">
                    <button 
                        onClick={onRegisterClick}
                        className="hidden md:inline-block bg-autonest-orange text-white font-bold py-2 px-6 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Regístrate ahora
                    </button>
                    <div className="md:hidden ml-4">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
             {isMobileMenuOpen && (
                <div className="md:hidden bg-white pb-4">
                    <nav className="container mx-auto px-6 flex flex-col items-center space-y-2">
                       <NavLinkItems />
                        <button 
                            onClick={() => { onRegisterClick(); setIsMobileMenuOpen(false); }}
                            className="w-full mt-4 bg-autonest-orange text-white font-bold py-2 px-6 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Regístrate ahora
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;