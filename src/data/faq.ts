export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: '¿Qué es Gymple y para quién es?',
    answer: 'Gymple es un software SaaS todo en uno para gimnasios, centros de entrenamiento, boxes de CrossFit, estudios de pilates y clubes deportivos. Te permite gestionar clientes, cobrar cuotas, enviar recordatorios por WhatsApp y llevar las finanzas de tu negocio, todo desde la nube.',
  },
  {
    question: '¿Cómo funcionan los recordatorios de WhatsApp?',
    answer: 'Conectás tu WhatsApp escaneando un código QR. El sistema detecta automáticamente los vencimientos y envía mensajes 3 días antes y el día del vencimiento.',
  },
  {
    question: '¿Cuánto cuesta un software para gimnasios?',
    answer: 'Gymple ofrece 14 días de prueba gratis. Luego, si el uso realmente te beneficia en el control de tu gimnasio, el precio es mensual.',
  },
  {
    question: '¿Puedo importar mis datos actuales de Excel?',
    answer: 'Sí, ofrecemos importación de datos desde Excel o CSV. Nuestro equipo te ayuda a migrar tu base de clientes, planes y cuotas sin perder información.',
  },
  {
    question: '¿Qué funciones tiene un software de gestión para gimnasios?',
    answer: 'Gymple incluye control de clientes, gestión de membresías, registro de asistencia, recordatorios automáticos por WhatsApp, control de gastos e ingresos, estadísticas con filtrado por período, gestión de rutinas y ejercicios digitales.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Tu gimnasio tiene su propio entorno aislado (multi-tenant) con URL personalizada. Usamos encriptación de datos, backups automáticos y servidores seguros. Tus datos nunca se mezclan con otros gimnasios.',
  },
  {
    question: '¿Cómo empiezo a usar Gymple?',
    answer: 'Comunicate vía WhatsApp o email, se pedirán datos básicos del gimnasio y de la persona que lo administra para poder configurar el sistema y se podrá empezar a usar el sistema el mismo día.',
  },
];
