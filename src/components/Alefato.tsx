/**
 * @fileoverview Componente que presenta el Alefato hebreo y sus correspondencias esotéricas.
 */

import React from 'react';

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
  return (
    <div className="alefato-container">
      <div className="alefato-header">
        <h1>El Alefato Hebreo</h1>
        <p className="alefato-intro">
          Explora las 22 letras sagradas del alfabeto hebreo, sus significados
          esotéricos y su relación con los senderos del Árbol de la Vida.
        </p>
      </div>

      <div className="letras-grid">
        {letrasHebreas.map((letra, index) => (
          <div key={index} className="letra-card">
            <div className="letra-hebrea">{letra.letra}</div>
            <h2>{letra.nombre}</h2>
            <div className="letra-detalles">
              <p><strong>Valor:</strong> {letra.valor}</p>
              <p><strong>Significado:</strong> {letra.significado}</p>
              <p><strong>Sendero:</strong> {letra.sendero}</p>
              <p><strong>Elemento/Planeta:</strong> {letra.elemento}</p>
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