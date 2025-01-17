/**
 * @fileoverview Componente para realizar tiradas de Tarot.
 * Implementa diferentes tipos de tiradas y modos de visualización.
 */

import React, { useState, useEffect } from 'react';
import { Carta } from '../types/tarot';
import { FaQuestionCircle, FaRedo, FaEye, FaEyeSlash, FaMoon, FaSun, FaTree } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface TarotReadingProps {
  cartas: Carta[];
  getImagePath: (numero: number, nombre: string) => string;
}

type TipoTirada = 'tres' | 'cruz' | 'arbol' | 'diaria' | 'si-no';

interface DescripcionTirada {
  titulo: string;
  descripcion: string;
  numCartas: number;
  icono: React.ReactNode;
  posiciones: string[];
}

const DESCRIPCIONES_TIRADAS: Record<TipoTirada, DescripcionTirada> = {
  diaria: {
    titulo: "Carta del Día",
    descripcion: "Una sola carta que te guiará durante el día, ofreciendo consejo y reflexión.",
    numCartas: 1,
    icono: <FaSun className="text-2xl" />,
    posiciones: ["Guía del Día"]
  },
  'si-no': {
    titulo: "Tirada Sí/No",
    descripcion: "Una tirada de dos cartas para ayudarte a tomar una decisión específica.",
    numCartas: 2,
    icono: <FaQuestionCircle className="text-2xl" />,
    posiciones: ["Aspecto Positivo", "Aspecto Negativo"]
  },
  tres: {
    titulo: "Tirada de Tres Cartas",
    descripcion: "Una tirada simple pero poderosa que revela la influencia del pasado, la situación presente y las tendencias futuras.",
    numCartas: 3,
    icono: <FaMoon className="text-2xl" />,
    posiciones: ["Pasado", "Presente", "Futuro"]
  },
  cruz: {
    titulo: "Cruz Celta",
    descripcion: "Una tirada compleja de 10 cartas que proporciona una visión profunda de tu situación desde múltiples ángulos.",
    numCartas: 10,
    icono: <FaSun className="text-2xl" />,
    posiciones: [
      "Situación Actual",
      "Influencia Cruzada",
      "Base",
      "Pasado Reciente",
      "Posible Resultado",
      "Futuro Inmediato",
      "Actitud Personal",
      "Influencias Externas",
      "Esperanzas y Temores",
      "Resultado Final"
    ]
  },
  arbol: {
    titulo: "Árbol de la Vida",
    descripcion: "Una tirada cabalística que coloca 10 cartas en el patrón del Árbol de la Vida, revelando influencias espirituales profundas.",
    numCartas: 10,
    icono: <FaTree className="text-2xl" />,
    posiciones: [
      "Kether - Corona",
      "Chokmah - Sabiduría",
      "Binah - Entendimiento",
      "Chesed - Misericordia",
      "Geburah - Severidad",
      "Tiphareth - Belleza",
      "Netzach - Victoria",
      "Hod - Gloria",
      "Yesod - Fundamento",
      "Malkuth - Reino"
    ]
  }
};

