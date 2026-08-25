// PSEO vertical data for the Gymple content hub.
//
// The data model describes EVERY gym type × city combination we may want to
// target later (7 types × 6 cities). We only GENERATE the 6 high-priority
// combinations (crossfit & funcional × CABA, Córdoba, Rosario) from
// `highPriorityCombinations`. To expand later you add entries to that array
// (or loop over all combinations) — the copy and the route are already ready.

export interface GymType {
  key: string;
  slug: string;
  label: string;
  audience: string;
  /** Type-specific opening line used on every city page of this type. */
  lead: string;
  benefits: string[];
  heroImage: string;
  faq: { question: string; answer: string }[];
}

export interface City {
  key: string;
  slug: string;
  label: string;
  /** Real, city-specific local context paragraph. */
  localContext: string;
  /** Payment / tax reality specific to the city/region. */
  paymentNote: string;
}

export interface VerticalPage {
  typeKey: string;
  cityKey: string;
  typeLabel: string;
  cityLabel: string;
  heroImage: string;
  title: string;
  description: string;
  h1: string;
  /** Unique per-combo hook (overrides the generic type lead when present). */
  hook: string;
  lead: string;
  benefits: string[];
  localContext: string;
  paymentNote: string;
  faq: { question: string; answer: string }[];
}

export const gymTypes: Record<string, GymType> = {
  crossfit: {
    key: "crossfit",
    slug: "crossfit",
    label: "CrossFit",
    audience: "boxes de CrossFit",
    lead:
      "El CrossFit se cobra por membresía pero se retiene por comunidad: cada clase importa y cada socio que se pierde por un cobro desprolijo es un WOD vacío.",
    benefits: [
      "Control de asistencia por clase (WOD) y por plan, para saber qué días y qué horarios llenan el box.",
      "Cobranza automática de cuotas mensuales y de clases sueltas o pases drop-in para atletas de paso.",
      "Recordatorios por WhatsApp 3 días antes y el día del vencimiento, en el tono de tu comunidad.",
      "Seguimiento de objetivos y marcas personales para que el socio vea su progreso y no quiera irse.",
    ],
    heroImage: "/gimnasio.webp",
    faq: [
      {
        question: "¿Sirve para boxes pequeños de CrossFit?",
        answer:
          "Sí. Gymple escala del box de barrio al box con varias sedes: maneja planes únicos, clases sueltas y drop-ins sin tener que armar planillas distintas para cada cosa.",
      },
      {
        question: "¿Puedo cobrar clases sueltas y no solo mensualidad?",
        answer:
          "Sí. Además de la membresía mensual podés vender pases sueltos y pases drop-in, y el sistema registra el cobro y la asistencia en el momento.",
      },
    ],
  },
  funcional: {
    key: "funcional",
    slug: "funcional",
    label: "Entrenamiento Funcional",
    audience: "estudios de entrenamiento funcional",
    lead:
      "El entrenamiento funcional vive de la constancia: el socio que falta dos semanas por un cobro mal hecho es el socio que no vuelve.",
    benefits: [
      "Gestión de turnos y cupos por clase para que el salón no colapse en el horario pico.",
      "Planes por objetivo (bajar de peso, tonificar, rendimiento) con cobro recurrente puntual.",
      "Recordatorios automáticos por WhatsApp que reducen la morosidad sin que suenes insistente.",
      "Reportes de asistencia y evolución que usás para renovar el plan justo cuando el cliente está motivado.",
    ],
    heroImage: "/hero2.webp",
    faq: [
      {
        question: "¿Me sirve si doy clases grupales y personalizadas?",
        answer:
          "Sí. Gymple separa la gestión de clases grupales de los planes personalizados, pero cobra y controla asistencia de ambos desde el mismo lugar.",
      },
      {
        question: "¿Puedo ofrecer planes anuales con descuento?",
        answer:
          "Sí. Podés crear planes mensuales, trimestrales y anuales con su propio precio y Gymple cobra según la periodicidad que definas.",
      },
    ],
  },
  pilates: {
    key: "pilates",
    slug: "pilates",
    label: "Pilates",
    audience: "estudios de pilates",
    lead:
      "En pilates la relación es cercana y los turnos son acotados: un socio mal cobrado ocupa un lugar que podría ser de otro.",
    benefits: [
      "Agenda de turnos con cupos por máquina o colchoneta.",
      "Cobro de abonos mensuales y de clases sueltas sin mezclar planillas.",
      "Recordatorios de turno por WhatsApp que bajan la tasa de ausencia.",
    ],
    heroImage: "/pilates.webp",
    faq: [],
  },
  yoga: {
    key: "yoga",
    slug: "yoga",
    label: "Yoga",
    audience: "estudios de yoga",
    lead:
      "El yoga se sostiene en la rutina: quien paga mal un abono se saltea la semana y rompe el hábito.",
    benefits: [
      "Abonos mensuales e ilimitados con cobro recurrente.",
      "Turnos por nivel y recordatorios por WhatsApp.",
      "Seguimiento de asistencia para cuidar la retención.",
    ],
    heroImage: "/hero1.webp",
    faq: [],
  },
  boxeo: {
    key: "boxeo",
    slug: "boxeo",
    label: "Boxeo",
    audience: "boxes de boxeo",
    lead:
      "El boxeo suma alumnos por boca a boca y los pierde por desorganización: ordenar la cobranza es ordenar el gimnasio.",
    benefits: [
      "Planes para adultos, kids y preparación física.",
      "Cobro de cuotas y clases sueltas desde un solo lugar.",
      "Recordatorios que evitan que el alumno se desarme la rutina.",
    ],
    heroImage: "/gimnasio.webp",
    faq: [],
  },
  spinning: {
    key: "spinning",
    slug: "spinning",
    label: "Spinning / Ciclismo Indoor",
    audience: "estudios de spinning",
    lead:
      "El spinning vive del ritmo de los turnos: llenar la bici vacía empieza por cobrar bien la que ya está ocupada.",
    benefits: [
      "Reserva de bicis por turno con cupos fijos.",
      "Planes mensuales e ilimitados con cobro automático.",
      "Recordatorios de turno por WhatsApp.",
    ],
    heroImage: "/hero2.webp",
    faq: [],
  },
  calisthenics: {
    key: "calisthenics",
    slug: "calisthenics",
    label: "Calistenia",
    audience: "parques y estudios de calistenia",
    lead:
      "La calistenia crece por comunidad y por redes: un cobro prolijo es lo que separa al hobby del negocio.",
    benefits: [
      "Membresías y pases a clases al aire libre o en sala.",
      "Cobro recurrente y recordatorios por WhatsApp.",
      "Seguimiento de progreso de las rutinas.",
    ],
    heroImage: "/gimnasio.webp",
    faq: [],
  },
};

