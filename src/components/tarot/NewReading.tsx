/**
 * @fileoverview Componente para realizar nuevas lecturas de Tarot
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiCardRandom, GiCardDraw, GiCardPlay } from 'react-icons/gi';
import { MetodoLectura } from '../../types/tarot';
import { obtenerCartaAleatoria } from '../../services/tarot';

interface TipoTirada {
  id: string;
  nombre: string;
  descripcion: string;
  numCartas: number;
  metodo: MetodoLectura;
}

const tiposTirada: TipoTirada[] = [
  {
    id: 'simple',
    nombre: 'Tirada Simple',
    descripcion: 'Una carta para respuesta directa',
    numCartas: 1,
    metodo: {
      nombre: 'Tirada Simple',
      descripcion: 'Método básico para obtener una respuesta directa a una pregunta específica.',
      pasos: [
        {
          nombre: 'Preparación',
          descripcion: 'Concentración en la pregunta',
          instrucciones: [
            'Medita brevemente sobre tu pregunta',
            'Baraja las cartas mientras mantienes tu pregunta en mente',
            'Corta el mazo una vez'
          ]
        },
        {
          nombre: 'Lectura',
          descripcion: 'Interpretación de la carta',
          instrucciones: [
            'Extrae la carta superior del mazo',
            'Observa todos los elementos de la carta',
            'Interpreta el significado en relación a tu pregunta'
          ]
        }
      ]
    }
  },
  {
    id: 'cruz-celta',
    nombre: 'Cruz Celta',
    descripcion: 'Tirada completa de 10 cartas',
    numCartas: 10,
    metodo: {
      nombre: 'Cruz Celta',
      descripcion: 'Una de las tiradas más completas y tradicionales del Tarot.',
      pasos: [
        {
          nombre: 'Preparación',
          descripcion: 'Disposición de las cartas',
          instrucciones: [
            'Baraja las cartas concentrándote en tu consulta',
            'Corta el mazo tres veces',
            'Coloca las cartas en la disposición de la Cruz Celta'
          ]
        },
        {
          nombre: 'Lectura',
          descripcion: 'Interpretación por posición',
          instrucciones: [
            'Interpreta cada posición en orden',
            'Relaciona las cartas entre sí',
            'Sintetiza el mensaje general'
          ],
          significado: 'Cada posición tiene un significado específico que contribuye a la interpretación general.'
        }
      ]
    }
  }
];

const NewReading: React.FC = () => {
  const [selectedSpread, setSelectedSpread] = useState<string | null>(null);
  const [question, setQuestion] = useState('');
  const [isShuffling, setIsShuffling] = useState(false);

  const handleStartReading = async () => {
    if (!selectedSpread || !question.trim()) return;

    setIsShuffling(true);
    try {
      const tirada = tiposTirada.find(t => t.id === selectedSpread);
      if (!tirada) throw new Error('Tirada no válida');

      // Obtener las cartas necesarias
      const cartas = await Promise.all(
        Array(tirada.numCartas).fill(null).map(() =>
          obtenerCartaAleatoria(Math.random() > 0.7 ? 'mayor' : 'menor')
        )
      );

      // TODO: Navegar a la vista de lectura con las cartas seleccionadas
      console.log('Cartas seleccionadas:', cartas);
    } catch (error) {
      console.error('Error al iniciar la lectura:', error);
    } finally {
      setIsShuffling(false);
    }
  };

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tiposTirada.map((tipo) => (
            <motion.button
              key={tipo.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSpread(tipo.id)}
              className={`p-6 rounded-xl text-left transition-colors ${
                selectedSpread === tipo.id
                  ? 'bg-twilight-accent text-white'
                  : 'bg-twilight-card hover:bg-twilight-card/80 text-twilight-text'
              }`}>
              <h3 className="text-lg font-semibold mb-2">{tipo.nombre}</h3>
              <p className="text-sm opacity-80">{tipo.descripcion}</p>
              <div className="mt-4 flex items-center gap-2">
                <GiCardPlay className="w-5 h-5" />
                <span className="text-sm">{tipo.numCartas} cartas</span>
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
                ? 'bg-twilight-accent/20 text-twilight-text/50 cursor-not-allowed'
                : 'bg-twilight-accent text-white shadow-lg hover:shadow-xl'
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