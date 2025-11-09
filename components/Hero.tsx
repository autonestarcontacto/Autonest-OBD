
import React from 'react';

interface HeroProps {
    onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
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
                <div className="fade-in-section">
                    <video 
                        src="https://i.imgur.com/83u6sKj.mp4" 
                        className="w-full h-auto rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;