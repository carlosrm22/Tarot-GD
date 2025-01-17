/**
 * @fileoverview Servicios para el manejo de cartas del Tarot
 */

import cartasCortesanasData from '../data/cartas_cortesanas.json';
import arcanosMenoresData from '../data/arcanos_menores.json';
import arcanosMayoresData from '../data/arcanos_mayores.json';
import { Carta } from '../types/cartas';

const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const obtenerCartaDiaria = (): Promise<Carta> => {
  return new Promise((resolve) => {
    const dayOfYear = getDayOfYear(new Date());
    const index = dayOfYear % arcanosMayoresData.arcanos_mayores.length;
    resolve(arcanosMayoresData.arcanos_mayores[index]);
  });
};

export const obtenerCartaAleatoria = (tipo?: 'mayor' | 'menor' | 'cortesana'): Promise<Carta> => {
  return new Promise((resolve) => {
    let carta: Carta;

    switch (tipo) {
      case 'mayor': {
        const indice = Math.floor(Math.random() * arcanosMayoresData.arcanos_mayores.length);
        carta = arcanosMayoresData.arcanos_mayores[indice];
        break;
      }
      case 'menor': {
        const indice = Math.floor(Math.random() * arcanosMenoresData.arcanosMenores.length);
        carta = arcanosMenoresData.arcanosMenores[indice];
        break;
      }
      case 'cortesana': {
        const indice = Math.floor(Math.random() * cartasCortesanasData.cartasCortesanas.length);
        carta = cartasCortesanasData.cartasCortesanas[indice];
        break;
      }
      default: {
        const todasLasCartas = [
          ...arcanosMayoresData.arcanos_mayores,
          ...arcanosMenoresData.arcanosMenores,
          ...cartasCortesanasData.cartasCortesanas
        ];
        const indice = Math.floor(Math.random() * todasLasCartas.length);
        carta = todasLasCartas[indice];
      }
    }

    resolve(carta);
  });
};