/**
 * @fileoverview Componente que presenta material de estudio sobre el Tarot y sus correspondencias esotéricas.
 */

import React from 'react';

const Estudio: React.FC = () => {
  return (
    <div className="estudio-container">
      <div className="estudio-header">
        <h1>Estudio del Tarot</h1>
        <p className="estudio-intro">
          Profundiza en el conocimiento esotérico del Tarot a través del sistema
          de la Aurora Dorada.
        </p>
      </div>

      <div className="estudio-sections">
        <section className="estudio-section">
          <h2>Fundamentos</h2>
          <ul>
            <li>Historia del Tarot en la Aurora Dorada</li>
            <li>Los cuatro mundos cabalísticos</li>
            <li>El Árbol de la Vida y los Arcanos Mayores</li>
            <li>Correspondencias planetarias y zodiacales</li>
          </ul>
        </section>

        <section className="estudio-section">
          <h2>Simbolismo</h2>
          <ul>
            <li>Colores y su significado esotérico</li>
            <li>Símbolos hebreos en las cartas</li>
            <li>Elementos y su representación</li>
            <li>Interpretación de los símbolos mágicos</li>
          </ul>
        </section>

        <section className="estudio-section">
          <h2>Prácticas</h2>
          <ul>
            <li>Meditación con los Arcanos</li>
            <li>Ejercicios de visualización</li>
            <li>Rituales con el Tarot</li>
            <li>Técnicas avanzadas de interpretación</li>
          </ul>
        </section>
      </div>

      <div className="estudio-nota">
        <p>
          <strong>Nota:</strong> Este material está diseñado para estudiantes serios
          del sistema mágico de la Aurora Dorada. Se recomienda seguir el orden
          establecido y practicar cada sección antes de avanzar.
        </p>
      </div>
    </div>
  );
};

export default Estudio;