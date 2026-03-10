export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "¿Qué es Gymple y para quién es?",
    answer:
      "Gymple es un software SaaS todo en uno para gimnasios, centros de entrenamiento, boxes de CrossFit, estudios de pilates y clubes deportivos. Te permite gestionar socios, cobrar cuotas, enviar recordatorios por WhatsApp y llevar las finanzas de tu negocio, todo desde la nube.",
  },
  {
    question: "¿Cómo funcionan los recordatorios de WhatsApp?",
    answer:
      "Conectás tu WhatsApp escaneando un código QR. El sistema detecta automáticamente los vencimientos y envía mensajes 3 días antes y el día del vencimiento. Usamos tecnología anti-ban con envíos humanizados y pausas inteligentes.",
  },
  {
    question: "¿Cuánto cuesta un software para gimnasios?",
    answer:
      "Gymple ofrece 14 días de prueba gratis sin tarjeta de crédito. Luego, los planes se adaptan al tamaño de tu gimnasio. Contactanos para conocer las opciones disponibles para tu negocio.",
  },
  {
    question: "¿Puedo importar mis datos actuales de Excel?",
    answer:
      "Sí, ofrecemos importación de datos desde Excel o CSV. Nuestro equipo te ayuda a migrar tu base de socios, planes y cuotas sin perder información.",
  },
  {
    question: "¿Qué funciones tiene un software de gestión para gimnasios?",
    answer:
      "Gymple incluye control de socios, gestión de membresías, registro de asistencia, recordatorios automáticos por WhatsApp, control de gastos e ingresos, estadísticas con filtrado por período, gestión de rutinas y ejercicios digitales, y control de accesos con torniquetes.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Tu gimnasio tiene su propio entorno aislado (multi-tenant) con URL personalizada. Usamos encriptación de datos, backups automáticos y servidores seguros. Tus datos nunca se mezclan con otros gimnasios.",
  },
  {
    question: "¿Cómo migrar datos de Excel a un sistema de gestión?",
    answer:
      "El proceso es simple: exportás tus datos de Excel como CSV, los subís a Gymple y nuestro equipo te asiste en la migración. En menos de un día tenés tu gimnasio funcionando con datos históricos incluidos.",
  },
  {
    question: "¿Cómo empiezo a usar Gymple?",
    answer:
      "Registrate gratis y tenés 14 días para probar todas las funciones sin cargo y sin tarjeta de crédito. Nuestro equipo te ayuda a configurar tu gimnasio y empezar a usar el sistema el mismo día.",
  },
];
