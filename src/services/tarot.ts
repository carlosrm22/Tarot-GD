/**
 * @fileoverview Servicios para el manejo de cartas del Tarot
 */

import { ArcanoMayor, ArcanoMenor, CartaCortesana } from '../types/cartas';
import arcanosMayoresData from '../data/arcanos_mayores.json';
import arcanosMenoresData from '../data/arcanos_menores.json';
import cartasCortesanasData from '../data/cartas_cortesanas.json';

// Función para obtener una carta aleatoria basada en la fecha
export const obtenerCartaDiaria = (): Promise<ArcanoMayor> => {
  return new Promise((resolve) => {
    // Usamos la fecha actual para generar un índice pseudo-aleatorio pero consistente para el día
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const index = dayOfYear % arcanosMayoresData.arcanosMayores.length;

    // Simulamos una llamada asíncrona
    setTimeout(() => {
      resolve(arcanosMayoresData.arcanosMayores[index]);
    }, 1000);
  });
};

// Función para obtener una carta aleatoria de cualquier tipo
export const obtenerCartaAleatoria = (tipo: 'mayor' | 'menor' | 'cortesana'): Promise<ArcanoMayor | ArcanoMenor | CartaCortesana> => {
  return new Promise((resolve) => {
    let carta: ArcanoMayor | ArcanoMenor | CartaCortesana;

    switch (tipo) {
      case 'mayor': {
        const indice = Math.floor(Math.random() * arcanosMayoresData.arcanosMayores.length);
        carta = arcanosMayoresData.arcanosMayores[indice];
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
    }

    setTimeout(() => {
      resolve(carta!);
    }, 1000);
  });
};