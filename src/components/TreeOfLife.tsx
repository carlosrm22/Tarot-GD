import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @fileoverview Componente que representa el Árbol de la Vida (Etz Chaim) de la Cábala.
 * Este diagrama muestra las 10 Sefirot y los 22 senderos que las conectan, cada uno
 * correspondiendo a una carta del Tarot y una letra hebrea.
 */

interface Sefira {
  nombre: string;
  titulo: string;
  descripcion: string;
  color: string;
  elemento: string;
  planeta: string;
  nombre_divino: string;
}

interface TreeOfLifeProps {
  sendero: string;
  showDetails?: boolean;
}

const SEPHIROTH_INFO: { [key: string]: Sefira } = {
  kether: {
    nombre: "Kether",
    titulo: "La Corona",
    descripcion: "El punto primordial de la creación, la unidad divina.",
    color: "#ffffff",
    elemento: "Aire primordial",
    planeta: "Primer móvil",
    nombre_divino: "Eheieh"
  },
  chokmah: {
    nombre: "Chokmah",
    titulo: "La Sabiduría",
    descripcion: "La fuerza dinámica y masculina del universo.",
    color: "#4169E1",
    elemento: "Fuego",
    planeta: "Zodíaco",
    nombre_divino: "Yah"
  },
  binah: {
    nombre: "Binah",
    titulo: "El Entendimiento",
    descripcion: "La forma receptiva y femenina del universo.",
    color: "#4B0082",
    elemento: "Agua",
    planeta: "Saturno",
    nombre_divino: "YHVH Elohim"
  },
  chesed: {
    nombre: "Chesed",
    titulo: "La Misericordia",
    descripcion: "La gracia y el amor expansivo.",
    color: "#1E90FF",
    elemento: "Agua",
    planeta: "Júpiter",
    nombre_divino: "El"
  },
  geburah: {
    nombre: "Geburah",
    titulo: "La Severidad",
    descripcion: "El juicio y la restricción necesaria.",
    color: "#FF0000",
    elemento: "Fuego",
    planeta: "Marte",
    nombre_divino: "Elohim Gibor"
  },
  tiphereth: {
    nombre: "Tiphereth",
    titulo: "La Belleza",
    descripcion: "El centro armonizador del árbol.",
    color: "#FFD700",
    elemento: "Aire",
    planeta: "Sol",
    nombre_divino: "YHVH Eloah VeDaath"
  },
  netzach: {
    nombre: "Netzach",
    titulo: "La Victoria",
    descripcion: "Las emociones y el deseo natural.",
    color: "#32CD32",
    elemento: "Agua",
    planeta: "Venus",
    nombre_divino: "YHVH Tzabaoth"
  },
  hod: {
    nombre: "Hod",
    titulo: "El Esplendor",
    descripcion: "El intelecto y la forma.",
    color: "#FF4500",
    elemento: "Aire",
    planeta: "Mercurio",
    nombre_divino: "Elohim Tzabaoth"
  },
  yesod: {
    nombre: "Yesod",
    titulo: "El Fundamento",
    descripcion: "La base de la manifestación material.",
    color: "#9370DB",
    elemento: "Aire",
    planeta: "Luna",
    nombre_divino: "Shaddai El Chai"
  },
  malkuth: {
    nombre: "Malkuth",
    titulo: "El Reino",
    descripcion: "El mundo material y físico.",
    color: "#8B4513",
    elemento: "Tierra",
    planeta: "Tierra",
    nombre_divino: "Adonai Melekh"
  }
};

