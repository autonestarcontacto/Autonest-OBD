import React from 'react';

const PhoneMockup: React.FC<{ platform: 'whatsapp' | 'telegram', message: string, platformColor: string, icon: React.ReactNode }> = ({ platform, message, platformColor, icon }) => {
    return (
        <div className="bg-gray-800 p-2 rounded-3xl shadow-2xl w-full max-w-sm mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden">
                <div className={`flex items-center p-3 space-x-3`} style={{backgroundColor: platformColor}}>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/Autonest.png" alt="Autonest Logo" className="h-7 w-auto" />
                    </div>
                    <div>
                        <p className="font-bold text-white">Autonest</p>
                        <p className="text-xs text-white/80">Asistente en línea</p>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 h-64 flex flex-col justify-end">
                    <div className="flex items-start max-w-xs">
                        <div className="self-end bg-white p-3 rounded-lg rounded-bl-none shadow">
                            <p className="text-sm text-gray-800">{message}</p>
                        </div>
                    </div>
                </div>
                 <div className="p-2 bg-gray-200 flex items-center">
                    <input type="text" placeholder={`Mensaje a Autonest`} className="flex-grow bg-white rounded-full py-2 px-4 text-sm focus:outline-none" />
                    <div className="ml-2 text-white p-2 rounded-full" style={{backgroundColor: platformColor}}>
                       {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-section">
                    <h2 className="text-4xl font-bold text-autonest-dark">Mantente Siempre Informado</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Recibe alertas y notificaciones importantes directamente en tu app de mensajería preferida.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center fade-in-section">
                    <PhoneMockup 
                        platform="whatsapp"
                        message="¡Hola! Tu service está programado para la próxima semana en tu taller de confianza. ¿Confirmamos?"
                        platformColor="#25D366"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>}
                    />
                    <PhoneMockup 
                        platform="telegram"
                        message="¡Atención! En 300 metros tienes un radar de velocidad. Límite: 80 km/h."
                        platformColor="#0088cc"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;