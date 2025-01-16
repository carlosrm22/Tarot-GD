export interface LetraFinal {
  letra: string;
  gematria: number;
  unicode: number;
}

export interface Energia {
  energia: string;
  simbolo: string;
}

export interface Tarot {
  nombre: string;
  imagen: string;
}

export interface LetraHebrea {
  nombre: string;
  pronunciacion: string;
  significado: string;
  gematria: number;
  seferYetzira: Energia;
  goldenDawn: Energia;
  tarot: Tarot;
  unicode: number;
  letrasLatinas?: string[];
  final?: LetraFinal;
}

export interface Alefato {
  letrasHebreasBase: {
    [key: string]: LetraHebrea;
  };
}