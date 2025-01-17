/**
 * @fileoverview Definiciones de tipos para el sistema de Tarot y sus correspondencias esotéricas.
 */

export interface CorrespondenciaCabalistica {
  titulo: string;
  descripcion?: string;
  accion: string;
}

export interface CartaBase {
  nombre: string;
  titulo: string;
  descripcion: string;
  significado: string;
  elemento?: string;
  dominio?: string;
}

export interface ArcanoMayor extends CartaBase {
  numero: number;
  hebreo: string;
  letra: string;
  signo: string;
  atribucion: string;
  sendero: string;
  correspondenciaCabalistica?: CorrespondenciaCabalistica;
}

export interface ArcanoMenor extends CartaBase {
  palo: 'bastos' | 'copas' | 'espadas' | 'oros';
  numero: number;
  decanato?: {
    signo: string;
    planeta: string;
    grados: string;
    angeles: string[];
  };
  sefira?: {
    nombre: string;
    titulo: string;
    descripcion: string;
  };
}

export interface CartaCortesana extends CartaBase {
  palo: 'bastos' | 'copas' | 'espadas' | 'oros';
  rango: 'rey' | 'reina' | 'caballero' | 'sota';
  elemento: string;
  regencia: string;
  simbolo: string;
  complexion: string;
  genero: string;
  atributos: {
    dignificado: string[];
    malDignificado: string[];
  };
}

export interface MetodoLectura {
  nombre: string;
  descripcion: string;
  preparacion?: string[];
  pasos: {
    nombre: string;
    descripcion: string;
    instrucciones: string[];
    significado?: string;
  }[];
}

export interface ReglaLectura {
  titulo: string;
  descripcion: string;
  subsecciones?: {
    titulo?: string;
    contenido: string | string[] | Record<string, string | string[]>;
  }[];
}

export interface EjemploInterpretacion {
  combinacion: string[];
  interpretacion: string;
}

export interface CartasData {
  arcanosMayores: ArcanoMayor[];
  arcanosMenores: ArcanoMenor[];
  cartasCortesanas: CartaCortesana[];
}