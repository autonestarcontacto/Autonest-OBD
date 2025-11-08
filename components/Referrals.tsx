
import React from 'react';

const Referrals: React.FC = () => {
    return (
        <section id="referidos" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl fade-in-section">
                <div className="text-center mb-10">
                     <h2 className="text-4xl font-bold text-autonest-dark">Programa de Referidos AutoNest</h2>
                    <p className="text-lg text-gray-600 mt-4">Recompensamos a los usuarios activos que invitan a nuevos miembros a AutoNest.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-center">
                    <div className="bg-autonest-light p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-autonest-dark mb-4">Plan 3x3</h3>
                        <p className="text-gray-700">
                            Si tienes 3 meses de membresía básica pagada y consigues 3 nuevos usuarios que también paguen 3 meses consecutivos, <span className="font-bold text-autonest-dark">ganas 3 meses de membresía premium</span>.
                        </p>
                    </div>
                    <div className="bg-autonest-light p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-autonest-dark mb-4">Plan 6x6</h3>
                        <p className="text-gray-700">
                            Funciona igual que el plan anterior, pero aplicando a usuarios con 6 meses consecutivos de membresía pagada.
                        </p>
                    </div>
                </div>
                 <p className="text-center text-sm text-gray-500 mt-8">
                    Para aplicar, el usuario debe haber mantenido su membresía activa y sin interrupciones durante el período correspondiente.
                </p>
            </div>
        </section>
    );
};

export default Referrals;