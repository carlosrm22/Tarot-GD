/**
 * @fileoverview Componente de página principal que introduce la aplicación y sus secciones.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaLanguage, FaMagic, FaStarOfDavid, FaPenNib, FaDungeon } from 'react-icons/fa';

const Inicio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-twilight-background via-twilight-primary to-twilight-background p-4 sm:p-8">
      {/* Header con efecto de cristal */}
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
          ✧ Portal Místico ✧
        </h1>
        <p className="text-lg sm:text-xl text-twilight-text leading-relaxed max-w-2xl mx-auto">
          Explora el mundo místico del Tarot, a través de sus profundas
          conexiones con la Cábala, el Alefato Hebreo y los Rituales de Alta
          Magia.
        </p>
      </div>

      {/* Grid de secciones principales */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        <Link
          to="/cartas"
          className="group p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                     hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="flex items-center mb-4">
            <FaBook className="text-3xl text-twilight-accent group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold ml-4 text-twilight-text">Tarot</h2>
          </div>
          <p className="text-twilight-text/80">
            Descubre los 22 Arcanos Mayores y sus profundas correspondencias
            esotéricas según el sistema de la Aurora Dorada.
          </p>
        </Link>

        <Link
          to="/alefato"
          className="group p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                     hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="flex items-center mb-4">
            <FaLanguage className="text-3xl text-twilight-accent group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold ml-4 text-twilight-text">Alefato Hebreo</h2>
          </div>
          <p className="text-twilight-text/80">
            Explora las 22 letras hebreas y su conexión mística con los Arcanos
            Mayores del Tarot.
          </p>
        </Link>

        <Link
          to="/rituales"
          className="group p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                     hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="flex items-center mb-4">
            <FaMagic className="text-3xl text-twilight-accent group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold ml-4 text-twilight-text">Rituales</h2>
          </div>
          <p className="text-twilight-text/80">
            Aprende sobre los rituales mágicos y cómo utilizar el Tarot como
            herramienta de transformación espiritual.
          </p>
        </Link>

        <Link
          to="/pentagramas"
          className="group p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                     hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="flex items-center mb-4">
            <FaStarOfDavid className="text-3xl text-twilight-accent group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold ml-4 text-twilight-text">Símbolos Mágicos</h2>
          </div>
          <p className="text-twilight-text/80">
            Descubre el poder de los pentagramas, hexagramas y otros símbolos
            sagrados de la tradición mágica occidental.
          </p>
        </Link>

        <Link
          to="/enoquiano"
          className="group p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                     hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="flex items-center mb-4">
            <FaPenNib className="text-3xl text-twilight-accent group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold ml-4 text-twilight-text">Sistema Enoquiano</h2>
          </div>
          <p className="text-twilight-text/80">
            Explora el lenguaje angélico y su uso en la magia ceremonial
            según la tradición de la Aurora Dorada.
          </p>
        </Link>

        <Link
          to="/armas"
          className="group p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                     hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20"
        >
          <div className="flex items-center mb-4">
            <FaDungeon className="text-3xl text-twilight-accent group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold ml-4 text-twilight-text">Herramientas Mágicas</h2>
          </div>
          <p className="text-twilight-text/80">
            Conoce las armas mágicas, tatvas y otras herramientas esenciales
            para la práctica de la magia ceremonial.
          </p>
        </Link>
      </div>

      {/* Cita inspiradora */}
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20">
        <blockquote className="text-xl sm:text-2xl italic text-twilight-text mb-4">
          "El Tarot es un libro de sabiduría ancestral que contiene todo el
          conocimiento del universo codificado en símbolos."
        </blockquote>
        <cite className="text-twilight-accent">- Tradición Hermética</cite>
      </div>
    </div>
  );
};

export default Inicio;