
import React from 'react';

const Guarantee: React.FC = () => {
    return (
        <section className="bg-autonest-blue text-white">
            <div className="container mx-auto px-6 py-12 text-center fade-in-section">
                <h2 className="text-3xl font-bold mb-3">Tu tranquilidad, garantizada.</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    ¿No estás seguro? Prueba todas las funcionalidades de nuestro plan Premium
                    completamente <span className="font-bold underline">gratis por 30 días</span>. Sin compromisos, sin tarjeta de crédito requerida.
                </p>
            </div>
        </section>
    );
};

export default Guarantee;