export const cities: Record<string, City> = {
  CABA: {
    key: "CABA",
    slug: "caba",
    label: "CABA",
    localContext:
      "En CABA la competencia por metro cuadrado es brutal: en Palermo, Caballito o Villa Crespo un box compite con otros cinco a la vuelta. El socio paga en pesos pero compara precios en dólares en su cabeza, así que cualquier roce en la cobranza lo hace mirar la puerta de al lado. La escena es densa y el boca a boca define la ocupación de los horarios pico (7-9 y 18-21).",
    paymentNote:
      "En CABA el estándar es cobrar por transferencia: CVU/CBU y MercadoPago dominan, y el efectivo ya es minoría. Con el monotributo y la AFIP encima, cada cuota mal registrada es plata que no entró y un comprobante que falta.",
  },
  Cordoba: {
    key: "Cordoba",
    slug: "cordoba",
    label: "Córdoba",
    localContext:
      "Córdoba tiene una de las comunidades de entrenamiento más grandes y fieles del país. En Nueva Córdoba y Cerro de las Rosas los estudios viven del flujo universitario y de oficina, y el alumno valora la relación precio-calidad por encima del lujo. El costo operativo es menor que en CABA, pero el cliente es exigente y se capea poco el desorden.",
    paymentNote:
      "En Córdoba el cliente paga por transferencia y, en estudios más grandes, ya espera factura o comprobante. Llevar la contabilidad ordenada desde el día uno evita dolores de cabeza con la AFIP cuando el box crece.",
  },
  Rosario: {
    key: "Rosario",
    slug: "rosario",
    label: "Rosario",
    localContext:
      "Rosario mezcla cultura de club de barrio con una escena funcional y de CrossFit muy activa, sobre todo en Pichincha y Alberdi. El costo operativo sigue por debajo de CABA y la gente valora la cercanía y el trato personal: el profesor que se sabe el nombre del alumno retiene más que el que tiene la app más linda.",
    paymentNote:
      "En Rosario se cobra fuerte por transferencia y se retiene con planes anuales con descuento. El bolsillo cuenta, así que mostrar el ahorro del plan anual en el momento de renovar es clave para no perder socios.",
  },
  Mendoza: {
    key: "Mendoza",
    slug: "mendoza",
    label: "Mendoza",
    localContext:
      "Mendoza combina una comunidad local muy estable con un flujo de turismo y estudiantes que varía con la temporada. Los estudios cerca del centro y de los barrios residenciales viven del abono mensual y de la recomendación entre conocidos.",
    paymentNote:
      "En Mendoza el cobro por transferencia y MercadoPago es norma, y la temporada alta (verano, vendimia) es el momento de captar planes anuales antes de que el alumno se desarme la rutina.",
  },
  LaPlata: {
    key: "LaPlata",
    slug: "la-plata",
    label: "La Plata",
    localContext:
      "La Plata es una ciudad de estudiantes y de barrios con identidad propia (Los Hornos, Ringuelet, el centro). El tránsito y los horarios de cursada marcan cuándo la gente va al gimnasio, y el precio tiene que competir con la vida de estudiante.",
    paymentNote:
      "En La Plata se cobra por transferencia y se retiene con planes cuatrimestrales que acompañan el calendario universitario. La facturación ordenada ayuda cuando el estudio crece y pasa de 50 a 200 socios.",
  },
  Lanus: {
    key: "Lanus",
    slug: "lanus",
    label: "Lanús",
    localContext:
      "Lanús, en el conurbano, es tierra de gimnasios de barrio donde el vecino es el socio y la confianza es la marca. El precio es más sensible que en CABA pero la lealtad es alta cuando te conocen.",
    paymentNote:
      "En Lanús el cobro es mixto (efectivo y transferencia) y el plan mensual accesible es el producto estrella. Ordenar quién pagó y quién debe evita el clásico 'lo anoto y después vemos' que termina siendo plata que no entró.",
  },
};

