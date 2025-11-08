
export enum UserType {
    INDIVIDUAL = 'usuario individual',
    COMPANY = 'empresa-flota'
}

export enum CommunicationChannel {
    TELEGRAM = 'telegram',
    WHATSAPP = 'whatsapp',
    EMAIL = 'correo electronico'
}

export enum Language {
    SPANISH = 'Español (Latinoamérica)',
    PORTUGUESE = 'Portugués (Brasil)',
    ENGLISH = 'Inglés (Americano)'
}

export interface FormData {
    userType: UserType;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    communicationChannel: CommunicationChannel;
    language: Language;
    vehicleBrand: string;
    vehicleModel: string;
    vehicleYear: string;
    vehiclePlate: string;
    currentMileage: string;
    lastServiceMileage: string;
    lastServiceDate: string;
    workshopName: string;
    workshopPhone: string;
    mechanicName: string;
    mechanicPhone: string;
    workshopEmail: string;
    insuranceCompany: string;
    policyNumber: string;
    brokerName: string;
    brokerPhone: string;
    insurancePhone: string;
    insuranceEmail: string;
}