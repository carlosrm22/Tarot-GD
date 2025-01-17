import React from 'react';
import { motion } from 'framer-motion';
import { EnochianCall as EnochianCallType } from '../../data/enochian';

interface EnochianCallProps {
  call: EnochianCallType;
  onClick: (call: EnochianCallType) => void;
}

const EnochianCall: React.FC<EnochianCallProps> = ({ call, onClick }) => {
  return (
    <motion.div
      className="p-6 rounded-lg bg-twilight-secondary/10 hover:bg-twilight-secondary/20 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(call)}
    >
      <h3 className="text-xl font-bold mb-2 text-twilight-accent">{call.titulo}</h3>
      <p className="text-twilight-text/80 mb-4 line-clamp-2">{call.uso}</p>
      <div className="flex flex-wrap gap-2">
        {call.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm bg-twilight-accent/20 text-twilight-text rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      {(call.elemento || call.direccion) && (
        <div className="mt-4 pt-4 border-t border-twilight-secondary/20">
          {call.elemento && (
            <p className="text-twilight-text/80">
              Elemento: <span className="font-semibold">{call.elemento}</span>
            </p>
          )}
          {call.direccion && (
            <p className="text-twilight-text/80">
              Dirección: <span className="font-semibold">{call.direccion}</span>
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default EnochianCall;