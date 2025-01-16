/**
 * @fileoverview Componente de página principal que introduce la aplicación y sus secciones.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Inicio: React.FC = () => {
  return (
    <div className="inicio-container">
      <div className="inicio-header">
        <h1>Bienvenido al Tarot Esotérico</h1>
        <p className="inicio-intro">
          Explora el mundo místico del Tarot a través de sus profundas conexiones
          con la Cábala, el Alefato Hebreo y los Rituales Mágicos.
        </p>
      </div>

      <div className="inicio-sections">
        <Link to="/cartas" className="inicio-section">
          <h2>Tarot</h2>
          <p>
            Descubre los 22 Arcanos Mayores y sus profundas correspondencias
            esotéricas según el sistema de la Aurora Dorada.
          </p>
        </Link>

        <Link to="/alefato" className="inicio-section">
          <h2>Alefato Hebreo</h2>
          <p>
            Explora las 22 letras hebreas y su conexión mística con los
            Arcanos Mayores del Tarot.
          </p>
        </Link>

        <Link to="/rituales" className="inicio-section">
          <h2>Rituales</h2>
          <p>
            Aprende sobre los rituales mágicos y cómo utilizar el Tarot
            como herramienta de transformación espiritual.
          </p>
        </Link>
      </div>

      <div className="inicio-quote">
        <blockquote>
          "El Tarot es un libro de sabiduría ancestral que contiene todo
          el conocimiento del universo codificado en símbolos."
        </blockquote>
        <cite>- Tradición Hermética</cite>
      </div>
    </div>
  );
};

export default Inicio;