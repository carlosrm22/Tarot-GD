/**
 * @fileoverview Página principal de la sección de Tarot.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaRandom,
  FaStar,
  FaHistory,
  FaBookOpen,
} from "react-icons/fa";
import { GiCardRandom, GiCardDraw, GiCardPlay } from "react-icons/gi";

const features = [
  {
    id: "lectura-diaria",
    title: "Lectura Diaria",
    description: "Obtén tu lectura personal del día",
    icon: <GiCardDraw className="w-8 h-8" />,
    path: "/tarot/lectura-diaria",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "nueva-lectura",
    title: "Nueva Lectura",
    description: "Realiza una nueva tirada de cartas",
    icon: <GiCardRandom className="w-8 h-8" />,
    path: "/tarot/nueva-lectura",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "todas-cartas",
    title: "Todas las Cartas",
    description: "Explora el significado de cada carta",
    icon: <GiCardPlay className="w-8 h-8" />,
    path: "/tarot/cartas",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "arcanos-mayores",
    title: "Arcanos Mayores",
    description: "Estudio profundo de los 22 Arcanos Mayores",
    icon: <FaStar className="w-8 h-8" />,
    path: "/tarot/arcanos-mayores",
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "historial",
    title: "Historial",
    description: "Revisa tus lecturas anteriores",
    icon: <FaHistory className="w-8 h-8" />,
    path: "/tarot/historial",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "aprender",
    title: "Aprender Tarot",
    description: "Guías y recursos de aprendizaje",
    icon: <FaBookOpen className="w-8 h-8" />,
    path: "/tarot/aprender",
    color: "from-violet-500 to-purple-500",
  },
];

const TarotHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
          Tarot Golden Dawn
        </h1>
        <p className="text-twilight-text/80 max-w-2xl mx-auto">
          Explora los misterios del Tarot a través de lecturas personalizadas,
          aprende su significado profundo y descubre tu camino espiritual.
        </p>
      </div>

      {/* Grid de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {features.map((feature) => (
          <Link
            key={feature.id}
            to={feature.path}
            className="group relative overflow-hidden rounded-2xl p-6 bg-twilight-background/50 border border-twilight-secondary/10 hover:border-twilight-accent/20 transition-all duration-300 backdrop-blur-sm">
            {/* Gradiente de fondo */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />

            <div className="relative flex flex-col h-full">
              {/* Icono */}
              <div className="mb-4 text-twilight-accent">{feature.icon}</div>

              {/* Contenido */}
              <h2 className="text-xl font-semibold mb-2 text-twilight-text group-hover:text-twilight-accent transition-colors">
                {feature.title}
              </h2>
              <p className="text-twilight-text/70 text-sm flex-grow">
                {feature.description}
              </p>

              {/* Flecha indicadora */}
              <div className="mt-4 flex items-center text-twilight-accent/50 group-hover:text-twilight-accent transition-colors">
                <span className="text-sm font-medium">Explorar</span>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Sección de Acceso Rápido */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-twilight-text mb-6">
          Acceso Rápido
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-twilight-accent/10 hover:bg-twilight-accent/20 text-twilight-accent transition-colors">
            <GiCardRandom className="w-5 h-5" />
            <span>Tirada Rápida</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-twilight-accent/10 hover:bg-twilight-accent/20 text-twilight-accent transition-colors">
            <FaBook className="w-5 h-5" />
            <span>Última Lectura</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarotHome;