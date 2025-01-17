/**
 * @fileoverview Componente para aprender sobre el Tarot y sus métodos de lectura
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aperturaLlave, reglasGenerales } from '../../data/metodos-lectura';
import { reglasDetalladas, ejemplosInterpretacion } from '../../data/reglas-tarot';
import { FaBook, FaQuestionCircle, FaClipboardList, FaGraduationCap } from 'react-icons/fa';

interface TabProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

interface Subseccion {
  titulo?: string;
  contenido: string | string[] | Record<string, string | string[]>;
}

const Tab: React.FC<TabProps> = ({ label, icon, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
      isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800'
    }`}
    onClick={onClick}
  >
    {icon}
    {label}
  </motion.button>
);

const LearnTarot: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'introduccion' | 'metodos' | 'reglas' | 'ejemplos'>('introduccion');

  const renderSubseccion = (subseccion: Subseccion): JSX.Element => {
    if (Array.isArray(subseccion.contenido)) {
      return (
        <ul className="list-disc pl-6 mb-4">
          {subseccion.contenido.map((item: string, idx: number) => (
            <li key={idx} className="mb-2">{item}</li>
          ))}
        </ul>
      );
    } else if (typeof subseccion.contenido === 'object') {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(subseccion.contenido).map(([key, value]) => (
            <div key={key} className="bg-purple-50 p-3 rounded-lg">
              <span className="font-semibold">{key}:</span> {value}
            </div>
          ))}
        </div>
      );
    }
    return <p className="mb-4">{subseccion.contenido}</p>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Aprende Tarot</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <Tab
          label="Introducción"
          icon={<FaBook />}
          isActive={activeTab === 'introduccion'}
          onClick={() => setActiveTab('introduccion')}
        />
        <Tab
          label="Métodos de Lectura"
          icon={<FaQuestionCircle />}
          isActive={activeTab === 'metodos'}
          onClick={() => setActiveTab('metodos')}
        />
        <Tab
          label="Reglas Detalladas"
          icon={<FaClipboardList />}
          isActive={activeTab === 'reglas'}
          onClick={() => setActiveTab('reglas')}
        />
        <Tab
          label="Ejemplos Prácticos"
          icon={<FaGraduationCap />}
          isActive={activeTab === 'ejemplos'}
          onClick={() => setActiveTab('ejemplos')}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        {activeTab === 'introduccion' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Introducción a la Adivinación con el Tarot</h2>
            <p className="mb-4">{aperturaLlave.descripcion}</p>
            <h3 className="text-xl font-semibold mb-3">Preparación del Adivino</h3>
            <ul className="list-disc pl-6 mb-4">
              {aperturaLlave.preparacion?.map((prep, index) => (
                <li key={index} className="mb-2">{prep}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'metodos' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">{aperturaLlave.nombre}</h2>
            {aperturaLlave.pasos.map((paso, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{paso.nombre}</h3>
                <p className="mb-3">{paso.descripcion}</p>
                <ol className="list-decimal pl-6">
                  {paso.instrucciones.map((instruccion, idx) => (
                    <li key={idx} className="mb-2">{instruccion}</li>
                  ))}
                </ol>
                {paso.significado && (
                  <p className="mt-3 italic">{paso.significado}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reglas' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Reglas Detalladas del Tarot</h2>
            {reglasDetalladas.map((regla, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{regla.titulo}</h3>
                <p className="mb-4">{regla.descripcion}</p>
                {regla.subsecciones?.map((subseccion, idx) => (
                  <div key={idx} className="mb-6">
                    {subseccion.titulo && (
                      <h4 className="text-lg font-medium mb-3">{subseccion.titulo}</h4>
                    )}
                    {renderSubseccion(subseccion)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ejemplos' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Ejemplos de Interpretación</h2>
            <div className="space-y-6">
              {ejemplosInterpretacion.map((ejemplo, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Combinación {index + 1}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {ejemplo.combinacion.map((carta, idx) => (
                      <span key={idx} className="bg-purple-200 px-3 py-1 rounded-full text-sm">
                        {carta}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-800">{ejemplo.interpretacion}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LearnTarot;