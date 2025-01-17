/**
 * @fileoverview Componente para mostrar la lectura diaria del Tarot
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { obtenerCartaDiaria } from '../../services/tarot';
import { ArcanoMayor, Carta } from '../../types/cartas';

const DailyReading: React.FC = () => {
  const [dailyCard, setDailyCard] = useState<Carta | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const loadDailyCard = async () => {
      setIsLoading(true);
      try {
        const carta = await obtenerCartaDiaria();
        if ('hebreo' in carta) { // Verificamos que sea un Arcano Mayor
          setDailyCard(carta);
        } else {
          console.error('La carta diaria debe ser un Arcano Mayor');
        }
      } catch (error) {
        console.error('Error al cargar la carta diaria:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDailyCard();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-twilight-accent"></div>
      </div>
    );
  }

  if (!dailyCard || !('hebreo' in dailyCard)) {
    return (
      <div className="text-center text-twilight-text/80">
        No se pudo cargar la carta diaria.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-twilight-background/50 border border-twilight-secondary/20 rounded-xl p-6 md:p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-twilight-text mb-2">
            Carta del Día
          </h2>
          <p className="text-twilight-text/80">
            {new Date().toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-twilight-text mb-2">
              {dailyCard.nombre}
            </h3>
            <p className="text-twilight-accent">
              {dailyCard.titulo}
            </p>
            <p className="text-twilight-text/80 mb-6">
              {dailyCard.significado}
            </p>
            <button
              onClick={() => setIsRevealed(!isRevealed)}
              className="px-4 py-2 bg-twilight-accent/10 text-twilight-accent rounded-lg hover:bg-twilight-accent/20 transition-colors"
            >
              {isRevealed ? 'Ocultar detalles' : 'Mostrar detalles'}
            </button>
          </div>

          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-twilight-text/80"
            >
              <div>
                <h4 className="font-medium text-twilight-accent mb-2">Atributos</h4>
                <p><strong>Letra Hebrea:</strong> {dailyCard.hebreo}</p>
                <p><strong>Letra:</strong> {dailyCard.letra}</p>
                <p><strong>Signo:</strong> {dailyCard.signo}</p>
              </div>
              <div>
                <h4 className="font-medium text-twilight-accent mb-2">Significado</h4>
                <p><strong>Atribución:</strong> {dailyCard.atribucion}</p>
                <p><strong>Sendero:</strong> {dailyCard.sendero}</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DailyReading;