/**
 * @fileoverview Componente para realizar nuevas lecturas de Tarot.
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiCardRandom, GiCardDraw, GiCardPlay } from "react-icons/gi";

const spreadTypes = [
  {
    id: "simple",
    name: "Tirada Simple",
    description: "Una carta para respuesta directa",
    cards: 1,
  },
  {
    id: "pasado-presente-futuro",
    name: "Pasado, Presente y Futuro",
    description: "Tres cartas para ver la evolución temporal",
    cards: 3,
  },
  {
    id: "cruz-celta",
    name: "Cruz Celta",
    description: "Tirada completa de 10 cartas",
    cards: 10,
  },
  {
    id: "si-no",
    name: "Sí o No",
    description: "Tres cartas para decisiones",
    cards: 3,
  },
  {
    id: "elemento",
    name: "Elementos",
    description: "Cuatro cartas, una por elemento",
    cards: 4,
  },
];

const NewReading: React.FC = () => {
  const [selectedSpread, setSelectedSpread] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);

  const handleStartReading = () => {
    if (!selectedSpread || !question.trim()) return;

    setIsShuffling(true);
    // TODO: Implementar lógica de barajar y seleccionar cartas
    setTimeout(() => {
      setIsShuffling(false);
      // TODO: Navegar a la vista de lectura
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
          Nueva Lectura
        </h1>
        <p className="text-twilight-text/80 max-w-2xl mx-auto">
          Elige un tipo de tirada y formula tu pregunta con claridad para recibir
          la guía de los arcanos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Selección de Tirada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spreadTypes.map((spread) => (
            <motion.button
              key={spread.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSpread(spread.id)}
              className={`p-4 rounded-xl border ${
                selectedSpread === spread.id
                  ? "border-twilight-accent bg-twilight-accent/5"
                  : "border-twilight-secondary/10 hover:border-twilight-accent/20"
              } transition-colors`}>
              <div className="flex flex-col items-center text-center">
                <GiCardPlay
                  className={`w-8 h-8 mb-2 ${
                    selectedSpread === spread.id
                      ? "text-twilight-accent"
                      : "text-twilight-text/70"
                  }`}
                />
                <h3 className="font-medium text-twilight-text mb-1">
                  {spread.name}
                </h3>
                <p className="text-sm text-twilight-text/70">
                  {spread.description}
                </p>
                <span className="mt-2 text-xs text-twilight-text/50">
                  {spread.cards} {spread.cards === 1 ? "carta" : "cartas"}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Formulario de Pregunta */}
        <div className="max-w-2xl mx-auto">
          <label
            htmlFor="question"
            className="block text-twilight-text font-medium mb-2">
            Tu Pregunta
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Escribe tu pregunta aquí..."
            className="w-full h-32 p-4 rounded-xl bg-twilight-background border border-twilight-secondary/10 focus:border-twilight-accent/50 focus:ring-1 focus:ring-twilight-accent/50 transition-colors resize-none"
          />
        </div>

        {/* Botón de Inicio */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!selectedSpread || !question.trim() || isShuffling}
            onClick={handleStartReading}
            className={`px-8 py-4 rounded-xl ${
              !selectedSpread || !question.trim() || isShuffling
                ? "bg-twilight-accent/20 text-twilight-text/50 cursor-not-allowed"
                : "bg-twilight-accent text-white shadow-lg hover:shadow-xl"
            } transition-all`}>
            <span className="flex items-center gap-2">
              {isShuffling ? (
                <>
                  <GiCardRandom className="w-6 h-6 animate-spin" />
                  Barajando...
                </>
              ) : (
                <>
                  <GiCardDraw className="w-6 h-6" />
                  Comenzar Lectura
                </>
              )}
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NewReading;