export interface AtributosLlamada {
  elemento: string;
  direccion: string;
  color: string;
  arma: string;
  energia: string;
}

export interface LlamadaEnoquiana {
  numero: number;
  espanol: string;
  enoquiano: string;
  ingles: string;
  atributos: AtributosLlamada;
}

export interface Enoquiano {
  llamadas: {
    [key: string]: LlamadaEnoquiana;
  };
}