const TreeOfLife: React.FC<TreeOfLifeProps> = ({ sendero, showDetails = true }) => {
  const [selectedSefira, setSelectedSefira] = useState<string | null>(null);
  const [hoveredSefira, setHoveredSefira] = useState<string | null>(null);

  // Coordenadas de los Sephiroth en el SVG
  const sephiroth = {
    kether: { x: 100, y: 28 },
    chokmah: { x: 140, y: 60 },
    binah: { x: 60, y: 60 },
    chesed: { x: 140, y: 100 },
    geburah: { x: 60, y: 100 },
    tiphereth: { x: 100, y: 128 },
    netzach: { x: 140, y: 150 },
    hod: { x: 60, y: 150 },
    yesod: { x: 100, y: 180 },
    malkuth: { x: 100, y: 215 }
  };

  const senderos: {
    [key: string]: [keyof typeof sephiroth, keyof typeof sephiroth, string, string];
  } = {
    "11": ["kether", "chokmah", "א", "El Loco"],
    "12": ["kether", "binah", "ב", "El Mago"],
    "13": ["kether", "tiphereth", "ג", "La Sacerdotisa"],
    "14": ["chokmah", "binah", "ד", "La Emperatriz"],
    "15": ["chokmah", "tiphereth", "ה", "El Emperador"],
    "16": ["chokmah", "chesed", "ו", "El Hierofante"],
    "17": ["binah", "tiphereth", "ז", "Los Amantes"],
    "18": ["binah", "geburah", "ח", "La Carroza"],
    "19": ["chesed", "geburah", "ט", "La Fuerza"],
    "20": ["chesed", "tiphereth", "י", "El Ermitaño"],
    "21": ["chesed", "netzach", "כ", "La Rueda"],
    "22": ["geburah", "tiphereth", "ל", "La Justicia"],
    "23": ["geburah", "hod", "מ", "El Colgado"],
    "24": ["tiphereth", "netzach", "נ", "La Muerte"],
    "25": ["tiphereth", "yesod", "ס", "La Templanza"],
    "26": ["tiphereth", "hod", "ע", "El Diablo"],
    "27": ["netzach", "hod", "פ", "La Torre"],
    "28": ["netzach", "yesod", "צ", "La Estrella"],
    "29": ["netzach", "malkuth", "ק", "La Luna"],
    "30": ["yesod", "hod", "ר", "El Sol"],
    "31": ["hod", "malkuth", "ש", "El Juicio"],
    "32": ["yesod", "malkuth", "ת", "El Universo"]
  };

  const currentPath = senderos[sendero];

  const handleSefiraClick = (sefira: string) => {
    setSelectedSefira(selectedSefira === sefira ? null : sefira);
  };

  return (
    <div className="tree-container">
      <svg
        width="200"
        height="250"
        viewBox="40 20 120 200"
        className="tree-of-life"
      >
        {/* Dibuja los senderos */}
        {Object.entries(senderos).map(([pathNum, [start, end]]) => (
          <motion.line
            key={`${start}-${end}`}
            x1={sephiroth[start].x}
            y1={sephiroth[start].y}
            x2={sephiroth[end].x}
            y2={sephiroth[end].y}
            stroke={pathNum === sendero ? "var(--twilight-accent)" : "rgba(255, 255, 255, 0.2)"}
            strokeWidth={pathNum === sendero ? "3" : "1"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}

        {/* Dibuja los Sephiroth */}
        {Object.entries(sephiroth).map(([key, { x, y }]) => (
          <g
            key={key}
            onClick={() => handleSefiraClick(key)}
            onMouseEnter={() => setHoveredSefira(key)}
            onMouseLeave={() => setHoveredSefira(null)}
            style={{ cursor: 'pointer' }}
          >
            <motion.circle
              cx={x}
              cy={y}
              r={selectedSefira === key ? "8" : "6"}
              fill={SEPHIROTH_INFO[key].color}
              stroke={hoveredSefira === key ? "var(--twilight-accent)" : "#fff"}
              strokeWidth="2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <foreignObject
              x={x - 40}
              y={y - 30}
              width="80"
              height="20"
              style={{ pointerEvents: 'none' }}
            >
              <div className={`sefira-label ${hoveredSefira === key ? 'visible' : ''}`}>
                {SEPHIROTH_INFO[key].nombre}
              </div>
            </foreignObject>
          </g>
        ))}

        {/* Muestra la letra hebrea en el sendero actual */}
        {currentPath && (
          <text
            x={(sephiroth[currentPath[0]].x + sephiroth[currentPath[1]].x) / 2}
            y={(sephiroth[currentPath[0]].y + sephiroth[currentPath[1]].y) / 2}
            textAnchor="middle"
            fill="var(--twilight-accent)"
            fontSize="16"
            fontWeight="bold"
          >
            {currentPath[2]}
          </text>
        )}
      </svg>

      {/* Panel de información de la Sefirá seleccionada */}
      <AnimatePresence>
        {selectedSefira && showDetails && (
          <motion.div
            className="sefira-info-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3>{SEPHIROTH_INFO[selectedSefira].nombre} - {SEPHIROTH_INFO[selectedSefira].titulo}</h3>
            <p className="descripcion">{SEPHIROTH_INFO[selectedSefira].descripcion}</p>
            <div className="sefira-details">
              <div className="detail-item">
                <span className="label">Elemento:</span>
                <span>{SEPHIROTH_INFO[selectedSefira].elemento}</span>
              </div>
              <div className="detail-item">
                <span className="label">Planeta:</span>
                <span>{SEPHIROTH_INFO[selectedSefira].planeta}</span>
              </div>
              <div className="detail-item">
                <span className="label">Nombre Divino:</span>
                <span>{SEPHIROTH_INFO[selectedSefira].nombre_divino}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TreeOfLife;
