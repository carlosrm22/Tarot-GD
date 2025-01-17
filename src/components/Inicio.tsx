/**
 * @fileoverview Componente de página principal que introduce la aplicación y sus secciones.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaLanguage,
  FaMagic,
  FaStarOfDavid,
  FaPenNib,
  FaDungeon,
  FaInfoCircle
} from 'react-icons/fa';

interface SeccionInfo {
  ruta: string;
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  icono: React.ReactNode;
}

const secciones: SeccionInfo[] = [
  {
    ruta: "/cartas",
    titulo: "Tarot",
    descripcion: "Descubre los 22 Arcanos Mayores y sus profundas correspondencias esotéricas según el sistema de la Aurora Dorada.",
    descripcionLarga: "Explora el simbolismo profundo de los Arcanos Mayores, sus conexiones con la Cábala, astrología y alquimia. Cada carta es una puerta hacia el conocimiento esotérico y la transformación personal.",
    icono: <FaBook />
  },
  {
    ruta: "/alefato",
    titulo: "Alefato Hebreo",
    descripcion: "Explora las 22 letras hebreas y su conexión mística con los Arcanos Mayores del Tarot.",
    descripcionLarga: "Sumérgete en la sabiduría del alfabeto hebreo, donde cada letra es un símbolo vivo que conecta el mundo material con las realidades espirituales más elevadas.",
    icono: <FaLanguage />
  },
  {
    ruta: "/rituales",
    titulo: "Rituales",
    descripcion: "Aprende sobre los rituales mágicos y cómo utilizar el Tarot como herramienta de transformación espiritual.",
    descripcionLarga: "Descubre los rituales fundamentales de la Aurora Dorada, desde el Ritual del Pilar del Medio hasta complejas invocaciones planetarias, todos diseñados para el desarrollo espiritual.",
    icono: <FaMagic />
  },
  {
    ruta: "/pentagramas",
    titulo: "Símbolos Mágicos",
    descripcion: "Descubre el poder de los pentagramas, hexagramas y otros símbolos sagrados de la tradición mágica occidental.",
    descripcionLarga: "Estudia los símbolos sagrados que han sido utilizados durante milenios para canalizar las fuerzas cósmicas y facilitar la conexión con las realidades superiores.",
    icono: <FaStarOfDavid />
  },
  {
    ruta: "/enoquiano",
    titulo: "Sistema Enoquiano",
    descripcion: "Explora el lenguaje angélico y su uso en la magia ceremonial según la tradición de la Aurora Dorada.",
    descripcionLarga: "Adéntrate en el misterioso lenguaje de los ángeles, sus tableros elementales y su aplicación en la magia ceremonial de alto nivel.",
    icono: <FaPenNib />
  },
  {
    ruta: "/armas",
    titulo: "Herramientas Mágicas",
    descripcion: "Conoce las armas mágicas, tatvas y otras herramientas esenciales para la práctica de la magia ceremonial.",
    descripcionLarga: "Aprende sobre las herramientas sagradas utilizadas en la magia ceremonial, su simbolismo y su correcta consagración y uso en los rituales.",
    icono: <FaDungeon />
  }
];

const Inicio: React.FC = () => {
  const [seccionHover, setSeccionHover] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-twilight-background via-twilight-primary to-twilight-background p-4 sm:p-8">
      {/* Header con efecto de cristal */}
      <motion.div
        className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✧ Portal Místico ✧
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--twilight-text)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explora el mundo místico del Tarot, a través de sus profundas
          conexiones con la Cábala, el Alefato Hebreo y los Rituales de Alta
          Magia.
        </motion.p>
      </motion.div>

      {/* Grid de secciones principales */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {secciones.map((seccion) => (
          <motion.div
            key={seccion.ruta}
            variants={item}
            onHoverStart={() => setSeccionHover(seccion.ruta)}
            onHoverEnd={() => setSeccionHover(null)}
          >
            <Link
              to={seccion.ruta}
              className="group block p-6 rounded-2xl backdrop-blur-md bg-twilight-primary/30 border border-twilight-secondary/20
                       hover:bg-twilight-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-twilight-accent/20
                       relative overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-3xl"
                  style={{ color: 'var(--twilight-accent)' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {seccion.icono}
                </motion.div>
                <h2 className="text-2xl font-bold ml-4" style={{ color: 'var(--twilight-text)' }}>
                  {seccion.titulo}
                </h2>
              </div>

              <motion.div
                initial={{ height: "auto" }}
                animate={{ height: seccionHover === seccion.ruta ? "auto" : "4.5rem" }}
                className="overflow-hidden"
              >
                <p style={{ color: 'var(--twilight-text)', opacity: 0.8 }}>
                  {seccionHover === seccion.ruta ? seccion.descripcionLarga : seccion.descripcion}
                </p>
              </motion.div>

              {seccionHover === seccion.ruta && (
                <motion.div
                  className="absolute bottom-2 right-2 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: 'var(--twilight-accent)' }}
                >
                  <FaInfoCircle className="inline mr-1" /> Click para explorar
                </motion.div>
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Cita inspiradora */}
      <motion.div
        className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.blockquote
          className="text-xl sm:text-2xl italic mb-4"
          style={{ color: 'var(--twilight-text)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          "El Tarot es un libro de sabiduría ancestral que contiene todo el
          conocimiento del universo codificado en símbolos."
        </motion.blockquote>
        <motion.cite
          style={{ color: 'var(--twilight-accent)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          - Tradición Hermética
        </motion.cite>
      </motion.div>
    </div>
  );
};

export default Inicio;