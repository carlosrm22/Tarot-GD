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

export interface ArcanosMayores {
  arcanos: {
    arcanos_mayores: Carta[];
  }
}