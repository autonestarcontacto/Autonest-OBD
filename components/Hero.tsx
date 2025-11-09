import React, { useState, useEffect } from 'react';

interface HeroProps {
    onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/images/OBDII-1.png',
        '/images/OBDII-2.png',
        '/images/OBDII-3.png',
        '/images/OBDII-4.png',
        '/images/OBDII-5.png',
        '/images/OBDII-6.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-autonest-light pt-32 pb-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left fade-in-section">
                    <h1 className="text-4xl md:text-6xl font-bold text-autonest-dark leading-tight mb-4">
                        Conectate con tu auto.
                        <span className="block text-autonest-blue">Conduce con inteligencia.</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                        Autonest es tu copiloto personal que te permite anticipar fallas, gestionar mantenimientos y mantenerte seguro en el camino mediante nuestro asistente inteligente que se conecta al dispositivo OBD-II de tu vehículo.
                    </p>
                    <button
                        onClick={onRegisterClick}
                        className="bg-autonest-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                        Regístrate ahora
                    </button>
                </div>
                <div className="fade-in-section relative max-w-sm mx-auto">
                    <div className="relative w-full h-auto">
                        {images.map((img, index) => (
                            <img
                                key={img}
                                src={img}
                                alt={`Dispositivo OBD-II ${index + 1}`}
                                className={`w-full h-auto rounded-lg transition-opacity duration-1000 ${
                                    index === currentImage ? 'opacity-100' : 'opacity-0 absolute inset-0'
                                }`}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentImage ? 'bg-autonest-blue w-8' : 'bg-gray-300'
                                }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;