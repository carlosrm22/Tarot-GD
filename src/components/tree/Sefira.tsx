import React from 'react';
import { motion } from 'framer-motion';

interface SefiraProps {
  nombre: string;
  titulo: string;
  descripcion: string;
  color: string;
  elemento: string;
  planeta: string;
  nombre_divino: string;
  x: number;
  y: number;
  isActive: boolean;
  onClick: () => void;
}

const Sefira: React.FC<SefiraProps> = ({
  nombre,
  titulo,
  color,
  x,
  y,
  isActive,
  onClick
}) => {
  return (
    <g
      transform={`translate(${x},${y})`}
      className="cursor-pointer"
      onClick={onClick}
    >
      <motion.circle
        r={isActive ? "8" : "6"}
        fill={color}
        stroke={isActive ? "var(--twilight-accent)" : "white"}
        strokeWidth={isActive ? "3" : "2"}
        initial={false}
        animate={{
          r: isActive ? 8 : 6,
          strokeWidth: isActive ? 3 : 2
        }}
        whileHover={{
          scale: 1.2,
          strokeWidth: 3
        }}
      />
      <text
        y="20"
        textAnchor="middle"
        className={`text-xs font-medium ${
          isActive ? 'text-twilight-accent' : 'text-twilight-text'
        }`}
      >
        {nombre}
      </text>
      {isActive && (
        <text
          y="35"
          textAnchor="middle"
          className="text-xs text-twilight-text/80"
        >
          {titulo}
        </text>
      )}
    </g>
  );
};

export default Sefira;