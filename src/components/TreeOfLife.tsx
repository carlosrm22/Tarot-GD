import React from "react";

// Interfaz que define las propiedades que acepta el componente
interface TreeOfLifeProps {
  sendero: string;  // Número del sendero en formato string (ej: "11", "12", etc.)
}

const TreeOfLife: React.FC<TreeOfLifeProps> = ({ sendero }) => {
  // Coordenadas de los Sephiroth en el SVG
  // Cada Sephira tiene una posición x,y específica en el árbol
  const sephiroth = {
    kether: { x: 100, y: 28 }, // Corona - El primer Sephira
    binah: { x: 60, y: 60 }, // Entendimiento - Pilar femenino
    chokmah: { x: 140, y: 60 }, // Sabiduría - Pilar masculino
    geburah: { x: 60, y: 100 }, // Severidad - Pilar femenino
    chesed: { x: 140, y: 100 }, //  Misericordia - Pilar masculino
    tiphereth: { x: 100, y: 128 }, // Belleza - Pilar central
    hod: { x: 60, y: 150 }, // Esplendor - Pilar femenino
    netzach: { x: 140, y: 150 }, // Victoria - Pilar masculino
    yesod: { x: 100, y: 180 }, // Fundamento - Pilar central
    malkuth: { x: 100, y: 215 }, // Reino - Base del árbol
  };

  // Definición de los 22 senderos que conectan los Sephiroth
  // Cada sendero corresponde a una carta del Tarot y una letra hebrea
  const senderos: {
    [key: string]: [keyof typeof sephiroth, keyof typeof sephiroth];
  } = {
    "11": ["kether", "chokmah"],     // El Loco - א Alef
    "12": ["kether", "binah"],       // El Mago - ב Bet
    "13": ["kether", "tiphereth"],   // La Sacerdotisa - ג Gimel
    "14": ["chokmah", "binah"],      // La Emperatriz - ד Dalet
    "15": ["chokmah", "tiphereth"],  // El Emperador - ה Heh
    "16": ["chokmah", "chesed"],     // El Hierofante - ו Vav
    "17": ["binah", "tiphereth"],    // Los Amantes - ז Zayin
    "18": ["binah", "geburah"],      // La Carroza - ח Chet
    "19": ["chesed", "geburah"],     // La Fuerza - ט Tet
    "20": ["chesed", "tiphereth"],   // El Ermitaño - י Yod
    "21": ["chesed", "netzach"],     // La Rueda - כ Kaf
    "22": ["geburah", "tiphereth"],  // La Justicia - ל Lamed
    "23": ["geburah", "hod"],        // El Colgado - מ Mem
    "24": ["tiphereth", "netzach"],  // La Muerte - נ Nun
    "25": ["tiphereth", "yesod"],    // La Templanza - ס Samech
    "26": ["tiphereth", "hod"],      // El Diablo - ע Ayin
    "27": ["netzach", "hod"],        // La Torre - פ Peh
    "28": ["netzach", "yesod"],      // La Estrella - צ Tzaddi
    "29": ["netzach", "malkuth"],    // La Luna - ק Qof
    "30": ["yesod", "hod"],          // El Sol - ר Resh
    "31": ["hod", "malkuth"],        // El Juicio - ש Shin
    "32": ["yesod", "malkuth"],      // El Universo - ת Tav
  };

  // Obtiene el sendero actual basado en la prop recibida
  const currentPath = senderos[sendero];

  return (
    <svg
      width="150"
      height="160"
      viewBox="74 20 50 200"
      className="tree-of-life">
      {/* Dibuja todos los senderos en gris claro */}
      {Object.entries(senderos).map(([_, [start, end]]) => (
        <line
          key={`${start}-${end}`}
          x1={sephiroth[start].x}
          y1={sephiroth[start].y}
          x2={sephiroth[end].x}
          y2={sephiroth[end].y}
          stroke="#ddd"
          strokeWidth="1.5"
        />
      ))}

      {/* Dibuja el sendero actual en rojo */}
      {currentPath && (
        <line
          x1={sephiroth[currentPath[0]].x}
          y1={sephiroth[currentPath[0]].y}
          x2={sephiroth[currentPath[1]].x}
          y2={sephiroth[currentPath[1]].y}
          stroke="#cb1922"
          strokeWidth="5"
        />
      )}

      {/* Dibuja los círculos de los Sephiroth */}
      {Object.entries(sephiroth).map(([key, { x, y }]) => (
        <g key={key}>
          <circle cx={x} cy={y} r="4" fill="#c7c7c7" stroke="#2c2c2c" strokeWidth="1.5" />
          <foreignObject x={x - 30} y={y - 30} width="60" height="20">
            <div className="sefira-label">
              {key}
            </div>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
};

export default TreeOfLife;
