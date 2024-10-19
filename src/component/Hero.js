// src/components/Hero.js
import React from 'react';

const Hero = () => {
    // Inline CSS for keyframe animations
    const styles = {
        fadeIn: {
            animation: 'fadeIn 1.5s ease-in-out',
        },
        keyframes: `
      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    };

    return (
        <>
            {/* Inject keyframe styles directly into the <head> of the document */}
            <style>
                {styles.keyframes}
            </style>

            <section id="hero" className="bg-gray-100 min-h-screen flex items-center">
                <div className="container mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center py-12">
                    {/* Left Side: Text and Social Media */}
                    <div className="md:w-1/2 flex flex-col items-start mb-10 md:mb-0 space-y-2">
                        {/* Text Introduction with precise spacing */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight" style={styles.fadeIn}>
                            Hi there,
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight" style={styles.fadeIn}>
                            I am Amit Makwana
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed" style={styles.fadeIn}>
                            Building robust, full-stack applications with the MERN stack.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-6 mt-6" style={styles.fadeIn}>
                            <a href="https://www.linkedin.com/in/-amit-makwana/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-300">
                                <img
                                    src="linkdin.png"
                                    alt="LinkedIn Logo"
                                    className="w-6 h-6 text-blue-700 hover:text-blue-900"
                                />
                            </a>
                            <a href="https://github.com/amitMakwana9139" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-300">
                                <svg className="w-6 h-6 text-gray-800 hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 8.205 11.423c.599.111.818-.26.818-.577v-2.16c-3.338.724-4.033-1.641-4.033-1.641-.545-1.386-1.333-1.756-1.333-1.756-1.088-.745.083-.729.083-.729 1.202.084 1.833 1.234 1.833 1.234 1.068 1.834 2.804 1.304 3.49.998.108-.774.418-1.305.762-1.604-2.665-.305-5.467-1.333-5.467-5.93 0-1.312.47-2.38 1.235-3.22-.123-.305-.535-1.533.117-3.196 0 0 1.008-.322 3.3 1.23.957-.267 1.984-.4 3.003-.404 1.02.004 2.046.137 3.004.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.663.24 2.891.118 3.196.766.84 1.234 1.908 1.234 3.22 0 4.61-2.804 5.624-5.474 5.922.43.37.814 1.102.814 2.222v3.293c0 .32.219.692.824.575A12.002 12.002 0 0 0 24 12C24 5.373 18.627 0 12 0z" />
                                </svg>
                            </a>
                        </div>

                        {/* Download CV Button */}
                        <a
                            href="Amit_MERN.pdf"
                            download="Amit_Makwana_CV.pdf"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-sm hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                            style={styles.fadeIn}
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-1/2 flex justify-end">
                        <img
                            src="myImage.jpg"
                            alt="profile image"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-sm hover:scale-105 transition duration-500"
                            style={styles.fadeIn}
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
