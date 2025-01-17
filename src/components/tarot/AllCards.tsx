/**
 * @fileoverview Componente para mostrar todas las cartas del Tarot.
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaFilter } from "react-icons/fa";
import { CartaCortesana, ArcanoMenor, ArcanoMayor } from "../../types/cartas";
import cortesanasData from "../../data/cortesanas.json";
import arcanosMenoresData from "../../data/arcanos-menores.json";
import arcanosMayoresData from "../../data/arcanos-mayores.json";

interface Filtros {
  tipo: string[];
  palo: string[];
}

const AllCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtros, setFiltros] = useState<Filtros>({
    tipo: [],
    palo: []
  });
  const [showFilters, setShowFilters] = useState(false);

  const palos = ["Bastos", "Copas", "Espadas", "Pentáculos"];
  const tipos = ["Arcanos Mayores", "Arcanos Menores", "Cartas de la Corte"];

  const filtrarCartas = () => {
    let cartasFiltradas = [
      ...cortesanasData.cortesanas,
      ...arcanosMenoresData.arcanosMenores,
      ...arcanosMayoresData.arcanosMayores
    ];

    if (searchTerm) {
      cartasFiltradas = cartasFiltradas.filter(carta =>
        carta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (carta as any).significado?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carta.descripcion?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filtros.tipo.length > 0) {
      cartasFiltradas = cartasFiltradas.filter(carta => {
        if ("genero" in carta && filtros.tipo.includes("Cartas de la Corte")) return true;
        if ("significado" in carta && typeof carta.significado === "string" && filtros.tipo.includes("Arcanos Menores")) return true;
        if ("numero" in carta && filtros.tipo.includes("Arcanos Mayores")) return true;
        return false;
      });
    }

    if (filtros.palo.length > 0) {
      cartasFiltradas = cartasFiltradas.filter(carta =>
        filtros.palo.some(palo => carta.nombre.includes(palo))
      );
    }

    return cartasFiltradas;
  };

  const toggleFiltro = (categoria: keyof Filtros, valor: string) => {
    setFiltros(prev => ({
      ...prev,
      [categoria]: prev[categoria].includes(valor)
        ? prev[categoria].filter(v => v !== valor)
        : [...prev[categoria], valor]
    }));
  };

  const cartasFiltradas = filtrarCartas();

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
          Todas las Cartas
        </h1>
        <p className="text-twilight-text/80 max-w-2xl mx-auto">
          Explora todas las cartas del Tarot y sus significados.
        </p>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar cartas..."
              className="w-full pl-10 pr-4 py-2 bg-twilight-background border border-twilight-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-twilight-accent/50"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-twilight-text/50" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-twilight-accent/10 text-twilight-accent rounded-lg hover:bg-twilight-accent/20 transition-colors"
          >
            <FaFilter />
            <span>Filtros</span>
          </button>
        </div>

        {/* Panel de filtros */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-twilight-background/50 border border-twilight-secondary/20 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-twilight-text mb-2">Tipo de Carta</h3>
                <div className="space-y-2">
                  {tipos.map((tipo) => (
                    <label key={tipo} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filtros.tipo.includes(tipo)}
                        onChange={() => toggleFiltro("tipo", tipo)}
                        className="rounded border-twilight-secondary/20 text-twilight-accent focus:ring-twilight-accent/50"
                      />
                      <span className="text-twilight-text/80">{tipo}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-twilight-text mb-2">Palo</h3>
                <div className="space-y-2">
                  {palos.map((palo) => (
                    <label key={palo} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filtros.palo.includes(palo)}
                        onChange={() => toggleFiltro("palo", palo)}
                        className="rounded border-twilight-secondary/20 text-twilight-accent focus:ring-twilight-accent/50"
                      />
                      <span className="text-twilight-text/80">{palo}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Grid de cartas */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartasFiltradas.map((carta, index) => (
            <motion.div
              key={carta.nombre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-twilight-background/50 border border-twilight-secondary/20 rounded-xl p-6 hover:border-twilight-accent/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-twilight-text mb-2">
                {carta.nombre}
              </h3>
              {"titulo" in carta && carta.titulo && (
                <p className="text-twilight-accent text-sm mb-4">{carta.titulo}</p>
              )}
              {"descripcion" in carta && carta.descripcion && (
                <p className="text-twilight-text/80 mb-4">{carta.descripcion}</p>
              )}
              {"significado" in carta && (
                <div className="text-twilight-text/80 mb-4">
                  {typeof carta.significado === "string" ? (
                    <p>{carta.significado}</p>
                  ) : (
                    <>
                      <p className="mb-2">{carta.significado.general}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium text-twilight-accent mb-1">Amor</h4>
                          <p>{carta.significado.amor}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-twilight-accent mb-1">Trabajo</h4>
                          <p>{carta.significado.trabajo}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              {"elemento" in carta && (
                <div className="text-sm text-twilight-text/60">
                  <p>Elemento: {carta.elemento}</p>
                  {"regencia" in carta && <p>Regencia: {carta.regencia}</p>}
                  {"planeta" in carta && <p>Planeta: {carta.planeta}</p>}
                  {"signo" in carta && <p>Signo: {carta.signo}</p>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards;