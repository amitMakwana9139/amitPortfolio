// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-2">Contact Me</p>
                <a
                    href="mailto:your.email@example.com" // Replace with your actual email
                    className="text-blue-400 hover:text-blue-300 transition duration-200"
                >
                    amitmakwana7563@gmail.com
                </a>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} Amit Makwana. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
