export interface SimbolosProps {
  tipo: 'pentagramas' | 'hexagramas' | 'sigilos' | 'talismanes';
}

export interface HerramientasMagicasProps {
  tipo: 'armas' | 'tatvas' | 'formas';
}

export interface TarotReadingProps {
  cartas: Array<{
    numero: number;
    nombre: string;
    descripcion: string;
    significado: string;
    elemento: string;
    planeta: string;
    signo: string;
  }>;
  getImagePath: (numero: number, nombre: string) => string;
}