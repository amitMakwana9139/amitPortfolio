// src/components/Services.js
import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive and high-performance websites using the latest technologies.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/web.png',
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Creating user-friendly mobile applications for both iOS and Android platforms.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/mobile-app.png',
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Designing intuitive user interfaces and experiences for seamless interaction.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/user-experience.png',
        },
        // {
        //     id: 4,
        //     title: 'SEO Optimization',
        //     description: 'Improving website visibility on search engines to attract more organic traffic.',
        //     icon: 'https://img.icons8.com/ios-filled/50/000000/search.png',
        // },
        // {
        //     id: 5,
        //     title: 'Digital Marketing',
        //     description: 'Promoting your brand through effective online marketing strategies.',
        //     icon: 'https://img.icons8.com/ios-filled/50/000000/marketing.png',
        // },
        // {
        //     id: 6,
        //     title: 'E-commerce Solutions',
        //     description: 'Building robust e-commerce platforms to enhance your online sales.',
        //     icon: 'https://img.icons8.com/ios-filled/50/000000/shopping-cart.png',
        // },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mt-2 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
