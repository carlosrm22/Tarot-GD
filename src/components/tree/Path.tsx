import React from 'react';
import { motion } from 'framer-motion';

interface PathProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  letra: string;
  isActive: boolean;
  onClick: () => void;
}

const Path: React.FC<PathProps> = ({
  x1,
  y1,
  x2,
  y2,
  letra,
  isActive,
  onClick
}) => {
  // Calcular el punto medio para la letra
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  // Calcular el ángulo para rotar la letra
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <g onClick={onClick} className="cursor-pointer">
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? "var(--twilight-accent)" : "white"}
        strokeWidth={isActive ? "3" : "1.5"}
        initial={false}
        animate={{
          strokeWidth: isActive ? 3 : 1.5
        }}
        whileHover={{
          strokeWidth: 3
        }}
      />
      <g transform={`translate(${midX},${midY}) rotate(${angle})`}>
        <text
          textAnchor="middle"
          className={`text-xs font-hebrew ${
            isActive ? 'text-twilight-accent' : 'text-twilight-text'
          }`}
          dy="-5"
        >
          {letra}
        </text>
      </g>
    </g>
  );
};

export default Path;