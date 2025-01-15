import React from "react";

/**
 * @fileoverview Componente que representa el Árbol de la Vida (Etz Chaim) de la Cábala.
 * Este diagrama muestra las 10 Sefirot y los 22 senderos que las conectan, cada uno
 * correspondiendo a una carta del Tarot y una letra hebrea.
 */

/**
 * Props para el componente TreeOfLife
 * @typedef {Object} TreeOfLifeProps
 * @property {string} sendero - Número del sendero (11-32) que corresponde a una carta del Tarot
 */
interface TreeOfLifeProps {
  sendero: string;
}

/**
 * Componente TreeOfLife
 *
 * Representa visualmente el Árbol de la Vida cabalístico, mostrando:
 * - Las 10 Sefirot como puntos
 * - Los 22 senderos como líneas
 * - Resalta el sendero específico relacionado con la carta del Tarot actual
 *
 * Estructura de los Pilares:
 * - Pilar Femenino (Izquierda): Binah, Geburah, Hod
 * - Pilar Central: Kether, Tiphereth, Yesod, Malkuth
 * - Pilar Masculino (Derecha): Chokmah, Chesed, Netzach
 *
 * @component
 * @param {TreeOfLifeProps} props - Props del componente
 * @returns {JSX.Element} Componente SVG del Árbol de la Vida
 */
const TreeOfLife: React.FC<TreeOfLifeProps> = ({ sendero }) => {
  // Coordenadas de los Sephiroth en el SVG
  // Cada Sefirá representa una emanación divina y tiene una posición específica
  const sephiroth = {
    kether: { x: 100, y: 28 },    // Corona - La Unidad Primordial
    binah: { x: 60, y: 60 },      // Entendimiento - La Madre Suprema
    chokmah: { x: 140, y: 60 },   // Sabiduría - El Padre
    geburah: { x: 60, y: 100 },   // Severidad - Juicio y Restricción
    chesed: { x: 140, y: 100 },   // Misericordia - Amor y Gracia
    tiphereth: { x: 100, y: 128 }, // Belleza - El Corazón del Árbol
    hod: { x: 60, y: 150 },       // Esplendor - Intelecto y Forma
    netzach: { x: 140, y: 150 },  // Victoria - Emociones y Deseo
    yesod: { x: 100, y: 180 },    // Fundamento - El Canal de las Fuerzas
    malkuth: { x: 100, y: 215 },  // Reino - El Mundo Material
  };

  /**
   * Mapeo de los 22 senderos que conectan las Sefirot
   * Cada sendero corresponde a:
   * - Una carta del Tarot de los Arcanos Mayores
   * - Una letra del alfabeto hebreo
   * - Un símbolo o significado esotérico específico
   */
  const senderos: {
    [key: string]: [keyof typeof sephiroth, keyof typeof sephiroth];
  } = {
    "11": ["kether", "chokmah"],     // El Loco - א Alef - Aire
    "12": ["kether", "binah"],       // El Mago - ב Bet - Mercurio
    "13": ["kether", "tiphereth"],   // La Sacerdotisa - ג Gimel - Luna
    "14": ["chokmah", "binah"],      // La Emperatriz - ד Dalet - Venus
    "15": ["chokmah", "tiphereth"],  // El Emperador - ה Heh - Aries
    "16": ["chokmah", "chesed"],     // El Hierofante - ו Vav - Tauro
    "17": ["binah", "tiphereth"],    // Los Amantes - ז Zayin - Géminis
    "18": ["binah", "geburah"],      // La Carroza - ח Chet - Cáncer
    "19": ["chesed", "geburah"],     // La Fuerza - ט Tet - Leo
    "20": ["chesed", "tiphereth"],   // El Ermitaño - י Yod - Virgo
    "21": ["chesed", "netzach"],     // La Rueda - כ Kaf - Júpiter
    "22": ["geburah", "tiphereth"],  // La Justicia - ל Lamed - Libra
    "23": ["geburah", "hod"],        // El Colgado - מ Mem - Agua
    "24": ["tiphereth", "netzach"],  // La Muerte - נ Nun - Escorpio
    "25": ["tiphereth", "yesod"],    // La Templanza - ס Samech - Sagitario
    "26": ["tiphereth", "hod"],      // El Diablo - ע Ayin - Capricornio
    "27": ["netzach", "hod"],        // La Torre - פ Peh - Marte
    "28": ["netzach", "yesod"],      // La Estrella - צ Tzaddi - Acuario
    "29": ["netzach", "malkuth"],    // La Luna - ק Qof - Piscis
    "30": ["yesod", "hod"],          // El Sol - ר Resh - Sol
    "31": ["hod", "malkuth"],        // El Juicio - ש Shin - Fuego
    "32": ["yesod", "malkuth"],      // El Universo - ת Tav - Saturno
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
