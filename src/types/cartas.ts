/**
 * @fileoverview Tipos para las cartas del Tarot.
 */

export interface CartaCortesana {
  nombre: string;
  titulo: string;
  atributo?: string;
  descripcion: string;
  elemento: string;
  regencia: string;
  simbolo: string;
  complexion: string;
  genero: string;
}

export interface ArcanoMenor {
  nombre: string;
  titulo?: string;
  descripcion?: string;
  simbolismo?: string;
  atributo?: string;
  dominio?: string;
  significado?: string;
}

export interface ArcanoMayor {
  numero: number;
  nombre: string;
  titulo: string;
  descripcion: string;
  elemento: string;
  planeta: string;
  signo: string;
  sendero: number;
  letra: string;
  valor: number;
  significado: {
    general: string;
    amor: string;
    trabajo: string;
    salud: string;
    invertida: string;
  };
}

export interface CartasData {
  cortesanas: CartaCortesana[];
  arcanosMenores: ArcanoMenor[];
  arcanosMayores: ArcanoMayor[];
}