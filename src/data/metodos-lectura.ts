/**
 * @fileoverview Métodos y reglas para la lectura del Tarot.
 */

export interface MetodoLectura {
  nombre: string;
  descripcion: string;
  preparacion?: string[];
  pasos: Paso[];
  reglas: Regla[];
}

export interface Paso {
  nombre: string;
  descripcion: string;
  instrucciones: string[];
  significado?: string;
}

export interface Regla {
  tipo: string;
  descripcion: string;
  aplicacion: string[];
}

export const aperturaLlave: MetodoLectura = {
  nombre: "La Apertura de la Llave",
  descripcion: "Este método de adivinación es especialmente aplicable a cuestiones relativas a los sucesos de la vida material diaria. Se basa en el esquema del dominio de los Símbolos del Tarot.",
  preparacion: [
    "El adivino debe tener una mente clara y libre de prejuicios",
    "Debe estar a salvo de la ira, del miedo o del amor",
    "Debe tener conocimiento suficiente de las correspondencias de los símbolos",
    "Debe estar preparado para usar sus facultades de intuición y clarividencia"
  ],
  pasos: [
    {
      nombre: "Primera Operación",
      descripcion: "Representa la Apertura de la Cuestión",
      instrucciones: [
        "El consultante baraja las cartas concentrándose en la materia",
        "Se corta el mazo en cuatro montones representando YHVH",
        "Se identifica el montón que contiene el Significador",
        "Se extienden las cartas en forma de herradura",
        "Se lee contando desde el Significador en la dirección que mira"
      ],
      significado: "Muestra la situación actual y la apertura de la materia"
    },
    {
      nombre: "Segunda Operación",
      descripcion: "Representa el desarrollo de la Materia",
      instrucciones: [
        "Se reparten 12 montones en círculo",
        "Corresponden a las 12 Casas Astrológicas",
        "Se identifica el montón con el Significador",
        "Se lee en forma de herradura"
      ]
    }
  ],
  reglas: [
    {
      tipo: "Significador",
      descripcion: "Elección de la carta representativa del consultante",
      aplicacion: [
        "BASTOS - personas muy rubias o pelirrojas",
        "COPAS - personas moderadamente rubias",
        "ESPADAS - personas morenas",
        "PENTÁCULOS - personas muy oscuras"
      ]
    },
    {
      tipo: "Lectura",
      descripcion: "Interpretación de las cartas cortesanas",
      aplicacion: [
        "Reinas y Caballeros - personas conectadas con la materia",
        "Reyes mirando contra la dirección - llegada de persona o suceso",
        "Reyes mirando a favor - partida o terminación",
        "Sotas mirando a favor - opinión general armoniosa",
        "Sotas mirando contra - opinión general contraria"
      ]
    }
  ]
};

export const reglasGenerales = {
  barajado: [
    "Concentrarse intensamente en la materia",
    "Si hay corte falso, barajar de nuevo",
    "Para asuntos importantes, esperar 12 horas antes de nuevo barajado"
  ],
  posicion: [
    "No alterar cartas invertidas",
    "El significado es el mismo en ambas posiciones",
    "La dirección de la mirada es importante para la lectura"
  ],
  conteo: {
    As: 5,
    Sota: 7,
    Rey: 4,
    Reina: 4,
    Caballero: 4,
    "Arcanos Madres": 3,
    "Arcanos Dobles": 9,
    "Arcanos Simples": 12
  }
};