// Only these 6 combinations are generated as static pages in this build.
// To expand: add ["tipo", "Ciudad"] pairs (or iterate every combination).
export const highPriorityCombinations: [string, string][] = [
  ["crossfit", "CABA"],
  ["crossfit", "Cordoba"],
  ["crossfit", "Rosario"],
  ["funcional", "CABA"],
  ["funcional", "Cordoba"],
  ["funcional", "Rosario"],
];

// Unique opening line per high-priority combo, so each page reads distinct
// and is not a find-replace of the generic type lead.
const comboHooks: Record<string, string> = {
  "crossfit|CABA":
    "En CABA los boxes de CrossFit no compiten por equipamiento: compiten por retención, y la retención se cobra puntual.",
  "crossfit|Cordoba":
    "Córdoba es tierra de CrossFit de competencia: cada atleta que se va por un cobro mal hecho es un Open perdido.",
  "crossfit|Rosario":
    "En Rosario el CrossFit creció de la mano de los clubes de barrio, donde la asistencia al WOD es casi sagrada.",
  "funcional|CABA":
    "En CABA el entrenamiento funcional vive del ritmo de la city: quien no cobra el lunes, pierde al cliente del martes.",
  "funcional|Cordoba":
    "En Córdoba el funcional se hizo fuerte en los barrios universitarios, donde el plan mensual tiene que cerrar con el bolsillo del estudiante.",
  "funcional|Rosario":
    "Rosario adoptó el entrenamiento funcional como excusa para salir a la costanera: el plan tiene que acompañar ese hábito.",
};

export function buildVertical(typeKey: string, cityKey: string): VerticalPage {
  const type = gymTypes[typeKey];
  const city = cities[cityKey];
  if (!type || !city) {
    throw new Error(`Vertical no definida: ${typeKey} / ${cityKey}`);
  }

  const hook = comboHooks[`${typeKey}|${cityKey}`] ?? type.lead;
  const typeLabelCity = `${type.label} en ${city.label}`;

  return {
    typeKey,
    cityKey,
    typeLabel: type.label,
    cityLabel: city.label,
    heroImage: type.heroImage,
    title: `Software para ${typeLabelCity} 2026`,
    description: `Software de gestión para ${type.audience} en ${city.label}: cobranza automática, control de asistencia y menos morosidad. Hecho en Argentina, con MercadoPago y pensado para la realidad de la AFIP.`,
    h1: `Software para ${typeLabelCity}`,
    hook,
    lead: type.lead,
    benefits: type.benefits,
    localContext: city.localContext,
    paymentNote: city.paymentNote,
    faq: type.faq,
  };
}
