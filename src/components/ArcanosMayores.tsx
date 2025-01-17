/**
 * @fileoverview Componente que muestra todas las cartas del Tarot con sus detalles.
 */

import React, { useState } from 'react';
import TreeOfLife from './TreeOfLife';
import arcanosMayoresData from '../Arcanos_Mayores_Tarot.json';
import { ArcanosMayores as ArcanosMayoresType } from '../types/tarot';
import ElementSymbol from './ElementSymbol';
import { FaChevronDown, FaChevronUp, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';

const ArcanosMayores: React.FC = () => {
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});
  const [detallesExpandidos, setDetallesExpandidos] = useState<{ [key: string]: boolean }>({});
  const arcanos_mayores = arcanosMayoresData as ArcanosMayoresType;

  const toggleCard = (numero: number) => {
    setCartasVolteadas(prev => ({
      ...prev,
      [numero]: !prev[numero]
    }));
  };

  const toggleDetalle = (cartaId: number, detalle: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = `${cartaId}-${detalle}`;
    setDetallesExpandidos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDetalleExpandido = (cartaId: number, detalle: string) => {
    return detallesExpandidos[`${cartaId}-${detalle}`] || false;
  };

  const getImagePath = (numero: number, nombre: string) => {
    const nombresEspeciales: { [key: string]: string } = {
      "La Sacerdotisa": "La Gran Sacerdotisa",
      "El Carro": "La Carroza",
      "La Rueda de la Fortuna": "La Rueda de la Fortuna",
      "Templanza": "La Templanza",
    };

    const nombreArchivo = nombresEspeciales[nombre] || nombre;
    return `${process.env.PUBLIC_URL}/images/Arcanos Mayores/${numero} ${nombreArchivo}.png`;
  };

  const expandirTodo = (cartaId: number) => {
    const secciones = ['numero', 'hebreo', 'signo', 'atribucion', 'sendero', 'significado'];
    const nuevosDetalles = { ...detallesExpandidos };
    secciones.forEach(seccion => {
      nuevosDetalles[`${cartaId}-${seccion}`] = true;
    });
    setDetallesExpandidos(nuevosDetalles);
  };

  const contraerTodo = (cartaId: number) => {
    const secciones = ['numero', 'hebreo', 'signo', 'atribucion', 'sendero', 'significado'];
    const nuevosDetalles = { ...detallesExpandidos };
    secciones.forEach(seccion => {
      nuevosDetalles[`${cartaId}-${seccion}`] = false;
    });
    setDetallesExpandidos(nuevosDetalles);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-twilight-background via-twilight-primary to-twilight-background p-4 sm:p-8">
      {/* Header con efecto de cristal */}
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
          Arcanos Mayores
        </h1>
        <p className="text-lg sm:text-xl text-twilight-text leading-relaxed max-w-2xl mx-auto">
          Explora los 22 Arcanos Mayores del Tarot y sus profundas correspondencias
          esotéricas según el sistema de la Aurora Dorada.
        </p>
      </div>

      {/* Grid de cartas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {arcanos_mayores.arcanos.arcanos_mayores.map(carta => (
          <div
            key={carta.numero}
            className={`group perspective-1000 ${cartasVolteadas[carta.numero] ? 'flipped' : ''}`}
            onClick={() => toggleCard(carta.numero)}
          >
            <div className="relative w-full transition-transform duration-700 transform-style-3d cursor-pointer">
              {/* Frente de la carta */}
              <div className={`absolute w-full backface-hidden transition-transform duration-700
                ${cartasVolteadas[carta.numero] ? 'rotate-y-180' : ''}`}>
                <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-twilight group-hover:scale-105 transition-all duration-300">
                  <img
                    src={getImagePath(carta.numero, carta.nombre)}
                    alt={carta.nombre}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Reverso de la carta */}
              <div className={`absolute w-full backface-hidden bg-twilight-primary/30 backdrop-blur-md border border-twilight-secondary/20
                rounded-2xl p-6 transform rotate-y-180 transition-transform duration-700
                ${cartasVolteadas[carta.numero] ? 'rotate-y-0' : ''}`}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-twilight-text">{carta.nombre}</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          expandirTodo(carta.numero);
                        }}
                        className="p-2 text-twilight-accent hover:text-twilight-secondary transition-colors"
                        title="Expandir todo"
                      >
                        <FaExpandAlt />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          contraerTodo(carta.numero);
                        }}
                        className="p-2 text-twilight-accent hover:text-twilight-secondary transition-colors"
                        title="Contraer todo"
                      >
                        <FaCompressAlt />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg text-twilight-accent italic">{carta.titulo}</h3>

                  <div className="space-y-4">
                    {/* Número */}
                    <div className="card-detail-section">
                      <button
                        className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-primary/20 hover:bg-twilight-primary/30 transition-colors"
                        onClick={(e) => toggleDetalle(carta.numero, 'numero', e)}
                      >
                        <span className="text-twilight-text font-medium">Número</span>
                        {isDetalleExpandido(carta.numero, 'numero') ? (
                          <FaChevronUp className="text-twilight-accent" />
                        ) : (
                          <FaChevronDown className="text-twilight-accent" />
                        )}
                      </button>
                      {isDetalleExpandido(carta.numero, 'numero') && (
                        <div className="p-3 text-twilight-text/80">
                          {carta.numero}
                        </div>
                      )}
                    </div>

                    {/* Letra Hebrea */}
                    <div className="card-detail-section">
                      <button
                        className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-primary/20 hover:bg-twilight-primary/30 transition-colors"
                        onClick={(e) => toggleDetalle(carta.numero, 'hebreo', e)}
                      >
                        <span className="text-twilight-text font-medium">Letra Hebrea</span>
                        {isDetalleExpandido(carta.numero, 'hebreo') ? (
                          <FaChevronUp className="text-twilight-accent" />
                        ) : (
                          <FaChevronDown className="text-twilight-accent" />
                        )}
                      </button>
                      {isDetalleExpandido(carta.numero, 'hebreo') && (
                        <div className="p-3 text-twilight-text/80 flex items-center justify-between">
                          <span>{carta.hebreo}</span>
                          <span className="text-2xl text-twilight-accent">{carta.letra}</span>
                        </div>
                      )}
                    </div>

                    {/* Signo */}
                    <div className="card-detail-section">
                      <button
                        className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-primary/20 hover:bg-twilight-primary/30 transition-colors"
                        onClick={(e) => toggleDetalle(carta.numero, 'signo', e)}
                      >
                        <span className="text-twilight-text font-medium">Signo</span>
                        {isDetalleExpandido(carta.numero, 'signo') ? (
                          <FaChevronUp className="text-twilight-accent" />
                        ) : (
                          <FaChevronDown className="text-twilight-accent" />
                        )}
                      </button>
                      {isDetalleExpandido(carta.numero, 'signo') && (
                        <div className="p-3 text-twilight-text/80 flex items-center justify-between">
                          <span>{carta.signo}</span>
                          <ElementSymbol element={carta.signo} />
                        </div>
                      )}
                    </div>

                    {/* Atribución */}
                    <div className="card-detail-section">
                      <button
                        className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-primary/20 hover:bg-twilight-primary/30 transition-colors"
                        onClick={(e) => toggleDetalle(carta.numero, 'atribucion', e)}
                      >
                        <span className="text-twilight-text font-medium">Atribución</span>
                        {isDetalleExpandido(carta.numero, 'atribucion') ? (
                          <FaChevronUp className="text-twilight-accent" />
                        ) : (
                          <FaChevronDown className="text-twilight-accent" />
                        )}
                      </button>
                      {isDetalleExpandido(carta.numero, 'atribucion') && (
                        <div className="p-3 text-twilight-text/80">
                          {carta.atribucion}
                        </div>
                      )}
                    </div>

                    {/* Sendero */}
                    <div className="card-detail-section">
                      <button
                        className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-primary/20 hover:bg-twilight-primary/30 transition-colors"
                        onClick={(e) => toggleDetalle(carta.numero, 'sendero', e)}
                      >
                        <span className="text-twilight-text font-medium">Sendero</span>
                        {isDetalleExpandido(carta.numero, 'sendero') ? (
                          <FaChevronUp className="text-twilight-accent" />
                        ) : (
                          <FaChevronDown className="text-twilight-accent" />
                        )}
                      </button>
                      {isDetalleExpandido(carta.numero, 'sendero') && (
                        <div className="p-3 space-y-3">
                          <p className="text-twilight-text/80">{carta.sendero}</p>
                          <div className="mt-2">
                            <TreeOfLife sendero={carta.sendero} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Significado */}
                    <div className="card-detail-section">
                      <button
                        className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-primary/20 hover:bg-twilight-primary/30 transition-colors"
                        onClick={(e) => toggleDetalle(carta.numero, 'significado', e)}
                      >
                        <span className="text-twilight-text font-medium">Significado</span>
                        {isDetalleExpandido(carta.numero, 'significado') ? (
                          <FaChevronUp className="text-twilight-accent" />
                        ) : (
                          <FaChevronDown className="text-twilight-accent" />
                        )}
                      </button>
                      {isDetalleExpandido(carta.numero, 'significado') && (
                        <div className="p-3 text-twilight-text/80">
                          {carta.significado}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArcanosMayores;