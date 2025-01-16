export interface Correspondencia {
  energia: string;
  simbolo?: string;
  sigilo?: string;
  talisman?: {
    descripcion?: string;
    imagen?: string;
  };
  altar?: string;
  arma?: {
    nombre?: string;
    imagen?: string;
  };
  tablaEnoquiana?: {
    enAltar?: string;
    imagenAltar?: string;
    energia?: string;
    posicionTemplo?: string;
    imagenEnergia?: string;
  };
  llamadaEnoquiana?: string;
  tarot?: {
    carta?: string;
    imagen?: string;
  };
  casas?: {
    diurna?: string;
    nocturna?: string;
  };
  horaAdecuada?: string;
  colores?: string[];
  aromas?: string[];
  formaDivina?: {
    transliteracion?: string;
    egipcio?: string;
    copto?: string;
    imagen?: string;
  };
  pentagramas?: {
    espiritu?: {
      descripcion?: string;
      imagen?: string;
    };
    energia?: {
      descripcion?: string;
      imagen?: string;
    };
  };
  proyeccion?: {
    colorEnergia?: string;
    trazo?: string;
    vibracion?: string;
  };
  signoGrado?: string;
  orientacion?: {
    altar?: string;
    hebreo?: string;
  };
  jerarquia?: {
    senor?: {
      nombre?: string;
      hebreo?: string;
      sigilo?: string;
    };
    nombreSagrado?: string;
    arcangel?: {
      nombre?: string;
      hebreo?: string;
      sigilo?: string;
    };
    angel?: {
      nombre?: string;
      hebreo?: string;
      sigilo?: string;
    };
    gobernador?: {
      nombre?: string;
      hebreo?: string;
      sigilo?: string;
    };
    fuerzas?: {
      nombre?: string;
      hebreo?: string;
      sigilo?: string;
    };
  };
  ordenElemental?: string;
  majestad?: string;
  principe?: string;
  tipoMagia?: string;
  riosEden?: {
    hebreo?: string;
    nombre?: string;
  };
  triplicidad?: string;
  grado?: string;
  orden?: string;
}

export type TipoEnergia =
  | 'Tierra' | 'Aire' | 'Agua' | 'Fuego' | 'Supremo Elemental'
  | 'Luna' | 'Mercurio' | 'Venus' | 'Sol' | 'Marte' | 'Júpiter' | 'Saturno'
  | 'Piscis' | 'Acuario' | 'Capricornio' | 'Sagitario' | 'Escorpio' | 'Libra'
  | 'Virgo' | 'Leo' | 'Cancer' | 'Géminis' | 'Tauro' | 'Aries' | 'Zodiaco'
  | 'Maljut' | 'Yesod' | 'Hod' | 'Netsaj' | 'Tiféret' | 'Guevurá' | 'Jesed'
  | 'Biná' | 'Jojmá' | 'Kéter' | 'Sefirot';

export type Correspondencias = {
  [key in TipoEnergia]?: Correspondencia;
};