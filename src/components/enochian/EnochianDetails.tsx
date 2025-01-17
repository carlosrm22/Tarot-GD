import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnochianTable, EnochianCall } from '../../data/enochian';
import { FaTimes } from 'react-icons/fa';

interface EnochianDetailsProps {
  item: EnochianTable | EnochianCall | null;
  onClose: () => void;
}

const EnochianDetails: React.FC<EnochianDetailsProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isCall = 'texto_original' in item;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-twilight-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-twilight-background p-4 border-b border-twilight-secondary/20 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-twilight-accent">
              {isCall ? (item as EnochianCall).titulo : (item as EnochianTable).title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-twilight-secondary/20 rounded-full transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {isCall ? (
              // Contenido para llamadas
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Texto Original</h3>
                  <p className="text-twilight-text/80 whitespace-pre-wrap">
                    {(item as EnochianCall).texto_original}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Traducción</h3>
                  <p className="text-twilight-text/80 whitespace-pre-wrap">
                    {(item as EnochianCall).traduccion}
                  </p>
                </div>
              </>
            ) : (
              // Contenido para tablas
              <div className="mb-6">
                <img
                  src={(item as EnochianTable).publicPath}
                  alt={(item as EnochianTable).title}
                  className="w-full rounded-lg shadow-lg mb-4"
                />
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Uso</h3>
              <p className="text-twilight-text/80">
                {isCall ? (item as EnochianCall).uso : (item as EnochianTable).uso}
              </p>
            </div>

            {(item.elemento || item.direccion) && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {item.elemento && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Elemento</h3>
                    <p className="text-twilight-text/80">{item.elemento}</p>
                  </div>
                )}
                {item.direccion && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                    <p className="text-twilight-text/80">{item.direccion}</p>
                  </div>
                )}
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-2">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-twilight-accent/20 text-twilight-text rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnochianDetails;