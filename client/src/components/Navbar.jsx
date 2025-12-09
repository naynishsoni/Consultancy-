import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <Link to="/" className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
                        Consult<span className="text-brand-orange">Agency</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Home', 'Projects', 'Clients', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`font-medium transition hover:text-brand-orange ${isScrolled ? 'text-gray-700' : 'text-gray-100'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                    <Link
                        to="/admin"
                        className={`px-5 py-2 rounded-full font-semibold transition ${isScrolled
                                ? 'bg-brand-blue text-white hover:bg-blue-900'
                                : 'bg-white text-brand-blue hover:bg-gray-100'
                            }`}
                    >
                        Admin Panel
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={isScrolled ? 'text-gray-800' : 'text-white'}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4">
                    <div className="flex flex-col space-y-4 px-6">
                        {['Home', 'Projects', 'Clients', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-orange font-medium"
                            >
                                {item}
                            </a>
                        ))}
                        <Link
                            to="/admin"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-brand-blue font-bold"
                        >
                            Admin Panel
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
