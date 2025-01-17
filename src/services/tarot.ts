/**
 * @fileoverview Servicios para el manejo de cartas del Tarot
 */

import { ArcanoMayor, ArcanoMenor, CartaCortesana } from '../types/tarot';

// Función para obtener una carta aleatoria basada en la fecha
export const obtenerCartaDiaria = async (): Promise<ArcanoMayor> => {
  // Usamos la fecha actual para generar un índice consistente para el día
  const fecha = new Date();
  const indice = (fecha.getFullYear() + fecha.getMonth() + fecha.getDate()) % 22;

  try {
    const response = await fetch('/data/arcanos_mayores.json');
    const data = await response.json();
    return data.arcanos.arcanos_mayores[indice];
  } catch (error) {
    console.error('Error al cargar los arcanos mayores:', error);
    throw new Error('No se pudo obtener la carta del día');
  }
};

// Función para obtener una carta aleatoria de cualquier tipo
export const obtenerCartaAleatoria = async (tipo: 'mayor' | 'menor' | 'cortesana'): Promise<ArcanoMayor | ArcanoMenor | CartaCortesana> => {
  try {
    switch (tipo) {
      case 'mayor': {
        const response = await fetch('/data/arcanos_mayores.json');
        const data = await response.json();
        const indice = Math.floor(Math.random() * data.arcanos.arcanos_mayores.length);
        return data.arcanos.arcanos_mayores[indice];
      }
      case 'menor': {
        const response = await fetch('/data/arcanos-menores.json');
        const data = await response.json();
        const indice = Math.floor(Math.random() * data.arcanos_menores.length);
        return data.arcanos_menores[indice];
      }
      case 'cortesana': {
        const response = await fetch('/data/cartas_cortesanas.json');
        const data = await response.json();
        const indice = Math.floor(Math.random() * data.cartas_cortesanas.length);
        return data.cartas_cortesanas[indice];
      }
    }
  } catch (error) {
    console.error('Error al cargar la carta:', error);
    throw new Error(`No se pudo obtener una carta ${tipo}`);
  }
};