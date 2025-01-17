/**
 * @fileoverview Componente para explorar y estudiar los Arcanos Mayores.
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaBook } from "react-icons/fa";

interface ArcanoMayor {
  id: string;
  number: number;
  name: string;
  image: string;
  hebrewLetter: string;
  element: string;
  zodiacSign: string;
  path: string;
  description: string;
  keywords: string[];
}

const ArcanosMayores: React.FC = () => {
  const [arcanos, setArcanos] = useState<ArcanoMayor[]>([]);
  const [selectedArcano, setSelectedArcano] = useState<ArcanoMayor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Cargar datos de los arcanos mayores
    setTimeout(() => {
      setArcanos([
        {
          id: "1",
          number: 1,
          name: "El Mago",
          image: "/cards/magician.jpg",
          hebrewLetter: "ב",
          element: "Aire",
          zodiacSign: "Mercurio",
          path: "Beth",
          description: "El Mago representa el poder de la manifestación y la voluntad consciente.",
          keywords: ["Voluntad", "Habilidad", "Manifestación", "Poder"],
        },
        // ... más arcanos
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
          Arcanos Mayores
        </h1>
        <p className="text-twilight-text/80 max-w-2xl mx-auto">
          Explora los 22 Arcanos Mayores del Tarot y su profundo significado en la
          tradición de la Golden Dawn.
        </p>
      </div>

      {/* Grid de Arcanos */}
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-twilight-accent mx-auto" />
            <p className="mt-4 text-twilight-text">Cargando arcanos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {arcanos.map((arcano) => (
              <motion.button
                key={arcano.id}
                onClick={() => setSelectedArcano(arcano)}
                whileHover={{ scale: 1.05 }}
                className="aspect-[2/3] relative rounded-lg overflow-hidden group">
                <img
                  src={arcano.image}
                  alt={arcano.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 text-white/90 mb-1">
                      <FaStar className="w-4 h-4" />
                      <span>{arcano.number}</span>
                    </div>
                    <h3 className="text-white font-medium text-lg">
                      {arcano.name}
                    </h3>
                    <div className="flex gap-2 text-xs text-white/70">
                      <span>{arcano.hebrewLetter}</span>
                      <span>•</span>
                      <span>{arcano.path}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Modal de detalle */}
      {selectedArcano && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedArcano(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-twilight-background rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArcano(null)}
              className="absolute top-4 right-4 text-twilight-text/50 hover:text-twilight-text">
              <span className="sr-only">Cerrar</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={selectedArcano.image}
                  alt={selectedArcano.name}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <FaStar className="w-5 h-5 text-twilight-accent" />
                  <h2 className="text-2xl font-bold text-twilight-text">
                    {selectedArcano.number}. {selectedArcano.name}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-twilight-text/70 mb-1">
                      Letra Hebrea
                    </h3>
                    <p className="text-twilight-text">{selectedArcano.hebrewLetter}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-twilight-text/70 mb-1">
                      Sendero
                    </h3>
                    <p className="text-twilight-text">{selectedArcano.path}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-twilight-text/70 mb-1">
                      Elemento
                    </h3>
                    <p className="text-twilight-text">{selectedArcano.element}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-twilight-text/70 mb-1">
                      Signo
                    </h3>
                    <p className="text-twilight-text">{selectedArcano.zodiacSign}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-twilight-text mb-2">
                    Descripción
                  </h3>
                  <p className="text-twilight-text/80">{selectedArcano.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-twilight-text mb-2">
                    Palabras Clave
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedArcano.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 rounded-full bg-twilight-accent/10 text-twilight-accent text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ArcanosMayores;