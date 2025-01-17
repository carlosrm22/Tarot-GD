/**
 * @fileoverview Componente para mostrar la lectura diaria del Tarot
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArcanoMayor } from '../../types/cartas';
import { obtenerCartaDiaria } from '../../services/tarot';

const DailyReading: React.FC = () => {
  const [dailyCard, setDailyCard] = useState<ArcanoMayor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const loadDailyCard = async () => {
      setIsLoading(true);
      try {
        const carta = await obtenerCartaDiaria();
        setDailyCard(carta);
      } catch (error) {
        console.error('Error al cargar la carta diaria:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDailyCard();
  }, []);

  const currentDate = format(new Date(), "d 'de' MMMM, yyyy", { locale: es });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-twilight-background flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-twilight-accent rounded-full border-t-transparent"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
            Carta del Día
          </h1>
          <p className="text-twilight-text/80">
            {currentDate}
          </p>
        </div>

        {dailyCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-twilight-background/50 border border-twilight-secondary/20 rounded-xl p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-twilight-text mb-2">
                  {dailyCard.nombre}
                </h2>
                <p className="text-twilight-accent mb-4">
                  {dailyCard.titulo}
                </p>
                <p className="text-twilight-text/80 mb-6">
                  {dailyCard.descripcion}
                </p>
                <button
                  onClick={() => setIsRevealed(!isRevealed)}
                  className="w-full md:w-auto px-6 py-2 bg-twilight-accent text-white rounded-lg hover:bg-twilight-accent/90 transition-colors"
                >
                  {isRevealed ? 'Ocultar significado' : 'Revelar significado'}
                </button>
              </div>

              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-medium text-twilight-text mb-2">Significado</h3>
                    <p className="text-twilight-text/80">{dailyCard.significado}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-twilight-text mb-2">Atribución</h3>
                    <p className="text-twilight-text/80">{dailyCard.atribucion}</p>
                  </div>
                  <div className="pt-4 border-t border-twilight-secondary/20">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-twilight-accent">Letra Hebrea:</span> {dailyCard.letra} ({dailyCard.hebreo})
                      </div>
                      <div>
                        <span className="text-twilight-accent">Signo:</span> {dailyCard.signo}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DailyReading;