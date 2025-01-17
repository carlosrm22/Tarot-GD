import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HerramientasMagicas: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('armas');

  const categories = {
    armas: {
      title: 'Armas Mágicas',
      path: '/images/Armas'
    },
    tatvas: {
      title: 'Tatvas',
      path: '/images/Tatvas'
    },
    formasDivinas: {
      title: 'Formas Divinas',
      path: '/images/Formas Divinas'
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
        Herramientas Mágicas
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
          Selecciona una categoría para ver las herramientas correspondientes
        </div>
      </div>
    </motion.div>
  );
};

export default HerramientasMagicas;