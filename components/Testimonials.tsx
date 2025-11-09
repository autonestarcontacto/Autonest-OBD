
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; image: string; }> = ({ quote, name, role, image }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
        <div className="flex items-center">
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
                <p className="font-bold text-autonest-dark">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "Autonest me avisó de una falla en la batería una semana antes de que me dejara tirado. ¡Me ahorró un gran dolor de cabeza!",
            name: "Carlos Vega",
            role: "Usuario particular",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            quote: "La gestión de flota es increíble. Ahora sé exactamente cuándo mis vehículos necesitan mantenimiento, optimizando costos y tiempos.",
            name: "Ana Torres",
            role: "Gerente de Flota",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            quote: "Tuve un pequeño accidente y Autonest me ayudó a contactar al seguro y al taller al instante. El soporte fue impecable.",
            name: "Javier Mendoza",
            role: "Conductor de larga distancia",
            image: "https://randomuser.me/api/portraits/men/46.jpg"
        }
    ];

    return (
        <section id="testimonios" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-section">
                    <h2 className="text-4xl font-bold text-autonest-dark">Lo que dicen nuestros clientes</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">La confianza y tranquilidad de nuestros usuarios es nuestra mejor recompensa.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 fade-in-section">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;