/**
 * @fileoverview Tipos para las cartas del Tarot.
 */

export interface Atributos {
  dignificado: string;
  malDignificado: string;
}

export interface Decanato {
  planeta: string;
  signo: string;
}

export interface Sefira {
  nombre: string;
  titulo: string;
  descripcion: string;
}

export interface ArcanoMayor {
  nombre: string;
  numero: number;
  titulo: string;
  hebreo: string;
  letra: string;
  signo: string;
  atribucion: string;
  sendero: string;
  significado: string;
}

export interface ArcanoMenor {
  nombre: string;
  titulo: string;
  descripcion?: string;
  simbolismo?: string;
  atributos: Atributos;
  sefira?: Sefira;
  decanato?: Decanato;
}

export interface CartaCortesana {
  nombre: string;
  titulo: string;
  descripcion: string;
  elemento: string;
  regencia: string;
  complexion: string;
  genero: string;
  atributos: Atributos;
}

export interface Significador {
  complexiones: {
    bastos: string;
    copas: string;
    espadas: string;
    pantaculos: string;
  };
  generos: {
    reyes: string;
    reinas: string;
    caballeros: string;
    sotas: string;
  };
}

export interface CartasCortesanasData {
  significador: Significador;
  cartasCortesanas: CartaCortesana[];
}

export interface ArcanosMenoresData {
  arcanosMenores: ArcanoMenor[];
}

export interface ArcanosMayoresData {
  arcanos_mayores: ArcanoMayor[];
}

export type Carta = ArcanoMayor | ArcanoMenor | CartaCortesana;