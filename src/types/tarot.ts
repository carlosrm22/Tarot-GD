/**
 * @fileoverview Definiciones de tipos para el sistema de Tarot y sus correspondencias esotéricas.
 * Incluye interfaces para las cartas individuales y la colección completa de Arcanos Mayores.
 */

/**
 * Representa una carta individual del Tarot con todas sus correspondencias esotéricas.
 *
 * @interface Carta
 * @property {number} numero - Número de la carta (0-21)
 * @property {string} nombre - Nombre tradicional de la carta (ej: "El Loco", "El Mago")
 * @property {string} titulo - Título místico o esotérico de la carta
 * @property {string} hebreo - Letra hebrea asociada con la carta
 * @property {string} letra - Transliteración de la letra hebrea
 * @property {string} signo - Signo astrológico o elemento asociado
 * @property {string} atribucion - Atribución mágica o esotérica
 * @property {string} sendero - Número del sendero en el Árbol de la Vida (11-32)
 * @property {string} significado - Interpretación esotérica detallada
 */
export interface Carta {
  numero: number;
  nombre: string;
  titulo: string;
  hebreo: string;
  letra: string;
  signo: string;
  atribucion: string;
  sendero: string;
  significado: string;
}

/**
 * Estructura que contiene la colección completa de Arcanos Mayores.
 *
 * @interface ArcanosMayores
 * @property {Object} arcanos - Contenedor de los arcanos
 * @property {Carta[]} arcanos.arcanos_mayores - Array de las 22 cartas de los Arcanos Mayores
 */
export interface ArcanosMayores {
  arcanos: {
    arcanos_mayores: Carta[];
  };
}

/**
 * Tipo que representa el estado de las cartas volteadas.
 * Mapea el número de la carta a un booleano que indica si está volteada.
 *
 * @typedef {Object.<number, boolean>} CartasVolteadasState
 */
export type CartasVolteadasState = {
  [key: number]: boolean;
};

/**
 * Tipo que representa el estado de los detalles expandidos.
 * Mapea el ID único de un detalle a un booleano que indica si está expandido.
 * El ID se forma combinando el número de la carta y el tipo de detalle.
 *
 * @typedef {Object.<string, boolean>} DetallesExpandidosState
 * @example
 * // Para la carta 1, detalle "significado"
 * { "1-significado": true }
 */
export type DetallesExpandidosState = {
  [key: string]: boolean;
};