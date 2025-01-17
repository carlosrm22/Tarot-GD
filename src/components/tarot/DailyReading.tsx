/**
 * @fileoverview Componente para la lectura diaria de Tarot.
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiCardRandom, GiCardDraw } from "react-icons/gi";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Card {
  id: string;
  name: string;
  image: string;
  meaningUpright: string;
  meaningReversed: string;
  description: string;
  element: string;
  zodiacSign: string;
}

const DailyReading: React.FC = () => {
  const [dailyCard, setDailyCard] = useState<Card | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implementar lógica para obtener la carta del día
    // Por ahora usamos datos de ejemplo
    setTimeout(() => {
      setDailyCard({
        id: "1",
        name: "El Mago",
        image: "/cards/magician.jpg",
        meaningUpright: "Manifestación, recursos, poder personal, habilidad",
        meaningReversed: "Manipulación, poder mal usado, talentos sin desarrollar",
        description:
          "El Mago representa la manifestación, el poder personal y la capacidad de transformar la voluntad en realidad.",
        element: "Aire",
        zodiacSign: "Mercurio",
      });
      setIsLoading(false);
    }, 1500);
  }, []);

  const today = format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es });

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-2">
          Lectura Diaria
        </h1>
        <p className="text-twilight-text/80 capitalize">{today}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <GiCardRandom className="w-16 h-16 text-twilight-accent animate-spin" />
            <p className="mt-4 text-twilight-text">Consultando los arcanos...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {dailyCard && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Carta */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative aspect-[2/3] bg-twilight-background/50 rounded-2xl overflow-hidden border border-twilight-secondary/10 shadow-xl">
                  <div
                    className={`absolute inset-0 transition-transform duration-1000 ${
                      isRevealed ? "rotate-0" : "rotate-180"
                    }`}
                    style={{
                      backgroundImage: isRevealed
                        ? `url(${dailyCard.image})`
                        : "url(/cards/back.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {!isRevealed && (
                    <button
                      onClick={() => setIsRevealed(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                      <div className="flex flex-col items-center text-white">
                        <GiCardDraw className="w-12 h-12 mb-2" />
                        <span>Revelar Carta</span>
                      </div>
                    </button>
                  )}
                </motion.div>

                {/* Interpretación */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isRevealed ? 1 : 0, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-twilight-text mb-2">
                      {dailyCard.name}
                    </h2>
                    <div className="flex gap-4 text-sm text-twilight-text/70">
                      <span>{dailyCard.element}</span>
                      <span>•</span>
                      <span>{dailyCard.zodiacSign}</span>
                    </div>
                  </div>

                  <div className="prose prose-twilight">
                    <p className="text-twilight-text/80">{dailyCard.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-twilight-accent mb-2">
                        Significado Derecho
                      </h3>
                      <p className="text-twilight-text/80">{dailyCard.meaningUpright}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-twilight-accent mb-2">
                        Significado Invertido
                      </h3>
                      <p className="text-twilight-text/80">{dailyCard.meaningReversed}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full py-3 rounded-lg bg-twilight-accent/10 hover:bg-twilight-accent/20 text-twilight-accent transition-colors">
                      Guardar Lectura
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default DailyReading;