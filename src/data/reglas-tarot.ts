/**
 * @fileoverview Reglas detalladas para la lectura del Tarot
 */

export interface ReglaDetallada {
  titulo: string;
  descripcion: string;
  subsecciones?: Subseccion[];
}

export interface Subseccion {
  titulo?: string;
  contenido: string | string[] | Record<string, string | string[]>;
}

export const reglasDetalladas: ReglaDetallada[] = [
  {
    titulo: "I. Revolver, cortar, echar y examinar",
    descripcion: "Reglas fundamentales para la manipulación de las cartas",
    subsecciones: [
      {
        contenido: [
          "La mente del Consultante debe permanecer concentrada en la materia",
          "Si una carta se cae, se vuelve a coger sin mirar y se sigue barajando",
          "Si al finalizar hay cartas boca arriba, hay que volver a barajar",
          "El corte debe ser nítido y decidido",
          "No invertir las cartas durante la colocación",
          "Mantener estrictamente el orden relativo de las cartas"
        ]
      }
    ]
  },
  {
    titulo: "II. Selección del Significador",
    descripcion: "Criterios para elegir la carta representativa",
    subsecciones: [
      {
        titulo: "Complexión por Palo",
        contenido: {
          "Bastos": "Muy rubio o pelirrojo",
          "Copas": "Moderadamente rubio (blanco)",
          "Espadas": "Moderadamente moreno (apiñonado)",
          "Pantáculos": "Moreno o muy moreno"
        }
      },
      {
        titulo: "Tipo de Carta",
        contenido: {
          "Reyes": "Hombres",
          "Reinas": "Mujeres",
          "Caballeros": "Hombres jóvenes",
          "Sotas": "Mujeres jóvenes"
        }
      }
    ]
  },
  {
    titulo: "III. Significado de Mayorías",
    descripcion: "Interpretación según la predominancia de cartas",
    subsecciones: [
      {
        titulo: "Mayoría por Palo",
        contenido: {
          "Bastos": "Energía, disputa, oposición",
          "Copas": "Placer y regocijo",
          "Espadas": "Dificultades y sufrimientos",
          "Pantáculos": "Negocios, dinero, posesiones",
          "Arcanos Mayores": "Fuerzas de intensidad considerable",
          "Cartas Cortesanas": "Sociedad, relación con muchas personas"
        }
      },
      {
        titulo: "Combinaciones Específicas",
        contenido: {
          "4 Ases": "Gran fuerza y poder",
          "3 Ases": "Riquezas y éxito",
          "4 Reyes": "Gran rapidez y celeridad",
          "3 Reyes": "Encuentros inesperados",
          "4 Reinas": "Autoridad e influencia",
          "3 Reinas": "Amigos poderosos",
          "4 Príncipes": "Encuentros con los grandes",
          "3 Príncipes": "Rango y honor",
          "4 Princesas": "Nuevas ideas y planes",
          "3 Princesas": "Sociedad de los jóvenes"
        }
      }
    ]
  },
  {
    titulo: "VI. Dignificación de las Cartas",
    descripcion: "Interpretación según las cartas vecinas",
    subsecciones: [
      {
        contenido: [
          "Una carta entre dos del mismo palo se fortalece grandemente",
          "Una carta entre dos de elemento contrario se debilita grandemente",
          "Aire y Tierra son contrarios, como Fuego y Agua",
          "Aire es amistoso con Agua y Fuego",
          "Fuego es amistoso con Aire y Tierra"
        ]
      }
    ]
  },
  {
    titulo: "IX. Reglas de Conteo",
    descripcion: "Números para contar en la lectura",
    subsecciones: [
      {
        contenido: {
          "Ases": "5",
          "Princesas (Sotas)": "7",
          "Otras Cartas Cortesanas": "4",
          "Cartas Menores": "Su propio número",
          "Arcanos de Elementos": "3",
          "Arcanos de Signos": "12",
          "Arcanos de Planetas": "9"
        }
      }
    ]
  }
];

export const ejemplosInterpretacion = [
  {
    combinacion: ["9 de Espadas", "10 de Espadas", "5 de Espadas"],
    interpretacion: "De acción fuerte y potente. Muy maligna."
  },
  {
    combinacion: ["10 de Bastos", "10 de Bastos", "2 de Espadas"],
    interpretacion: "No tan fuerte. La Ruina es detenida y quizá superada."
  },
  {
    combinacion: ["6 de Copas", "10 de Espadas", "10 de Copas"],
    interpretacion: "Más buena que mala. Es la liberalidad venciendo a la pérdida."
  }
];