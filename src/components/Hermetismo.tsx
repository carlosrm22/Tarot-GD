/**
 * @fileoverview Componente para la sección de Hermetismo, presentando los principios herméticos
 * y conceptos fundamentales de la filosofía hermética.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFeather, FaBook, FaScroll, FaGem } from 'react-icons/fa';
import { GiEgyptianTemple, GiScrollUnfurled } from 'react-icons/gi';
import { principiosHermeticos, textosHermeticos, conceptosAlquimicos } from '../data/hermetismo';
import type { PrincipioHermetico, TextoHermetico, ConceptoAlquimico } from '../data/hermetismo';

const SeccionPrincipio: React.FC<{ principio: PrincipioHermetico }> = ({ principio }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <motion.div
      layout
      className="bg-twilight-background/50 rounded-xl p-6 border border-twilight-secondary/20"
    >
      <motion.div
        className="cursor-pointer"
        onClick={() => setExpandido(!expandido)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{principio.simbolo}</span>
            <div>
              <h3 className="text-xl font-bold text-twilight-text">{principio.titulo}</h3>
              <p className="text-twilight-text/60 italic">{principio.descripcion}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expandido ? 180 : 0 }}
            className="text-twilight-accent"
          >
            ▼
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {expandido && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4 overflow-hidden"
          >
            <div className="space-y-2">
              <h4 className="font-medium text-twilight-accent">Explicación</h4>
              <ul className="list-disc list-inside space-y-2 text-twilight-text/80">
                {principio.explicacion.map((punto, index) => (
                  <li key={index}>{punto}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-twilight-accent">Aplicaciones Prácticas</h4>
              <ul className="list-disc list-inside space-y-2 text-twilight-text/80">
                {principio.aplicaciones.map((aplicacion, index) => (
                  <li key={index}>{aplicacion}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SeccionTexto: React.FC<{ texto: TextoHermetico }> = ({ texto }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <motion.div
      layout
      className="bg-twilight-background/50 rounded-xl p-6 border border-twilight-secondary/20"
    >
      <motion.div
        className="cursor-pointer"
        onClick={() => setExpandido(!expandido)}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-twilight-text">{texto.titulo}</h3>
            {texto.autor && (
              <p className="text-twilight-text/60">
                por {texto.autor} {texto.fecha && `(${texto.fecha})`}
              </p>
            )}
            <p className="text-twilight-text/80 mt-2">{texto.descripcion}</p>
          </div>
          <motion.div
            animate={{ rotate: expandido ? 180 : 0 }}
            className="text-twilight-accent"
          >
            ▼
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {expandido && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4 overflow-hidden"
          >
            <div className="space-y-2">
              <h4 className="font-medium text-twilight-accent">Contenido Principal</h4>
              <ul className="list-disc list-inside space-y-2 text-twilight-text/80">
                {texto.contenido.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-twilight-accent">Temas Principales</h4>
              <div className="flex flex-wrap gap-2">
                {texto.temas.map((tema, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-twilight-accent/10 text-twilight-accent rounded-full text-sm"
                  >
                    {tema}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SeccionConcepto: React.FC<{ concepto: ConceptoAlquimico }> = ({ concepto }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <motion.div
      layout
      className="bg-twilight-background/50 rounded-xl p-6 border border-twilight-secondary/20"
    >
      <motion.div
        className="cursor-pointer"
        onClick={() => setExpandido(!expandido)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{concepto.simbolo}</span>
            <div>
              <h3 className="text-xl font-bold text-twilight-text">{concepto.nombre}</h3>
              <p className="text-twilight-text/60">{concepto.descripcion}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expandido ? 180 : 0 }}
            className="text-twilight-accent"
          >
            ▼
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {expandido && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4 overflow-hidden"
          >
            <div className="space-y-2">
              <h4 className="font-medium text-twilight-accent">Significado</h4>
              <ul className="list-disc list-inside space-y-2 text-twilight-text/80">
                {concepto.significado.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-twilight-accent">Aplicaciones</h4>
              <ul className="list-disc list-inside space-y-2 text-twilight-text/80">
                {concepto.aplicaciones.map((aplicacion, index) => (
                  <li key={index}>{aplicacion}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Hermetismo: React.FC = () => {
  const [seccionActiva, setSeccionActiva] = useState<string>('principios');

  const secciones = [
    { id: 'principios', titulo: 'Principios Herméticos', icono: <FaFeather className="w-6 h-6" /> },
    { id: 'kybalion', titulo: 'El Kybalion', icono: <FaBook className="w-6 h-6" /> },
    { id: 'tabla', titulo: 'Tabla Esmeralda', icono: <FaScroll className="w-6 h-6" /> },
    { id: 'hermes', titulo: 'Hermes Trismegisto', icono: <GiEgyptianTemple className="w-6 h-6" /> },
    { id: 'textos', titulo: 'Textos Herméticos', icono: <GiScrollUnfurled className="w-6 h-6" /> },
    { id: 'alquimia', titulo: 'Alquimia Hermética', icono: <FaGem className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-twilight-text mb-4">
            Hermetismo
          </h1>
          <p className="text-twilight-text/80 max-w-2xl mx-auto">
            Explora los principios fundamentales y la sabiduría ancestral de la tradición hermética.
          </p>
        </div>

        {/* Navegación de secciones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {secciones.map((seccion) => (
            <motion.button
              key={seccion.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSeccionActiva(seccion.id)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 ${
                seccionActiva === seccion.id
                  ? 'border-twilight-accent bg-twilight-accent/10 text-twilight-accent'
                  : 'border-twilight-secondary/20 text-twilight-text/60 hover:border-twilight-accent/50'
              }`}
            >
              {seccion.icono}
              <span className="text-sm font-medium">{seccion.titulo}</span>
            </motion.button>
          ))}
        </div>

        {/* Contenido de la sección activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={seccionActiva}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {seccionActiva === 'principios' && (
              <div className="space-y-6">
                {principiosHermeticos.map((principio) => (
                  <SeccionPrincipio key={principio.id} principio={principio} />
                ))}
              </div>
            )}

            {seccionActiva === 'textos' && (
              <div className="space-y-6">
                {textosHermeticos.map((texto) => (
                  <SeccionTexto key={texto.id} texto={texto} />
                ))}
              </div>
            )}

            {seccionActiva === 'alquimia' && (
              <div className="space-y-6">
                {conceptosAlquimicos.map((concepto) => (
                  <SeccionConcepto key={concepto.id} concepto={concepto} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hermetismo;