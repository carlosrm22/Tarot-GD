import React, { createContext, useContext } from 'react';
import enoquianoData from '../data/enoquiano.json';
import alefatoData from '../data/alefato.json';
import { ArcanoMayor } from '../types/cartas';
import { Alefato } from '../types/alefato';
import { Enoquiano } from '../types/enoquiano';
import arcanosMayoresData from '../data/arcanos_mayores.json';

interface DataContextType {
  arcanosMayores: ArcanoMayor[];
  enoquiano: Enoquiano;
  alefato: Alefato;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    arcanosMayores: arcanosMayoresData.arcanos_mayores,
    enoquiano: enoquianoData,
    alefato: alefatoData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};