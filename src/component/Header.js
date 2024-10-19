// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
    // State to manage the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo or Brand */}
                <div className="text-2xl font-bold">
                    <a href="#" className="hover:text-gray-300 transition duration-300">My Portfolio</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#hero" className="hover:text-gray-300 transition duration-300">Home</a>
                    <a href="#portfolio" className="hover:text-gray-300 transition duration-300">Portfolio</a>
                    <a href="#skills" className="hover:text-gray-300 transition duration-300">Skills</a>
                    <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
                </nav>

                {/* Hamburger/Cross Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden block focus:outline-none"
                >
                    {/* Toggle between hamburger and cross icon */}
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <nav className="flex flex-col space-y-2 p-4">
                    <a href="#hero" className="hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Home</a>
                    <a href="#portfolio" className="hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Portfolio</a>
                    <a href="#skills" className="hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Skills</a>
                    <a href="#contact" className="hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
