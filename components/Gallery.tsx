  import React from 'react';
  import autonestLogo from '/images/Autonest.png';

  const PhoneMockup: React.FC<{ platform: 'whatsapp' | 'telegram', message: string, platformColor: string }> = ({ platform, message, platformColor }) => {
      return (
          <div className="bg-gray-800 p-2 rounded-3xl shadow-2xl w-full max-w-sm mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden">
                  <div className={`flex items-center p-3 space-x-3`} style={{backgroundColor: platformColor}}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                          <img src={autonestLogo} alt="Autonest Logo" className="h-10 w-10 rounded-full object-cover" />────────────────────────────────────────────────
                      </div>
                      <div>
                          <p className="font-bold text-white">Autonest</p>
                          <p className="text-xs text-white/80">Asistente en línea</p>
                      </div>
                  </div>
                  <div className="p-4 bg-gray-100 h-64 flex flex-col justify-end">
                      <div className="flex items-start max-w-xs">
                          <div className="bg-white p-3 rounded-lg rounded-bl-none shadow">
                              <p className="text-sm text-gray-800">{message}</p>
                          </div>
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
                      <h2 className="text-4xl font-bold text-autonest-dark">Interactúa como prefieras</h2>
                      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Recibe alertas y comunicados a través de tus plataformas de mensajería
  favoritas.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12 lg:gap-16 fade-in-section">
                      <PhoneMockup
                          platform="whatsapp"
                          message="Hola! Detectamos que la presión de tu neumático delantero derecho está baja. Te recomendamos revisarla en la próxima estación de
  servicio."
                          platformColor="#25D366"
                      />
                      <PhoneMockup
                          platform="telegram"
                          message="Recordatorio de servicio: Tu Toyota Corolla necesita su cambio de aceite en los próximos 500km. ¿Quieres que te agendemos una
  cita?"
                          platformColor="#0088cc"
                      />
                  </div>
              </div>
          </section>
      );
  };

  export default Gallery;
