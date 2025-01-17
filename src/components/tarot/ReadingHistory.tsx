/**
 * @fileoverview Componente para mostrar el historial de lecturas de Tarot.
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHistory, FaCalendar, FaSearch } from "react-icons/fa";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Reading {
  id: string;
  date: Date;
  type: string;
  question?: string;
  cards: {
    name: string;
    position: string;
    isReversed: boolean;
  }[];
  notes?: string;
}

const ReadingHistory: React.FC = () => {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implementar carga de lecturas desde API/BD
    setTimeout(() => {
      setReadings([
        {
          id: "1",
          date: new Date(),
          type: "Tirada Simple",
          question: "¿Qué energías me rodean hoy?",
          cards: [
            {
              name: "El Mago",
              position: "Presente",
              isReversed: false,
            },
          ],
          notes: "Una lectura reveladora sobre mi potencial creativo.",
        },
        // ... más lecturas
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const filteredReadings = readings.filter(
    (reading) =>
      reading.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reading.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reading.notes?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
          Historial de Lecturas
        </h1>
        <p className="text-twilight-text/80 max-w-2xl mx-auto">
          Revisa tus lecturas anteriores y observa tu progreso en el camino del Tarot.
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar en el historial..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-twilight-background border border-twilight-secondary/10 focus:border-twilight-accent/50 focus:ring-1 focus:ring-twilight-accent/50"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-twilight-text/50" />
        </div>
      </div>

      {/* Lista de lecturas */}
      <div className="max-w-4xl mx-auto">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-twilight-accent mx-auto" />
            <p className="mt-4 text-twilight-text">Cargando historial...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReadings.map((reading) => (
              <motion.div
                key={reading.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-twilight-background/50 border border-twilight-secondary/10 rounded-xl p-6 hover:border-twilight-accent/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Fecha y tipo */}
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-2 text-twilight-text/70 mb-1">
                      <FaCalendar className="w-4 h-4" />
                      <span>
                        {format(reading.date, "d 'de' MMMM, yyyy", {
                          locale: es,
                        })}
                      </span>
                    </div>
                    <div className="text-twilight-accent font-medium">
                      {reading.type}
                    </div>
                  </div>

                  {/* Pregunta y cartas */}
                  <div className="md:w-1/2">
                    {reading.question && (
                      <p className="text-twilight-text mb-2">{reading.question}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {reading.cards.map((card, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-twilight-accent/10 text-twilight-accent text-sm">
                          {card.name}
                          {card.isReversed && " (Invertida)"}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Notas */}
                  <div className="md:w-1/4">
                    {reading.notes && (
                      <p className="text-sm text-twilight-text/70">
                        {reading.notes}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingHistory;