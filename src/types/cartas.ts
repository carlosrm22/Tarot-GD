/**
 * @fileoverview Tipos para las cartas del Tarot.
 */

export interface CartaCortesana {
  nombre: string;
  titulo: string;
  descripcion: string;
  elemento: string;
  regencia: string;
  simbolo: string;
  complexion: string;
  genero: string;
  atributos: {
    dignificado: string;
    malDignificado: string;
  };
  dominio: {
    desde: string;
    hasta: string;
    constelacion?: string;
  };
}

export interface ArcanoMenor {
  nombre: string;
  titulo: string;
  descripcion?: string;
  simbolismo?: string;
  decanato?: {
    signo: string;
    planeta: string;
    grados: string;
    angeles: string[];
  };
  atributos: {
    dignificado: string;
    malDignificado: string;
  };
  sefira?: {
    nombre: string;
    significado: string;
  };
}

export interface CorrespondenciaCabalistica {
  titulo: string;
  descripcion?: string;
  accion: string;
  angeles?: string[];
}

export interface ArcanoMayor {
  numero: number;
  nombre: string;
  titulo: string;
  descripcion: string;
  hebreo: string;
  letra: string;
  signo: string;
  atribucion: string;
  sendero: string;
  significado: string;
  correspondenciaCabalistica: CorrespondenciaCabalistica;
}

export interface CartasData {
  cortesanas: CartaCortesana[];
  arcanosMenores: ArcanoMenor[];
  arcanosMayores: ArcanoMayor[];
}

export interface CorrespondenciasCabalisticas {
  notas: {
    autor: string;
    introduccion: string;
  };
  correspondencias: CorrespondenciaCabalistica[];
}