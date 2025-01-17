/**
 * @fileoverview Componente que muestra todas las cartas del Tarot con sus detalles.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaChessQueen, FaChessKnight } from 'react-icons/fa';

const TodasLasCartas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-twilight-background via-twilight-primary to-twilight-background p-4 sm:p-8">
      {/* Header con efecto de cristal */}
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
          Tarot Esotérico
        </h1>
        <p className="text-lg sm:text-xl text-twilight-text leading-relaxed max-w-2xl mx-auto">
          Explora las cartas del Tarot y sus profundas correspondencias
          esotéricas según el sistema de la Aurora Dorada.
        </p>
      </div>

      {/* Grid de tipos de cartas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Arcanos Mayores */}
        <Link
          to="/cartas/arcanos-mayores"
          className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                   hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="aspect-[3/4] relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/0 El Loco.png`}
              alt="Arcanos Mayores"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-twilight-background/90 to-transparent" />
          </div>
          <div className="p-6 relative">
            <div className="flex items-center mb-4">
              <FaStar className="text-2xl text-twilight-accent group-hover:rotate-180 transition-transform duration-500" />
              <h2 className="text-2xl font-bold ml-4 text-twilight-text">Arcanos Mayores</h2>
            </div>
            <p className="text-twilight-text/80 mb-4">
              Los 22 Arcanos Mayores representan las fuerzas cósmicas y arquetipos
              universales. Cada carta está vinculada a una letra hebrea y un sendero
              en el Árbol de la Vida.
            </p>
            <div className="flex items-center text-twilight-accent group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-2">Explorar</span>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Arcanos Menores */}
        <Link
          to="/arcanos-menores"
          className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                   hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="aspect-[3/4] relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/as-bastos.png`}
              alt="Arcanos Menores"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-twilight-background/90 to-transparent" />
          </div>
          <div className="p-6 relative">
            <div className="flex items-center mb-4">
              <FaChessKnight className="text-2xl text-twilight-accent group-hover:rotate-180 transition-transform duration-500" />
              <h2 className="text-2xl font-bold ml-4 text-twilight-text">Arcanos Menores</h2>
            </div>
            <p className="text-twilight-text/80 mb-4">
              Los 36 Arcanos Menores (del 2 al 10) representan las influencias
              planetarias en cada elemento. Cada palo corresponde a un elemento y
              un mundo cabalístico.
            </p>
            <div className="flex items-center text-twilight-accent group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-2">Explorar</span>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Cartas Cortesanas */}
        <Link
          to="/cartas-cortesanas"
          className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                   hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="aspect-[3/4] relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/reina-copas.png`}
              alt="Cartas Cortesanas"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-twilight-background/90 to-transparent" />
          </div>
          <div className="p-6 relative">
            <div className="flex items-center mb-4">
              <FaChessQueen className="text-2xl text-twilight-accent group-hover:rotate-180 transition-transform duration-500" />
              <h2 className="text-2xl font-bold ml-4 text-twilight-text">Cartas Cortesanas</h2>
            </div>
            <p className="text-twilight-text/80 mb-4">
              Las 16 Cartas Cortesanas (Reyes, Reinas, Caballeros y Pajes)
              representan aspectos de la personalidad y tipos psicológicos en
              cada elemento.
            </p>
            <div className="flex items-center text-twilight-accent group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-2">Explorar</span>
              <FaArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TodasLasCartas;