import React, { useState } from 'react';

const PolicyModal: React.FC<{ title: string; content: React.ReactNode; onClose: () => void; }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b flex justify-between items-center">
                 <h2 className="text-2xl font-bold text-autonest-dark">{title}</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-6 overflow-y-auto">{content}</div>
        </div>
    </div>
);


const Footer: React.FC = () => {
    const [modalContent, setModalContent] = useState<{ title: string, content: React.ReactNode } | null>(null);

    const privacyPolicy = (
        <div className="prose">
            <p>Última actualización: Octubre 2025</p>
            <p>Esta política describe cómo el Bot de atención de Ingeniería N8N maneja la información de los usuarios que interactúan a través de WhatsApp u otros canales conectados.</p>
            <h3>1. Información recopilada</h3>
            <p>El bot puede recibir y procesar información que los usuarios envían voluntariamente (por ejemplo, mensajes de texto o archivos) con el único fin de brindar soporte automatizado o responder consultas. No se recopilan datos personales sensibles ni se comparten con terceros.</p>
            <h3>2. Uso de la información</h3>
            <p>Los datos son utilizados exclusivamente para procesar las solicitudes del usuario y mejorar la calidad del servicio automatizado.</p>
            <h3>3. Conservación y eliminación</h3>
            <p>La información procesada se conserva por un período limitado y luego se elimina automáticamente, salvo que el usuario solicite su eliminación inmediata.</p>
            <h3>4. Seguridad</h3>
            <p>Se aplican medidas técnicas razonables para proteger los datos transmitidos, evitando accesos no autorizados o usos indebidos.</p>
            <h3>5. Contacto</h3>
            <p>Para consultas o solicitudes relacionadas con esta política, puede contactarnos en: <a href="mailto:autonest.ar.contacto@gmail.com" className="text-autonest-blue">autonest.ar.contacto@gmail.com</a></p>
        </div>
    );

    const termsAndConditions = (
        <div className="prose">
            <p>Al utilizar los servicios de AutoNest, usted acepta cumplir con los términos establecidos en este documento. AutoNest se reserva el derecho de modificar estos términos en cualquier momento, notificando a los usuarios a través de los canales oficiales.</p>
        </div>
    );
    
    return (
        <>
            <footer className="bg-autonest-dark text-white">
                <div className="container mx-auto px-6 py-12">
                     <div className="text-center mb-8">
                        <img src="/images/Autonest.png" alt="Autonest Logo" className="h-12 w-12 rounded-full object-cover mx-auto mb-2 border border-gray-700" />
                        <p className="text-2xl font-bold">AUTONEST</p>
                     </div>
                     <div className="text-center text-gray-400 text-sm max-w-3xl mx-auto mb-8 space-y-2">
                        <p>Nuestra aplicación es compatible con cualquier dispositivo OBD-II. Si no tienes uno, contáctanos y te ayudaremos a conseguirlo.</p>
                        <p>Autonest no reemplaza a un mecánico profesional, pero es una herramienta poderosa para el diagnóstico previo y el seguimiento continuo del estado de tu vehículo.</p>
                     </div>
                     <div className="flex justify-center items-center space-x-6 text-gray-300">
                        <button onClick={() => setModalContent({ title: 'Política de Privacidad', content: privacyPolicy })} className="hover:text-white transition-colors">Política de Privacidad</button>
                        <span>|</span>
                        <button onClick={() => setModalContent({ title: 'Términos y Condiciones', content: termsAndConditions })} className="hover:text-white transition-colors">Términos y Condiciones</button>
                    </div>
                     <div className="text-center text-gray-400 text-sm mt-8">
                         <p>&copy; {new Date().getFullYear()} Autonest. Todos los derechos reservados.</p>
                         <p>Contacto: <a href="mailto:autonest.ar.contacto@gmail.com" className="hover:text-autonest-blue">autonest.ar.contacto@gmail.com</a></p>
                     </div>
                </div>
            </footer>
            {modalContent && <PolicyModal title={modalContent.title} content={modalContent.content} onClose={() => setModalContent(null)} />}
        </>
    );
};

export default Footer;