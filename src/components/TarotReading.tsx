/**
 * @fileoverview Componente para realizar tiradas de Tarot.
 * Implementa diferentes tipos de tiradas y modos de visualización.
 */

import React, { useState, useEffect } from 'react';
import { Carta } from '../types/tarot';

interface TarotReadingProps {
  cartas: Carta[];
  getImagePath: (numero: number, nombre: string) => string;
}

type TipoTirada = 'tres' | 'cruz' | 'arbol';

interface DescripcionTirada {
  titulo: string;
  descripcion: string;
}

const DESCRIPCIONES_TIRADAS: Record<TipoTirada, DescripcionTirada> = {
  tres: {
    titulo: "Tirada de Tres Cartas",
    descripcion: "Una tirada simple pero poderosa que revela la influencia del pasado, la situación presente y las tendencias futuras."
  },
  cruz: {
    titulo: "Cruz Celta",
    descripcion: "Una tirada compleja de 10 cartas que proporciona una visión profunda de tu situación desde múltiples ángulos."
  },
  arbol: {
    titulo: "Árbol de la Vida",
    descripcion: "Una tirada cabalística que coloca 10 cartas en el patrón del Árbol de la Vida, revelando influencias espirituales profundas."
  }
};

const TarotReading: React.FC<TarotReadingProps> = ({ cartas, getImagePath }) => {
  const [tipoTiradaSeleccionada, setTipoTiradaSeleccionada] = useState<TipoTirada>('tres');
  const [cartasTirada, setCartasTirada] = useState<Carta[]>([]);
  const [mostrarTirada, setMostrarTirada] = useState(false);
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});
  const [isShuffling, setIsShuffling] = useState(false);
  const [cartaMeditacion, setCartaMeditacion] = useState<Carta | null>(null);
  const [mostrarTodasLasCartas, setMostrarTodasLasCartas] = useState(false);

  const toggleCard = (carta: Carta) => {
    setCartasVolteadas(prev => ({
      ...prev,
      [carta.numero]: !prev[carta.numero]
    }));
  };

  const realizarTirada = async () => {
    setIsShuffling(true);
    const cartasDisponibles = [...cartas];
    const nuevasTirada: Carta[] = [];

    // Simular barajado
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Seleccionar cartas al azar
    for (let i = 0; i < 3; i++) {
      const indiceAleatorio = Math.floor(Math.random() * cartasDisponibles.length);
      nuevasTirada.push(cartasDisponibles[indiceAleatorio]);
      cartasDisponibles.splice(indiceAleatorio, 1);
    }

    setCartasTirada(nuevasTirada);
    setMostrarTirada(true);
    setIsShuffling(false);
    setCartasVolteadas({});
  };

  const iniciarMeditacion = (carta: Carta) => {
    setCartaMeditacion(carta);
  };

  return (
    <div className="tarot-reading">
      <div className="reading-intro">
        <h2>Consulta el Tarot</h2>
        <p>Las cartas del Tarot son un espejo del alma y un puente hacia la sabiduría universal.
           Antes de realizar tu tirada, toma un momento para centrarte y formular tu pregunta con claridad.</p>
      </div>

      <div className="reading-types">
        {(Object.keys(DESCRIPCIONES_TIRADAS) as TipoTirada[]).map((tipo) => (
          <button
            key={tipo}
            className={`reading-type-button ${tipoTiradaSeleccionada === tipo ? 'active' : ''}`}
            onClick={() => setTipoTiradaSeleccionada(tipo)}
          >
            {DESCRIPCIONES_TIRADAS[tipo].titulo}
          </button>
        ))}
      </div>

      {!mostrarTirada ? (
        <>
          <p className="reading-description">
            {DESCRIPCIONES_TIRADAS[tipoTiradaSeleccionada].descripcion}
          </p>
          <button
            className={`reading-button ${isShuffling ? 'shuffling' : ''}`}
            onClick={realizarTirada}
            disabled={isShuffling}
          >
            {isShuffling ? 'Barajando...' : 'Realizar Tirada'}
          </button>
        </>
      ) : (
        <div className="reading-container">
          <h2>Tu Tirada</h2>
          <div className="cards-reading">
            {cartasTirada.map((carta, index) => (
              <div key={carta.numero} className="reading-card">
                <h3>{index === 0 ? "Pasado" : index === 1 ? "Presente" : "Futuro"}</h3>
                <div
                  className={`card ${cartasVolteadas[carta.numero] ? 'flipped' : ''}`}
                  onClick={() => toggleCard(carta)}
                >
                  <img
                    src={getImagePath(carta.numero, carta.nombre)}
                    alt={carta.nombre}
                    loading="lazy"
                    onDoubleClick={() => iniciarMeditacion(carta)}
                  />
                  <div className="card-info">
                    <h4>{carta.nombre}</h4>
                    <p>{carta.significado}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reading-controls">
            <button
              className="reading-button"
              onClick={() => {
                setMostrarTirada(false);
                setCartasTirada([]);
                setCartasVolteadas({});
              }}
            >
              Nueva Tirada
            </button>
            <button
              className="reading-type-button"
              onClick={() => setMostrarTodasLasCartas(!mostrarTodasLasCartas)}
            >
              {mostrarTodasLasCartas ? 'Ocultar Todas las Cartas' : 'Ver Todas las Cartas'}
            </button>
          </div>
        </div>
      )}

      {cartaMeditacion && (
        <div className="meditation-mode" onClick={() => setCartaMeditacion(null)}>
          <div className="meditation-card">
            <button className="close-meditation" onClick={() => setCartaMeditacion(null)}>×</button>
            <img
              src={getImagePath(cartaMeditacion.numero, cartaMeditacion.nombre)}
              alt={cartaMeditacion.nombre}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TarotReading;