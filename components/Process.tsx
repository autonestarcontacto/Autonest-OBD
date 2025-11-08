
import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
    <div className="relative pl-12">
        <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-autonest-green text-white font-bold text-xl shadow-md">
            {number}
        </div>
        <h3 className="text-xl font-bold text-autonest-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Process: React.FC = () => {
    return (
        <section className="py-20 bg-autonest-light">
            <div className="container mx-auto px-6 fade-in-section">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-autonest-dark">Empezar es muy fácil</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">En solo tres pasos, tendrás el control total de tu vehículo.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
                   <Step 
                       number={1} 
                       title="Conecta"
                       description="Enchufa el dispositivo OBD-II en el puerto de tu auto. ¡Es más fácil que cargar tu teléfono!"
                   />
                    <Step 
                       number={2} 
                       title="Regístrate"
                       description="Completa nuestro formulario rápido para vincular tu vehículo y tus preferencias de contacto."
                   />
                    <Step 
                       number={3} 
                       title="Conduce"
                       description="¡Listo! Autonest empieza a monitorear tu auto y a enviarte información útil para tu tranquilidad."
                   />
                </div>
            </div>
        </section>
    );
};

export default Process;