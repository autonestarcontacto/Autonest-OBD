
import React, { useState } from 'react';
import { UserType, CommunicationChannel, Language, FormData } from '../types';
import { CAR_BRANDS } from '../constants';

interface RegistrationModalProps {
    onClose: () => void;
}

const INDIVIDUAL_WEBHOOK = 'https://ingenierian8n-n8n.v9vzx7.easypanel.host/webhook/Registro_usuarios';
const COMPANY_WEBHOOK = 'https://ingenierian8n-n8n.v9vzx7.easypanel.host/webhook/Registro_flota';

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input {...props} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-autonest-blue focus:border-autonest-blue sm:text-sm" />
    </div>
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label: string, children: React.ReactNode }> = ({ label, children, ...props }) => (
     <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select {...props} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-autonest-blue focus:border-autonest-blue sm:text-sm rounded-md">
            {children}
        </select>
    </div>
);


const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        userType: UserType.INDIVIDUAL,
        firstName: '', lastName: '', email: '', phone: '',
        communicationChannel: CommunicationChannel.WHATSAPP,
        language: Language.SPANISH,
        vehicleBrand: CAR_BRANDS[0], vehicleModel: '', vehicleYear: '', vehiclePlate: '', currentMileage: '', lastServiceMileage: '', lastServiceDate: '',
        workshopName: '', workshopPhone: '', mechanicName: '', mechanicPhone: '', workshopEmail: '',
        insuranceCompany: '', policyNumber: '', brokerName: '', brokerPhone: '', insurancePhone: '', insuranceEmail: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        // Simple validation for step 1
        if (formData.firstName && formData.lastName && formData.email && formData.phone) {
            setStep(2);
        } else {
            alert('Por favor completa todos los campos requeridos en el Paso 1.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        const webhookUrl = formData.userType === UserType.INDIVIDUAL ? INDIVIDUAL_WEBHOOK : COMPANY_WEBHOOK;

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Hubo un problema con el registro. Inténtalo de nuevo.');
            }

            setIsSubmitted(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-gray-50 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                 <div className="p-6 border-b sticky top-0 bg-gray-50 z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-autonest-dark">Registro en Autonest</h2>
                        <button onClick={onClose} disabled={isLoading} className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                 </div>
                 
                 <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-autonest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="text-2xl font-bold mt-4 text-autonest-dark">¡Registro enviado!</h3>
                            <p className="mt-2 text-gray-600">Revisa tu casillero de correo electrónico para continuar con la vinculación.</p>
                            <button onClick={onClose} className="mt-8 bg-autonest-blue text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition-colors">Cerrar</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {error && <p className="text-red-500 bg-red-100 p-3 rounded-md mb-4">{error}</p>}
                            {step === 1 && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Paso 1: Tus Datos</h3>
                                    <SelectField label="Tipo de usuario" name="userType" value={formData.userType} onChange={handleChange}>
                                        <option value={UserType.INDIVIDUAL}>Usuario Individual</option>
                                        <option value={UserType.COMPANY}>Empresa / Flota</option>
                                    </SelectField>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InputField label="Nombre" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                        <InputField label="Apellido" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                    <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                    <InputField label="Teléfono" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <SelectField label="Canal de comunicación" name="communicationChannel" value={formData.communicationChannel} onChange={handleChange}>
                                            <option value={CommunicationChannel.WHATSAPP}>WhatsApp</option>
                                            <option value={CommunicationChannel.TELEGRAM}>Telegram</option>
                                            <option value={CommunicationChannel.EMAIL}>Correo Electrónico</option>
                                        </SelectField>
                                        <SelectField label="Idioma" name="language" value={formData.language} onChange={handleChange}>
                                            <option value={Language.SPANISH}>Español (Latinoamérica)</option>
                                            <option value={Language.PORTUGUESE}>Portugués (Brasil)</option>
                                            <option value={Language.ENGLISH}>Inglés (Americano)</option>
                                        </SelectField>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <button type="button" onClick={handleNext} className="bg-autonest-blue text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition-colors">Siguiente</button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Paso 2: Datos del Vehículo</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <SelectField label="Marca" name="vehicleBrand" value={formData.vehicleBrand} onChange={handleChange}>
                                                {CAR_BRANDS.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                                            </SelectField>
                                            <InputField label="Modelo" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
                                            <InputField label="Año" name="vehicleYear" type="number" min="1900" max={new Date().getFullYear() + 1} value={formData.vehicleYear} onChange={handleChange} required />
                                            <InputField label="Placa / Chapa" name="vehiclePlate" value={formData.vehiclePlate} onChange={handleChange} required />
                                            <InputField label="Kilometraje actual" name="currentMileage" type="number" min="0" value={formData.currentMileage} onChange={handleChange} required />
                                            <InputField label="Kilometraje del último service" name="lastServiceMileage" type="number" min="0" value={formData.lastServiceMileage} onChange={handleChange} />
                                            <InputField label="Fecha último service" name="lastServiceDate" type="date" value={formData.lastServiceDate} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Datos del Taller (Opcional)</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                           <InputField label="Nombre del taller" name="workshopName" value={formData.workshopName} onChange={handleChange} />
                                           <InputField label="Teléfono del taller" name="workshopPhone" value={formData.workshopPhone} onChange={handleChange} />
                                           <InputField label="Nombre mecánico" name="mechanicName" value={formData.mechanicName} onChange={handleChange} />
                                           <InputField label="Teléfono mecánico" name="mechanicPhone" value={formData.mechanicPhone} onChange={handleChange} />
                                           <InputField label="Correo taller" name="workshopEmail" type="email" value={formData.workshopEmail} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Datos del Seguro (Opcional)</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InputField label="Compañía de seguros" name="insuranceCompany" value={formData.insuranceCompany} onChange={handleChange} />
                                            <InputField label="Número de póliza" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
                                            <InputField label="Nombre corredor de seguros" name="brokerName" value={formData.brokerName} onChange={handleChange} />
                                            <InputField label="Teléfono del corredor" name="brokerPhone" value={formData.brokerPhone} onChange={handleChange} />
                                            <InputField label="Teléfono aseguradora" name="insurancePhone" value={formData.insurancePhone} onChange={handleChange} />
                                            <InputField label="Correo aseguradora" name="insuranceEmail" type="email" value={formData.insuranceEmail} onChange={handleChange} />
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pt-4">
                                        <button type="button" onClick={() => setStep(1)} className="text-gray-600 hover:text-black font-medium">Volver</button>
                                        <button type="submit" disabled={isLoading} className="bg-autonest-orange text-white font-bold py-2 px-6 rounded-full hover:bg-orange-500 transition-colors disabled:bg-gray-400">
                                            {isLoading ? 'Enviando...' : 'Enviar Registro'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                 </div>
            </div>
        </div>
    );
};

export default RegistrationModal;