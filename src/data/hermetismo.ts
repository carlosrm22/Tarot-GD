export interface PrincipioHermetico {
  id: number;
  titulo: string;
  descripcion: string;
  explicacion: string[];
  simbolo: string;
  aplicaciones: string[];
}

export const principiosHermeticos: PrincipioHermetico[] = [
  {
    id: 1,
    titulo: "Mentalismo",
    descripcion: "El Todo es Mente; el Universo es Mental.",
    explicacion: [
      "Todo lo que existe en el universo es una manifestación del pensamiento divino.",
      "La realidad que percibimos es una proyección mental del Todo.",
      "Nuestros pensamientos crean nuestra realidad individual.",
      "La mente es la fuente de toda creación y transformación."
    ],
    simbolo: "🧠",
    aplicaciones: [
      "Meditación y visualización creativa",
      "Programación mental positiva",
      "Manifestación consciente",
      "Trabajo con arquetipos y símbolos"
    ]
  },
  {
    id: 2,
    titulo: "Correspondencia",
    descripcion: "Como es arriba, es abajo; como es abajo, es arriba.",
    explicacion: [
      "Existe una correspondencia entre todos los planos de existencia.",
      "Las leyes universales se reflejan en todos los niveles de la realidad.",
      "Lo microcósmico refleja lo macrocósmico.",
      "Cada nivel de existencia contiene la información del todo."
    ],
    simbolo: "⚖️",
    aplicaciones: [
      "Astrología y simbolismo",
      "Comprensión de patrones universales",
      "Interpretación de símbolos sagrados",
      "Estudio de las analogías naturales"
    ]
  },
  {
    id: 3,
    titulo: "Vibración",
    descripcion: "Nada está inmóvil; todo se mueve; todo vibra.",
    explicacion: [
      "Toda manifestación de la materia, energía y espíritu está en constante vibración.",
      "Las diferentes frecuencias determinan los estados de la materia.",
      "Podemos cambiar nuestro estado alterando nuestra vibración.",
      "La vibración es la base de toda manifestación."
    ],
    simbolo: "〰️",
    aplicaciones: [
      "Trabajo con energías sutiles",
      "Sanación vibracional",
      "Alquimia personal",
      "Manipulación consciente de frecuencias"
    ]
  },
  {
    id: 4,
    titulo: "Polaridad",
    descripcion: "Todo es doble; todo tiene dos polos; todo tiene su par de opuestos.",
    explicacion: [
      "Los opuestos son idénticos en naturaleza, pero diferentes en grado.",
      "Los extremos se encuentran y reconcilian en el centro.",
      "Toda verdad es medio verdad.",
      "Todos los paradojas pueden ser reconciliadas."
    ],
    simbolo: "☯️",
    aplicaciones: [
      "Transmutación mental",
      "Balance y armonización",
      "Resolución de conflictos",
      "Comprensión de dualidades"
    ]
  },
  {
    id: 5,
    titulo: "Ritmo",
    descripcion: "Todo fluye y refluye; todo tiene sus períodos.",
    explicacion: [
      "Todo se manifiesta en ciclos y períodos.",
      "A cada acción corresponde una reacción.",
      "El péndulo se mueve en ambas direcciones.",
      "La ley del ritmo puede ser trascendida mediante la consciencia."
    ],
    simbolo: "🌊",
    aplicaciones: [
      "Comprensión de ciclos naturales",
      "Planificación según ritmos cósmicos",
      "Neutralización de extremos negativos",
      "Aprovechamiento de ciclos favorables"
    ]
  },
  {
    id: 6,
    titulo: "Causa y Efecto",
    descripcion: "Toda causa tiene su efecto; todo efecto tiene su causa.",
    explicacion: [
      "No hay casualidad, todo sucede según la ley.",
      "Hay múltiples planos de causalidad.",
      "Podemos cambiar los efectos cambiando las causas.",
      "La comprensión de esta ley nos permite ser maestros en lugar de víctimas."
    ],
    simbolo: "⚡",
    aplicaciones: [
      "Karma y responsabilidad personal",
      "Creación consciente de causas",
      "Comprensión de consecuencias",
      "Modificación de patrones causales"
    ]
  },
  {
    id: 7,
    titulo: "Género",
    descripcion: "El género está en todo; todo tiene sus principios masculino y femenino.",
    explicacion: [
      "El género se manifiesta en todos los planos.",
      "Todo contiene ambos aspectos en diferentes grados.",
      "La creación requiere la unión de ambos principios.",
      "El balance de género interno lleva a la completitud."
    ],
    simbolo: "⚤",
    aplicaciones: [
      "Balance de energías internas",
      "Comprensión de polaridades creativas",
      "Trabajo con energías complementarias",
      "Alquimia espiritual"
    ]
  }
];

export interface TextoHermetico {
  id: string;
  titulo: string;
  autor?: string;
  fecha?: string;
  descripcion: string;
  contenido: string[];
  temas: string[];
}

export const textosHermeticos: TextoHermetico[] = [
  {
    id: "corpus-hermeticum",
    titulo: "Corpus Hermeticum",
    autor: "Hermes Trismegisto",
    fecha: "Siglos II-III d.C.",
    descripcion: "Colección de textos místico-filosóficos que forman la base del hermetismo.",
    contenido: [
      "Tratados sobre la naturaleza divina",
      "Enseñanzas sobre la creación del universo",
      "Instrucciones para la elevación espiritual",
      "Diálogos entre Hermes y sus discípulos"
    ],
    temas: [
      "Cosmología",
      "Teología",
      "Alquimia espiritual",
      "Iniciación"
    ]
  },
  {
    id: "tabla-esmeralda",
    titulo: "Tabla Esmeralda",
    autor: "Atribuido a Hermes Trismegisto",
    descripcion: "Texto fundamental de la tradición hermética y alquímica.",
    contenido: [
      "Principios de la correspondencia universal",
      "Fórmulas alquímicas en lenguaje simbólico",
      "Claves para la transmutación espiritual",
      "Sabiduría condensada en aforismos"
    ],
    temas: [
      "Alquimia",
      "Transmutación",
      "Sabiduría universal",
      "Correspondencias"
    ]
  }
];

export interface ConceptoAlquimico {
  id: string;
  nombre: string;
  descripcion: string;
  simbolo: string;
  significado: string[];
  aplicaciones: string[];
}

export const conceptosAlquimicos: ConceptoAlquimico[] = [
  {
    id: "solve",
    nombre: "Solve et Coagula",
    descripcion: "Disolver y Coagular - El principio fundamental de la transformación alquímica",
    simbolo: "♦️",
    significado: [
      "Proceso de descomposición y recomposición",
      "Purificación a través de la disolución",
      "Reintegración en un nivel superior",
      "Ciclo de muerte y renacimiento"
    ],
    aplicaciones: [
      "Transformación personal",
      "Purificación espiritual",
      "Trabajo con sombras",
      "Integración de opuestos"
    ]
  }
  // ... más conceptos
];