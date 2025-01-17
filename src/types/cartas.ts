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
    dignificado: string[];
    malDignificado: string[];
  };
  dominio: {
    desde: string;
    hasta: string;
    constelacion: string;
  };
}

export interface ArcanoMenor {
  nombre: string;
  titulo: string;
  descripcion: string;
  simbolismo?: string;
  atributos: {
    dignificado: string;
    malDignificado: string;
  };
  sefira: {
    nombre: string;
    titulo: string;
    descripcion: string;
  };
  decanato?: {
    signo: string;
    planeta: string;
    grados: string;
    angeles: string[];
  };
}

export interface CorrespondenciaCabalistica {
  titulo: string;
  descripcion?: string;
  accion: string;
  angeles?: string[];
}

export interface ArcanoMayor {
  nombre: string;
  numero: number;
  titulo: string;
  descripcion: string;
  significado: {
    general: string;
    amor: string;
    trabajo: string;
  };
  planeta: string;
  elemento: string;
  sendero: string;
  correspondenciaCabalistica: {
    titulo: string;
    accion: string;
  };
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