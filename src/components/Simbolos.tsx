import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Simbolos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('pentagramas');

  const categories = {
    pentagramas: {
      title: 'Pentagramas',
      path: '/images/Pentagramas'
    },
    hexagramas: {
      title: 'Hexagramas',
      path: '/images/Hexagramas'
    },
    sigilos: {
      title: 'Sigilos',
      path: '/images/Sigilos'
    },
    talismanes: {
      title: 'Talismanes',
      path: '/images/Talismanes'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4"
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
        Símbolos Mágicos
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(categories).map(([key, { title }]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === key
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí se cargarán las imágenes de la categoría seleccionada */}
        <div className="text-center text-gray-600">
          Selecciona una categoría para ver los símbolos correspondientes
        </div>
      </div>
    </motion.div>
  );
};

export default Simbolos;