import React, { createContext, useContext, useState, useEffect } from 'react';
import arcanosMayoresData from '../data/arcanos_mayores.json';
import alefatoData from '../data/alefato.json';
import correspondenciasData from '../data/correspondencias.json';
import enoquianoData from '../data/enoquiano.json';
import { ArcanosMayores } from '../types/tarot';
import { Alefato } from '../types/alefato';
import { Correspondencias } from '../types/correspondencias';
import { Enoquiano } from '../types/enoquiano';

interface DataContextType {
  arcanosMayores: ArcanosMayores;
  alefato: Alefato;
  correspondencias: Correspondencias;
  enoquiano: Enoquiano;
  isLoading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData debe ser usado dentro de un DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Omit<DataContextType, 'isLoading' | 'error'>>({
    arcanosMayores: arcanosMayoresData as ArcanosMayores,
    alefato: alefatoData as Alefato,
    correspondencias: correspondenciasData as Correspondencias,
    enoquiano: enoquianoData as Enoquiano,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        // Aquí podrías agregar validaciones de datos o transformaciones necesarias
        setIsLoading(false);
      } catch (err) {
        setError('Error al cargar los datos');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const value = {
    ...data,
    isLoading,
    error,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;