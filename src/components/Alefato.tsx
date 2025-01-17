/**
 * @fileoverview Componente que presenta el Alefato hebreo y sus correspondencias esotéricas.
 */

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import TreeOfLife from './TreeOfLife';

interface LetraHebrea {
  letra: string;
  nombre: string;
  valor: number;
  significado: string;
  sendero: number;
  elemento: string;
}

const letrasHebreas: LetraHebrea[] = [
  {
    letra: 'א',
    nombre: 'Alef',
    valor: 1,
    significado: 'Buey',
    sendero: 11,
    elemento: 'Aire'
  },
  {
    letra: 'ב',
    nombre: 'Beth',
    valor: 2,
    significado: 'Casa',
    sendero: 12,
    elemento: 'Mercurio'
  },
  // ... más letras se agregarán aquí
];

const Alefato: React.FC = () => {
  const [letrasVolteadas, setLetrasVolteadas] = useState<{ [key: string]: boolean }>({});
  const [detallesExpandidos, setDetallesExpandidos] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (letra: string) => {
    setLetrasVolteadas(prev => ({
      ...prev,
      [letra]: !prev[letra]
    }));
  };

  const toggleDetalle = (letra: string, detalle: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = `${letra}-${detalle}`;
    setDetallesExpandidos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDetalleExpandido = (letra: string, detalle: string) => {
    return detallesExpandidos[`${letra}-${detalle}`] || false;
  };

  return (
    <div className="alefato-container">
      <div className="alefato-header">
        <h1>El Alefato Hebreo</h1>
        <p className="alefato-intro">
          Explora las 22 letras sagradas del alfabeto hebreo, sus significados
          esotéricos y su relación con los senderos del Árbol de la Vida.
          Cada letra es un portal hacia el entendimiento de los misterios divinos.
        </p>
      </div>

      <div className="letras-grid">
        {letrasHebreas.map((letra) => (
          <div
            key={letra.letra}
            className={`letra-card ${letrasVolteadas[letra.letra] ? 'flipped' : ''}`}
            onClick={() => toggleCard(letra.letra)}
          >
            <div className="letra-card-inner">
              {/* Frente de la carta */}
              <div className="letra-card-front">
                <div className="letra-hebrea">{letra.letra}</div>
                <h2 className="letra-nombre">{letra.nombre}</h2>
              </div>

              {/* Reverso de la carta */}
              <div className="letra-card-back">
                <div className="letra-detalles">
                  {/* Valor numérico */}
                  <div className="card-detail-section">
                    <button
                      className="w-full flex justify-between items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={(e) => toggleDetalle(letra.letra, 'valor', e)}
                    >
                      <span>Valor Numérico</span>
                      {isDetalleExpandido(letra.letra, 'valor') ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isDetalleExpandido(letra.letra, 'valor') && (
                      <div className="p-3">{letra.valor}</div>
                    )}
                  </div>

                  {/* Significado */}
                  <div className="card-detail-section">
                    <button
                      className="w-full flex justify-between items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={(e) => toggleDetalle(letra.letra, 'significado', e)}
                    >
                      <span>Significado</span>
                      {isDetalleExpandido(letra.letra, 'significado') ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isDetalleExpandido(letra.letra, 'significado') && (
                      <div className="p-3">{letra.significado}</div>
                    )}
                  </div>

                  {/* Sendero */}
                  <div className="card-detail-section">
                    <button
                      className="w-full flex justify-between items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={(e) => toggleDetalle(letra.letra, 'sendero', e)}
                    >
                      <span>Sendero</span>
                      {isDetalleExpandido(letra.letra, 'sendero') ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isDetalleExpandido(letra.letra, 'sendero') && (
                      <div className="p-3 space-y-3">
                        <p>Sendero {letra.sendero}</p>
                        <TreeOfLife sendero={letra.sendero.toString()} />
                      </div>
                    )}
                  </div>

                  {/* Elemento/Planeta */}
                  <div className="card-detail-section">
                    <button
                      className="w-full flex justify-between items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={(e) => toggleDetalle(letra.letra, 'elemento', e)}
                    >
                      <span>Elemento/Planeta</span>
                      {isDetalleExpandido(letra.letra, 'elemento') ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isDetalleExpandido(letra.letra, 'elemento') && (
                      <div className="p-3">{letra.elemento}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="alefato-nota">
        <p>
          <strong>Nota:</strong> El estudio del Alefato es fundamental para
          comprender las correspondencias mágicas en el sistema de la Aurora Dorada.
          Cada letra es un portal hacia el entendimiento de los misterios divinos.
        </p>
      </div>
    </div>
  );
};

export default Alefato;