const TarotReading: React.FC<TarotReadingProps> = ({ cartas, getImagePath }) => {
  const [tipoTiradaSeleccionada, setTipoTiradaSeleccionada] = useState<TipoTirada>('diaria');
  const [cartasTirada, setCartasTirada] = useState<Carta[]>([]);
  const [mostrarTirada, setMostrarTirada] = useState(false);
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});
  const [isShuffling, setIsShuffling] = useState(false);
  const [cartaMeditacion, setCartaMeditacion] = useState<Carta | null>(null);
  const [mostrarTodasLasCartas, setMostrarTodasLasCartas] = useState(false);
  const [pregunta, setPregunta] = useState('');

  const toggleCard = (carta: Carta) => {
    setCartasVolteadas(prev => ({
      ...prev,
      [carta.numero]: !prev[carta.numero]
    }));
  };

  const barajarCartas = (array: Carta[]): Carta[] => {
    const cartasBarajadas = [...array];
    for (let i = cartasBarajadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartasBarajadas[i], cartasBarajadas[j]] = [cartasBarajadas[j], cartasBarajadas[i]];
    }
    return cartasBarajadas;
  };

  const realizarTirada = async () => {
    setIsShuffling(true);
    const numCartas = DESCRIPCIONES_TIRADAS[tipoTiradaSeleccionada].numCartas;

    // Simular barajado con animación
    await new Promise(resolve => setTimeout(resolve, 1500));

    const cartasBarajadas = barajarCartas(cartas);
    const nuevasTirada = cartasBarajadas.slice(0, numCartas);

    setCartasTirada(nuevasTirada);
    setMostrarTirada(true);
    setIsShuffling(false);
    setCartasVolteadas({});
  };

  const iniciarMeditacion = (carta: Carta) => {
    setCartaMeditacion(carta);
  };

  const renderTirada = () => {
    const tirada = DESCRIPCIONES_TIRADAS[tipoTiradaSeleccionada];

    switch (tipoTiradaSeleccionada) {
      case 'cruz':
        return (
          <div className="grid grid-cols-3 gap-4 place-items-center">
            {cartasTirada.map((carta, index) => (
              <motion.div
                key={carta.numero}
                className="reading-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{tirada.posiciones[index]}</h3>
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
                  {cartasVolteadas[carta.numero] && (
                    <div className="card-info">
                      <h4>{carta.nombre}</h4>
                      <p>{carta.significado}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return (
          <div className="flex flex-wrap justify-center gap-8">
            {cartasTirada.map((carta, index) => (
              <motion.div
                key={carta.numero}
                className="reading-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{tirada.posiciones[index]}</h3>
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
                  {cartasVolteadas[carta.numero] && (
                    <div className="card-info">
                      <h4>{carta.nombre}</h4>
                      <p>{carta.significado}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="tarot-reading">
      <motion.div
        className="reading-intro"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Consulta el Tarot</h2>
        <p>
          Las cartas del Tarot son un espejo del alma y un puente hacia la sabiduría universal.
          Antes de realizar tu tirada, toma un momento para centrarte y formular tu pregunta con claridad.
        </p>
      </motion.div>

      <div className="reading-types">
        {(Object.keys(DESCRIPCIONES_TIRADAS) as TipoTirada[]).map((tipo) => (
          <motion.button
            key={tipo}
            className={`reading-type-button ${tipoTiradaSeleccionada === tipo ? 'active' : ''}`}
            onClick={() => setTipoTiradaSeleccionada(tipo)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              {DESCRIPCIONES_TIRADAS[tipo].icono}
              {DESCRIPCIONES_TIRADAS[tipo].titulo}
            </span>
          </motion.button>
        ))}
      </div>

      {!mostrarTirada ? (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="reading-description">
            {DESCRIPCIONES_TIRADAS[tipoTiradaSeleccionada].descripcion}
          </p>

          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Escribe tu pregunta aquí (opcional)"
              value={pregunta}
              onChange={(e) => setPregunta(e.target.value)}
              className="mystic-input w-full mb-4"
            />
          </div>

          <motion.button
            className={`reading-button ${isShuffling ? 'shuffling' : ''}`}
            onClick={realizarTirada}
            disabled={isShuffling}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isShuffling ? 'Barajando...' : 'Realizar Tirada'}
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="reading-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {pregunta && (
            <div className="pregunta-container mb-8">
              <h3>Tu Pregunta:</h3>
              <p className="italic">{pregunta}</p>
            </div>
          )}

          <h2>Tu Tirada</h2>
          {renderTirada()}

          <div className="reading-controls mt-8 space-x-4">
            <motion.button
              className="reading-button"
              onClick={() => {
                setMostrarTirada(false);
                setCartasTirada([]);
                setCartasVolteadas({});
                setPregunta('');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <FaRedo />
                Nueva Tirada
              </span>
            </motion.button>

            <motion.button
              className="reading-type-button"
              onClick={() => setMostrarTodasLasCartas(!mostrarTodasLasCartas)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                {mostrarTodasLasCartas ? <FaEyeSlash /> : <FaEye />}
                {mostrarTodasLasCartas ? 'Ocultar Significados' : 'Ver Significados'}
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {cartaMeditacion && (
          <motion.div
            className="meditation-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartaMeditacion(null)}
          >
            <motion.div
              className="meditation-card"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button className="close-meditation" onClick={() => setCartaMeditacion(null)}>×</button>
              <img
                src={getImagePath(cartaMeditacion.numero, cartaMeditacion.nombre)}
                alt={cartaMeditacion.nombre}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TarotReading;