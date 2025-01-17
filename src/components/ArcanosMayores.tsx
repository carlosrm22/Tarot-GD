/**
 * @fileoverview Componente que muestra todas las cartas del Tarot con sus detalles.
 */

import React from 'react';
import { useData } from '../contexts/DataContext';

const ArcanosMayores: React.FC = () => {
  const { arcanosMayores, isLoading } = useData();

  if (isLoading) {
    return (
      <div className="flex-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
};

export default ArcanosMayores;