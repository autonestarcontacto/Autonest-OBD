import React from 'react';

  interface PricingProps {
      onRegisterClick: () => void;
  }

  interface Plan {
      name: string;
      description: string;
      price: string;
      period: string;
      cta: string;
      features: string[];
      highlight?: boolean;
      annual?: string;
  }

  const PlanCard: React.FC<{ plan: Plan, onRegisterClick: () => void }> = ({ plan, onRegisterClick }) => (
    <div className={`border rounded-xl p-8 flex flex-col h-full ${plan.highlight ? 'bg-autonest-dark text-white border-autonest-blue shadow-2xl transform md:scale-105' : 'bg-white hover:shadow-xl transition-shadow'}`}>
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className={`mt-2 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
        <div className="my-8">
            <span className="text-5xl font-extrabold">{plan.price}</span>
            <span className={`text-lg ml-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
            {plan.annual && <p className={`text-sm mt-2 ${plan.highlight ? 'text-autonest-orange' : 'text-autonest-blue'}`}>{plan.annual}</p>}
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                    <svg className={`w-6 h-6 mr-2 flex-shrink-0 ${plan.highlight ? 'text-autonest-green' : 'text-autonest-blue'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button 
             onClick={plan.cta === "Contáctanos" ? () => window.location.href='mailto:autonest.ar.contacto@gmail.com' : onRegisterClick}
             className={`w-full py-3 font-bold rounded-lg transition-colors duration-300 ${plan.highlight ? 'bg-autonest-orange text-white hover:bg-orange-400' : 'bg-autonest-blue/10 text-autonest-blue hover:bg-autonest-blue/20'}`}>
            {plan.cta}
        </button>
    </div>
);

const Pricing: React.FC<PricingProps> = ({ onRegisterClick }) => {
    const plans = [
        { name: 'Free', description: 'Lo esencial para empezar.', price: '$0', period: '/mes', cta: 'Regístrate ahora', features: ['100 peticiones/mes', 'Detección de fallas en tiempo real'] },
        { name: 'Básico', description: 'Para el conductor diario.', price: '$14', period: '/mes', annual: 'o $134.40/año (20% off)', cta: 'Regístrate ahora', highlight: true, features: ['1,000 peticiones/mes', 'Todo lo del plan Gratis', 'Interacción por audio y texto', 'Mantenimiento predictivo', 'Sugerencias climáticas', 'Reportes mensuales'] },
        { name: 'Premium', description: 'La experiencia completa.', price: '$20', period: '/mes', annual: 'o $192/año (20% off)', cta: 'Regístrate ahora', features: ['Peticiones ilimitadas', 'Todo lo del plan Básico', 'Interacción por fotos', 'Asistencia para agendar turnos', 'Gestión con el seguro', 'Reportes semanales y mensuales'] },
        { name: 'Flotas', description: 'Soluciones a medida.', price: 'Custom', period: '', cta: 'Contáctanos', features: ['Optimiza costos y logística', 'Gestión centralizada', 'Soporte prioritario', 'Reportes personalizados'] }
    ];

    return (
        <section id="planes" className="py-20 bg-autonest-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-section">
                    <h2 className="text-4xl font-bold text-autonest-dark">Planes para cada necesidad</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Elige el plan que mejor se adapte a ti o a tu empresa y empieza a conducir con inteligencia.</p>
                </div>
                <div className="grid lg:grid-cols-4 gap-8 items-stretch fade-in-section">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} onRegisterClick={onRegisterClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
