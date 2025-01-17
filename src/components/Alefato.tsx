/**
 * @fileoverview Componente interactivo para mostrar el Alefato hebreo con efecto flashcard
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import alefatoData from '../data/alefato.json';
import '../styles/Alefato.css';

interface LetraDetalle {
  nombre: string;
  pronunciacion: string;
  significado: string;
  gematria: number;
  seferYetzira: {
    energia: string;
    simbolo: string;
  };
  goldenDawn: {
    energia: string;
    simbolo: string;
  };
  tarot: {
    nombre: string;
    imagen: string;
  };
  unicode: number;
  letrasLatinas?: string[];
  final?: {
    letra: string;
    gematria: number;
    unicode: number;
  };
}

interface LetrasHebreasBase {
  [key: string]: LetraDetalle;
}

interface AlefatoData {
  letrasHebreasBase: LetrasHebreasBase;
}

const FlashCard: React.FC<{ letra: string; detalle: LetraDetalle }> = ({ letra, detalle }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-square perspective-1000">
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full h-full cursor-pointer preserve-3d"
      >
        {/* Frente de la carta */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl border border-twilight-secondary/20 bg-twilight-background/50 p-4 flex flex-col items-center justify-center ${isFlipped ? 'invisible' : ''}`}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-6xl md:text-7xl font-hebrew text-twilight-text mb-4"
          >
            {letra}
          </motion.span>
          <span className="text-sm text-twilight-text/60">{detalle.nombre}</span>
        </div>

        {/* Reverso de la carta */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl border border-twilight-secondary/20 bg-twilight-background/50 p-4 overflow-y-auto rotate-y-180 ${!isFlipped ? 'invisible' : ''}`}>
          <div className="space-y-3">
            <div className="text-center mb-4">
              <span className="text-3xl font-hebrew text-twilight-accent">{letra}</span>
              <h3 className="text-lg font-bold text-twilight-text">{detalle.nombre}</h3>
              <p className="text-sm text-twilight-text/60">{detalle.pronunciacion}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-twilight-accent">Significado</h4>
              <p className="text-sm text-twilight-text/80">{detalle.significado}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-twilight-accent">Guematria</h4>
              <p className="text-sm text-twilight-text/80">{detalle.gematria}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-twilight-accent">Sefer Yetzirá</h4>
              <div className="text-sm text-twilight-text/80 flex items-center gap-2">
                <span>{detalle.seferYetzira.energia}</span>
                <span className="text-xl">{detalle.seferYetzira.simbolo}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-twilight-accent">Golden Dawn</h4>
              <div className="text-sm text-twilight-text/80 flex items-center gap-2">
                <span>{detalle.goldenDawn.energia}</span>
                <span className="text-xl">{detalle.goldenDawn.simbolo}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-twilight-accent">Tarot</h4>
              <p className="text-sm text-twilight-text/80">{detalle.tarot.nombre}</p>
            </div>

            {detalle.final && (
              <div>
                <h4 className="text-sm font-medium text-twilight-accent">Forma Final</h4>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-hebrew">{detalle.final.letra}</span>
                  <span className="text-sm text-twilight-text/80">({detalle.final.gematria})</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Alefato: React.FC = () => {
  const letrasHebreas = Object.entries(alefatoData.letrasHebreasBase as LetrasHebreasBase);

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-twilight-text mb-4">
            Alefato Hebreo
          </h1>
          <p className="text-twilight-text/80 max-w-2xl mx-auto">
            Explora las 22 letras sagradas del alfabeto hebreo. Haz clic en cada carta para descubrir sus significados y correspondencias místicas.
          </p>
        </div>

        {/* Grid de flashcards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {letrasHebreas.map(([letra, detalle]) => (
            <FlashCard key={letra} letra={letra} detalle={detalle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alefato;