/**
 * @fileoverview Componente que muestra todas las cartas del Tarot con sus detalles.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const TodasLasCartas: React.FC = () => {
  return (
    <div className="todas-cartas-container">
      <div className="todas-cartas-header">
        <h1>Tarot Esotérico</h1>
        <p className="todas-cartas-intro">
          Explora las cartas del Tarot y sus profundas correspondencias
          esotéricas según el sistema de la Aurora Dorada.
        </p>
      </div>

      <div className="card-type-sections">
        <Link to="/cartas/arcanos-mayores" className="card-type-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/0 El Loco.png`}
            alt="Arcanos Mayores"
            className="card-type-image"
          />
          <h2>Arcanos Mayores</h2>
          <p>
            Los 22 Arcanos Mayores representan las fuerzas cósmicas y arquetipos
            universales. Cada carta está vinculada a una letra hebrea y un sendero
            en el Árbol de la Vida.
          </p>
        </Link>

        <Link to="/arcanos-menores" className="card-type-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/as-bastos.png`}
            alt="Arcanos Menores"
            className="card-type-image"
          />
          <h2>Arcanos Menores</h2>
          <p>
            Los 36 Arcanos Menores (del 2 al 10) representan las influencias
            planetarias en cada elemento. Cada palo corresponde a un elemento y
            un mundo cabalístico.
          </p>
        </Link>

        <Link to="/cartas-cortesanas" className="card-type-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/reina-copas.png`}
            alt="Cartas Cortesanas"
            className="card-type-image"
          />
          <h2>Cartas Cortesanas</h2>
          <p>
            Las 16 Cartas Cortesanas (Reyes, Reinas, Caballeros y Pajes)
            representan aspectos de la personalidad y tipos psicológicos en
            cada elemento.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TodasLasCartas;