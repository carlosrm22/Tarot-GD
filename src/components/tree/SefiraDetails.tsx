import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SefiraDetailsProps {
  nombre: string;
  titulo: string;
  descripcion: string;
  elemento: string;
  planeta: string;
  nombre_divino: string;
  isVisible: boolean;
}

const SefiraDetails: React.FC<SefiraDetailsProps> = ({
  nombre,
  titulo,
  descripcion,
  elemento,
  planeta,
  nombre_divino,
  isVisible
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute bottom-4 left-4 right-4 bg-twilight-background/95 backdrop-blur-md rounded-lg p-6 shadow-lg border border-twilight-secondary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gradient mb-2">
            {nombre} - {titulo}
          </h3>
          <p className="text-twilight-text/80 mb-4">{descripcion}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-twilight-accent mb-1">Elemento</h4>
              <p className="text-twilight-text/80">{elemento}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-twilight-accent mb-1">Planeta</h4>
              <p className="text-twilight-text/80">{planeta}</p>
            </div>
            <div className="col-span-2">
              <h4 className="text-sm font-medium text-twilight-accent mb-1">Nombre Divino</h4>
              <p className="text-twilight-text/80 font-hebrew">{nombre_divino}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SefiraDetails;