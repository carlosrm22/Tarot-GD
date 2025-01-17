import React from 'react';
import { motion } from 'framer-motion';
import { EnochianTable as EnochianTableType } from '../../data/enochian';

interface EnochianTableProps {
  table: EnochianTableType;
  onClick: (table: EnochianTableType) => void;
}

const EnochianTable: React.FC<EnochianTableProps> = ({ table, onClick }) => {
  return (
    <motion.div
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(table)}
    >
      <img
        src={table.publicPath}
        alt={table.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-2">{table.title}</h3>
          {table.elemento && (
            <p className="text-white/80">
              Elemento: <span className="font-semibold">{table.elemento}</span>
            </p>
          )}
          {table.direccion && (
            <p className="text-white/80">
              Dirección: <span className="font-semibold">{table.direccion}</span>
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {table.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-twilight-accent/20 text-white rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnochianTable;