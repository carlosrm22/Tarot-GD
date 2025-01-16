/**
 * @fileoverview Componente que muestra la galería completa de los Arcanos Mayores
 * con sus correspondencias esotéricas.
 */

import React, { useState } from 'react';
import { Carta } from '../types/tarot.tsx';
import TreeOfLife from './TreeOfLife.tsx';

interface TodasLasCartasProps {
  cartas: Carta[];
  getImagePath: (numero: number, nombre: string) => string;
}

const TodasLasCartas: React.FC<TodasLasCartasProps> = ({ cartas, getImagePath }) => {
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});
  const [detallesExpandidos, setDetallesExpandidos] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (numero: number) => {
    setCartasVolteadas(prev => ({
      ...prev,
      [numero]: !prev[numero]
    }));
  };

  const toggleAllDetalles = (cartaId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const detalles = ["numero", "hebreo", "signo", "atribucion", "sendero", "significado"];
    const algunoExpandido = detalles.some(detalle => isDetalleExpandido(cartaId, detalle));

    const nuevoEstado = { ...detallesExpandidos };
    detalles.forEach(detalle => {
      nuevoEstado[`${cartaId}-${detalle}`] = !algunoExpandido;
    });

    setDetallesExpandidos(nuevoEstado);
  };

  const toggleDetalle = (cartaId: number, detalle: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = `${cartaId}-${detalle}`;
    setDetallesExpandidos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDetalleExpandido = (cartaId: number, detalle: string) => {
    return detallesExpandidos[`${cartaId}-${detalle}`] || false;
  };

  return (
    <div className="todas-cartas-container">
      <div className="todas-cartas-header">
        <h1>Los 22 Arcanos Mayores</h1>
        <p className="todas-cartas-intro">
          Explora la sabiduría de los Arcanos Mayores. Cada carta es un portal hacia
          el conocimiento esotérico, revelando las correspondencias cabalísticas y
          los misterios del Árbol de la Vida.
        </p>
      </div>

      <div className="cards-container">
        {cartas.map((carta: Carta) => {
          const imagePath = getImagePath(carta.numero, carta.nombre);
          const isFlipped = cartasVolteadas[carta.numero];

          return (
            <div
              key={carta.numero}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => toggleCard(carta.numero)}>
              <div className="card-front">
                <img src={imagePath} alt={carta.nombre} loading="lazy" />
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>{carta.nombre}</h2>
                  <h3>{carta.titulo}</h3>
                  <div className="card-details">
                    <div className="details-header">
                      <button
                        className="toggle-all-button"
                        onClick={(e) => toggleAllDetalles(carta.numero, e)}
                        title="Expandir/Colapsar todo">
                        <span className="filter-icon">⏫⏬</span>
                      </button>
                    </div>

                    <div
                      className={`detail-item ${
                        isDetalleExpandido(carta.numero, "numero") ? "expanded" : ""
                      }`}
                      onClick={(e) => toggleDetalle(carta.numero, "numero", e)}>
                      <div className="detail-header">
                        <strong>Número</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">{carta.numero}</div>
                    </div>

                    <div
                      className={`detail-item ${
                        isDetalleExpandido(carta.numero, "hebreo") ? "expanded" : ""
                      }`}
                      onClick={(e) => toggleDetalle(carta.numero, "hebreo", e)}>
                      <div className="detail-header">
                        <strong>Hebreo</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.hebreo} ({carta.letra})
                      </div>
                    </div>

                    <div
                      className={`detail-item ${
                        isDetalleExpandido(carta.numero, "signo") ? "expanded" : ""
                      }`}
                      onClick={(e) => toggleDetalle(carta.numero, "signo", e)}>
                      <div className="detail-header">
                        <strong>Signo</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">{carta.signo}</div>
                    </div>

                    <div
                      className={`detail-item ${
                        isDetalleExpandido(carta.numero, "atribucion") ? "expanded" : ""
                      }`}
                      onClick={(e) => toggleDetalle(carta.numero, "atribucion", e)}>
                      <div className="detail-header">
                        <strong>Atribución</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">{carta.atribucion}</div>
                    </div>

                    <div
                      className={`detail-item ${
                        isDetalleExpandido(carta.numero, "sendero") ? "expanded" : ""
                      }`}
                      onClick={(e) => toggleDetalle(carta.numero, "sendero", e)}>
                      <div className="detail-header">
                        <strong>Sendero</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.sendero}
                        <TreeOfLife sendero={carta.sendero} />
                      </div>
                    </div>

                    <div
                      className={`detail-item ${
                        isDetalleExpandido(carta.numero, "significado") ? "expanded" : ""
                      }`}
                      onClick={(e) => toggleDetalle(carta.numero, "significado", e)}>
                      <div className="detail-header">
                        <strong>Significado</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.significado}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodasLasCartas;