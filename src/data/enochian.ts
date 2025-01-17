import { ImageInfo } from '../types/images';

export type EnochianCategoryKey = 'todos' | 'tablas' | 'llamadas';

export interface EnochianCall {
  id: number;
  titulo: string;
  texto_original: string;
  traduccion: string;
  uso: string;
  elemento?: string;
  direccion?: string;
  tags: string[];
}

export interface EnochianTable extends ImageInfo {
  elemento?: string;
  direccion?: string;
  uso: string;
}

export const ENOCHIAN_CATEGORIES = {
  todos: {
    title: 'Todo',
    path: '',
    publicPath: ''
  },
  tablas: {
    title: 'Tablas Enoquianas',
    path: '/images/Tablas Enoquianas',
    publicPath: `${process.env.PUBLIC_URL}/images/Tablas Enoquianas`
  },
  llamadas: {
    title: 'Llamadas Enoquianas',
    path: '/data/enoquiano.json',
    publicPath: `${process.env.PUBLIC_URL}/data/enoquiano.json`
  }
} as const;

export const MOCK_TABLES: EnochianTable[] = [
  {
    id: 1,
    title: 'Tabla del Aire',
    path: '/images/Tablas Enoquianas/tabla-aire.jpg',
    publicPath: `${process.env.PUBLIC_URL}/images/Tablas Enoquianas/tabla-aire.jpg`,
    tags: ['aire', 'este'],
    elemento: 'aire',
    direccion: 'este',
    uso: 'Invocación de fuerzas aéreas y espíritus del este'
  },
  {
    id: 2,
    title: 'Tabla del Fuego',
    path: '/images/Tablas Enoquianas/tabla-fuego.jpg',
    publicPath: `${process.env.PUBLIC_URL}/images/Tablas Enoquianas/tabla-fuego.jpg`,
    tags: ['fuego', 'sur'],
    elemento: 'fuego',
    direccion: 'sur',
    uso: 'Invocación de fuerzas ígneas y espíritus del sur'
  }
];

export const MOCK_CALLS: EnochianCall[] = [
  {
    id: 1,
    titulo: 'Primera Llamada',
    texto_original: 'Ol sonuf vaoresaji...',
    traduccion: 'Yo reino sobre vosotros...',
    uso: 'Apertura general de operaciones enoquianas',
    tags: ['apertura', 'general']
  },
  {
    id: 2,
    titulo: 'Segunda Llamada',
    texto_original: 'Adgt upaah zongom...',
    traduccion: 'Los poderosos sonidos han entrado...',
    uso: 'Invocación de fuerzas elementales',
    elemento: 'aire',
    direccion: 'este',
    tags: ['elementos', 'aire', 'este']
  }
];