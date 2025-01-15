import React from 'react';

interface TreeOfLifeProps {
  sendero: string;
}

const TreeOfLife: React.FC<TreeOfLifeProps> = ({ sendero }) => {
  // Coordenadas de los Sephiroth
  const sephiroth = {
    kether: { x: 100, y: 20 },    // Corona
    chokmah: { x: 40, y: 60 },    // Sabiduría
    binah: { x: 160, y: 60 },     // Entendimiento
    chesed: { x: 60, y: 100 },    // Misericordia
    geburah: { x: 140, y: 100 },  // Severidad
    tiphereth: { x: 100, y: 140 }, // Belleza
    netzach: { x: 60, y: 180 },   // Victoria
    hod: { x: 140, y: 180 },      // Esplendor
    yesod: { x: 100, y: 220 },    // Fundamento
    malkuth: { x: 100, y: 260 }   // Reino
  };

  // Definición de los senderos
  const senderos: { [key: string]: [keyof typeof sephiroth, keyof typeof sephiroth] } = {
    "11": ["kether", "chokmah"],     // El Loco
    "12": ["kether", "binah"],       // El Mago
    "13": ["kether", "tiphereth"],   // La Sacerdotisa
    "14": ["chokmah", "binah"],      // La Emperatriz
    "15": ["chokmah", "tiphereth"],  // El Emperador
    "16": ["chokmah", "chesed"],     // El Hierofante
    "17": ["binah", "tiphereth"],    // Los Amantes
    "18": ["binah", "geburah"],      // La Carroza
    "19": ["chesed", "geburah"],     // La Fuerza
    "20": ["chesed", "tiphereth"],   // El Ermitaño
    "21": ["chesed", "netzach"],     // La Rueda de la Fortuna
    "22": ["geburah", "tiphereth"],  // La Justicia
    "23": ["geburah", "hod"],        // El Colgado
    "24": ["tiphereth", "netzach"],  // La Muerte
    "25": ["tiphereth", "yesod"],    // La Templanza
    "26": ["tiphereth", "hod"],      // El Diablo
    "27": ["netzach", "hod"],        // La Torre
    "28": ["netzach", "yesod"],      // La Estrella
    "29": ["hod", "yesod"],          // La Luna
    "30": ["yesod", "malkuth"],      // El Sol
    "31": ["hod", "malkuth"],        // El Juicio
    "32": ["netzach", "malkuth"]     // El Universo
  };

  const currentPath = senderos[sendero];

  return (
    <svg width="200" height="280" viewBox="0 0 200 280" className="tree-of-life">
      {/* Dibuja el sendero actual en dorado */}
      {currentPath && (
        <line
          x1={sephiroth[currentPath[0]].x}
          y1={sephiroth[currentPath[0]].y}
          x2={sephiroth[currentPath[1]].x}
          y2={sephiroth[currentPath[1]].y}
          stroke="gold"
          strokeWidth="2"
        />
      )}

      {/* Dibuja los Sephiroth */}
      {Object.entries(sephiroth).map(([key, { x, y }]) => (
        <circle
          key={key}
          cx={x}
          cy={y}
          r="4"
          fill="black"
          stroke="white"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
};

export default TreeOfLife;