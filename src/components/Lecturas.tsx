/**
 * @fileoverview Componente para realizar lecturas de Tarot.
 */

import React from 'react';
import { ArcanosMayores } from '../types/tarot';

export interface LecturasProps {
  arcanos_mayores: ArcanosMayores;
}

const Lecturas: React.FC<LecturasProps> = ({ arcanos_mayores }) => {
  return (
    <div className="lecturas-container">
      <div className="lecturas-header">
        <h1>Consulta el Tarot</h1>
        <p className="lecturas-intro">
          Realiza una lectura de Tarot utilizando el sistema de la Aurora Dorada.
          Cada carta revelará aspectos profundos de tu consulta a través de sus
          correspondencias esotéricas.
        </p>
      </div>

      {/* Aquí irá el contenido de las lecturas */}
    </div>
  );
};

export default Lecturas;