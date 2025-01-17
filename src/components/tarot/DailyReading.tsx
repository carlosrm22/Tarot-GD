/**
 * @fileoverview Componente para mostrar la lectura diaria del Tarot
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArcanoMayor } from '../../types/tarot';
import { obtenerCartaDiaria } from '../../services/tarot';

const DailyReading: React.FC = () => {
  const [dailyCard, setDailyCard] = useState<ArcanoMayor | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cargarCartaDiaria = async () => {
      try {
        const carta = await obtenerCartaDiaria();
        setDailyCard(carta);
      } catch (error) {
        console.error('Error al cargar la carta diaria:', error);
      } finally {
        setIsLoading(false);
      }
    };

    cargarCartaDiaria();
  }, []);

  const today = format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es });

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-2">
          Lectura Diaria
        </h1>
        <p className="text-twilight-text/80 capitalize">{today}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-twilight-accent"></div>
          </motion.div>
        ) : dailyCard ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8">
            {/* Carta */}
            <div className="relative aspect-[2/3] bg-twilight-card rounded-xl overflow-hidden shadow-xl">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsRevealed(!isRevealed)}
                className="w-full h-full">
                {isRevealed ? (
                  <img
                    src={`/cards/${dailyCard.nombre.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={dailyCard.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-twilight-card-back"></div>
                )}
              </motion.button>
            </div>

            {/* Interpretación */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isRevealed ? 1 : 0, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-twilight-text mb-2">
                  {dailyCard.nombre}
                </h2>
                <div className="flex gap-4 text-sm text-twilight-text/70">
                  <span>{dailyCard.signo}</span>
                  {dailyCard.elemento && (
                    <>
                      <span>•</span>
                      <span>{dailyCard.elemento}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="prose prose-twilight">
                <p className="text-twilight-text/80">{dailyCard.descripcion}</p>
              </div>

              <div>
                <h3 className="font-medium text-twilight-accent mb-2">
                  Significado
                </h3>
                <p className="text-twilight-text/80">{dailyCard.significado}</p>
              </div>

              {dailyCard.correspondenciaCabalistica && (
                <div>
                  <h3 className="font-medium text-twilight-accent mb-2">
                    Correspondencia Cabalística
                  </h3>
                  <p className="text-twilight-text/80">
                    {dailyCard.correspondenciaCabalistica.titulo}
                  </p>
                  <p className="text-twilight-text/80 mt-2">
                    {dailyCard.correspondenciaCabalistica.accion}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <div className="text-center text-twilight-text/80">
            No se pudo cargar la carta del día.
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyReading;