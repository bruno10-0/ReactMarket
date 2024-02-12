import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const CrazySlider = () => {
    const images = [
        "https://http2.mlstatic.com/D_NQ_985793-MLA74254028956_022024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_852724-MLA74255608290_022024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_682765-MLA74423187481_022024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_863799-MLA74214799536_012024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_958811-MLA74322072658_022024-OO.webp"
    ];
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 11000); // Cambiar de imagen cada 16 segundos

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="mt-16 mb-48 relative w-full h-auto" style={{ height: "60vh" }}>
            <div className="absolute inset-0 flex justify-center items-center">
                <img
                    src={images[index]}
                    alt={`Slide ${index}`}
                    className="object-cover w-full h-full"
                />
            </div>
            <button
                className="z-10 absolute left-0 top-1/2 transform -translate-y-1/2 btn border-none rounded-r-full"
                onClick={prevSlide}
            >
                <FaChevronLeft className="h-6 w-6" />
            </button>
            <button
                className="z-10 absolute right-0 top-1/2 transform -translate-y-1/2 btn border-none rounded-l-full"
                onClick={nextSlide}
            >
                <FaChevronRight className="h-6 w-6" />
            </button>
            <div className="w-full absolute -bottom-2" style={{ height: "200px" }}>
                <div className="w-full h-full bg-gradient-to-t from-base-200 to-transparent blur-sm"></div>
            </div>
        </div>
    );
};
