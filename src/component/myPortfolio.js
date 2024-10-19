import { useState } from 'react';

const PortfolioSection = () => {
    const [visible, setVisible] = useState(6); // Initial number of visible portfolio items
    const [currentImageIndex, setCurrentImageIndex] = useState({}); // Current image index for each hovered item

    const portfolioItems = [
        {
            id: 1,
            images: ['travelDate.png', 'travelDateMobile.png'],
            title: 'TravelDate',
        },
        {
            id: 2,
            images: ['canConnect_mobile.png', 'canConnect.png'],
            title: 'Vendor management',
        },
        {
            id: 3,
            images: ['adOpus.png', 'adOpus_mobile.png'],
            title: 'Recruitment portal',
        },
        {
            id: 4,
            images: ['phrma.png', 'phrmaMobile_mockup.png'],
            title: 'pharmaceutical industry',
        },
        {
            id: 5,
            images: ['megaKit.png', 'megaKitApp.png'],
            title: 'Megakit website',
        },
        {
            id: 6,
            images: ['jobPortal.png', 'jobPortalApp.png'],
            title: 'Online job portal',
        }
    ];

    const handleLoadMore = () => {
        setVisible((prevVisible) => prevVisible + 3); // Load 3 more items
    };

    const handlePrevImage = (id) => {
        setCurrentImageIndex((prevIndex) => ({
            ...prevIndex,
            [id]: (prevIndex[id] || 0) === 0 ? portfolioItems[id - 1].images.length - 1 : (prevIndex[id] || 0) - 1,
        }));
    };

    const handleNextImage = (id) => {
        setCurrentImageIndex((prevIndex) => ({
            ...prevIndex,
            [id]: (prevIndex[id] || 0) === portfolioItems[id - 1].images.length - 1 ? 0 : (prevIndex[id] || 0) + 1,
        }));
    };

    return (
        <section className="bg-gray-100 py-20" id="portfolio">
            <div className="container mx-auto px-4 md:px-10 lg:px-16">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.slice(0, visible).map((item) => (
                        <div
                            key={item.id}
                            className="relative animate__animated animate__fadeIn"
                            style={{ animationDelay: `${item.id * 0.1}s` }}
                        >
                            <div className="overflow-hidden relative">
                                <img
                                    src={item.images[currentImageIndex[item.id] || 0]} // Show current image based on index
                                    alt={item.title}
                                    className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg transition-transform duration-500"
                                />
                                <h3 className="text-center mt-2 text-lg font-semibold">{item.title}</h3>

                                {/* Show arrows only when hovered over the item */}
                                <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="bg-white text-black rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition duration-300"
                                        onClick={() => handlePrevImage(item.id)}
                                        aria-label="Previous Image"
                                    >
                                        <span className="text-2xl">&#10094;</span> {/* Left arrow */}
                                    </button>
                                    <button
                                        className="bg-white text-black rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition duration-300"
                                        onClick={() => handleNextImage(item.id)}
                                        aria-label="Next Image"
                                    >
                                        <span className="text-2xl">&#10095;</span> {/* Right arrow */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visible < portfolioItems.length && (
                    <div className="text-center mt-10">
                        <button
                            onClick={handleLoadMore}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioSection;
