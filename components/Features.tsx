
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
        <div className="bg-autonest-blue/10 text-autonest-blue w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-autonest-dark mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const featuresData = [
        {
            icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
            title: "Mantenimiento Predictivo",
            description: "Anticípate a las fallas. Te avisamos cuándo es el momento ideal para tu próximo servicio basándonos en el uso y kilometraje real de tu vehículo."
        },
        {
            icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
            title: "Asistencia y Seguros",
            description: "En caso de un imprevisto, coordinamos con tu seguro y te asistimos para agendar turnos en el taller. Tu tranquilidad es nuestra prioridad."
        },
        {
            icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
            title: "Reportes Detallados",
            description: "Recibe informes semanales o mensuales con estadísticas de recorrido, consumo, estado del vehículo y más. Optimiza el rendimiento y ahorra costos."
        },
        {
            icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h-2.25m0-11.25h2.25m17.25 0h-2.25m0 0l-3-3m0 0l-3 3m-3-3l-3-3m6 0v11.25",
            title: "Gestión de Flotas",
            description: "Controla todos los vehículos de tu empresa desde un solo lugar. Monitorea el estado, asigna mantenimientos y optimiza la logística de tu flota."
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-autonest-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-section">
                    <h2 className="text-4xl font-bold text-autonest-dark">Tu Asistente Vehicular Inteligente</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Todo lo que necesitas para cuidar tu auto y conducir con total tranquilidad, en un solo lugar.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;