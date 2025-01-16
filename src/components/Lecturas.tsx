/**
 * @fileoverview Componente para realizar diferentes tipos de lecturas de Tarot.
 */

import React from 'react';
import TarotReading from './TarotReading.tsx';
import { Carta } from '../types/tarot.tsx';

interface LecturasProps {
  cartas: Carta[];
  getImagePath: (numero: number, nombre: string) => string;
}

const Lecturas: React.FC<LecturasProps> = ({ cartas, getImagePath }) => {
  return (
    <div className="lecturas-container">
      <div className="lecturas-header">
        <h1>Consulta el Tarot</h1>
        <p className="lecturas-intro">
          Bienvenido al portal de consultas del Tarot. Aquí podrás realizar diferentes
          tipos de tiradas para obtener guía y comprensión sobre tus inquietudes.
          Recuerda que el Tarot es una herramienta de autoconocimiento y desarrollo
          espiritual.
        </p>
      </div>

      <TarotReading
        cartas={cartas}
        getImagePath={getImagePath}
      />
    </div>
  );
};

export default Lecturas;