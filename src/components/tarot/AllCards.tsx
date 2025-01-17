/**
 * @fileoverview Componente para mostrar todas las cartas del Tarot.
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaFilter } from "react-icons/fa";
import { ArcanoMayor, ArcanoMenor, CartaCortesana, Carta } from "../../types/cartas";
import cartasCortesanasData from "../../data/cartas_cortesanas.json";
import arcanosMenoresData from "../../data/arcanos_menores.json";
import arcanosMayoresData from "../../data/arcanos_mayores.json";

const palos = ["Bastos", "Copas", "Espadas", "Pentáculos"] as const;
type Palo = typeof palos[number];

interface Filtros {
  tipo: string[];
  palo: Palo[];
}

const AllCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtros, setFiltros] = useState<Filtros>({
    tipo: [],
    palo: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filtro, setFiltro] = useState<string>('todas');

  const tipos = ["Arcanos Mayores", "Arcanos Menores", "Cartas de la Corte"];

  const isArcanoMayor = (carta: Carta): carta is ArcanoMayor => {
    return 'hebreo' in carta;
  };

  const isArcanoMenor = (carta: Carta): carta is ArcanoMenor => {
    return 'decanato' in carta || 'sefira' in carta;
  };

  const isCartaCortesana = (carta: Carta): carta is CartaCortesana => {
    return 'elemento' in carta && 'complexion' in carta;
  };

  const getDescripcion = (carta: Carta): string => {
    if (isArcanoMayor(carta)) {
      return carta.significado;
    }
    if (isArcanoMenor(carta) && carta.descripcion) {
      return carta.descripcion;
    }
    if (isCartaCortesana(carta)) {
      return carta.descripcion;
    }
    return '';
  };

  const filtrarCartas = () => {
    let cartasFiltradas: Carta[] = [
      ...cartasCortesanasData.cartasCortesanas,
      ...arcanosMenoresData.arcanosMenores,
      ...arcanosMayoresData.arcanos_mayores
    ];

    if (searchTerm) {
      cartasFiltradas = cartasFiltradas.filter(carta => {
        const searchTermLower = searchTerm.toLowerCase();
        const nombreMatch = carta.nombre.toLowerCase().includes(searchTermLower);
        const descripcion = getDescripcion(carta);
        const descripcionMatch = descripcion.toLowerCase().includes(searchTermLower);

        let significadoMatch = false;
        if (isArcanoMayor(carta)) {
          significadoMatch = carta.significado.toLowerCase().includes(searchTermLower);
        } else if (isArcanoMenor(carta)) {
          significadoMatch = carta.atributos.dignificado.toLowerCase().includes(searchTermLower);
        }

        return nombreMatch || descripcionMatch || significadoMatch;
      });
    }

    if (filtros.tipo.length > 0) {
      cartasFiltradas = cartasFiltradas.filter(carta => {
        if ('genero' in carta && filtros.tipo.includes('Cartas de la Corte')) return true;
        if ('sefira' in carta && filtros.tipo.includes('Arcanos Menores')) return true;
        if ('hebreo' in carta && filtros.tipo.includes('Arcanos Mayores')) return true;
        return false;
      });
    }

    if (filtros.palo.length > 0) {
      cartasFiltradas = cartasFiltradas.filter(carta =>
        filtros.palo.some(palo => {
          const nombreCarta = carta.nombre.toLowerCase();
          const nombrePalo = palo.toLowerCase();
          return nombreCarta.includes(nombrePalo);
        })
      );
    }

    switch (filtro) {
      case 'mayores':
        cartasFiltradas = cartasFiltradas.filter(isArcanoMayor);
        break;
      case 'menores':
        cartasFiltradas = cartasFiltradas.filter(isArcanoMenor);
        break;
      case 'cortesanas':
        cartasFiltradas = cartasFiltradas.filter(isCartaCortesana);
        break;
    }

    return cartasFiltradas;
  };

  const toggleFiltro = (categoria: keyof Filtros, valor: string) => {
    setFiltros(prev => ({
      ...prev,
      [categoria]: prev[categoria].includes(valor as any)
        ? prev[categoria].filter(v => v !== valor)
        : [...prev[categoria], valor] as any
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
              <p className="text-twilight-accent text-sm mb-4">{carta.titulo}</p>
              <p className="text-twilight-text/80 mb-4">{getDescripcion(carta)}</p>

              {isArcanoMayor(carta) && (
                <div className="text-twilight-text/80 mb-4">
                  <p className="mb-2">{carta.significado}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-twilight-accent mb-1">Letra Hebrea</h4>
                      <p>{carta.letra} ({carta.hebreo})</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-twilight-accent mb-1">Sendero</h4>
                      <p>{carta.sendero}</p>
                    </div>
                  </div>
                </div>
              )}

              {isArcanoMenor(carta) && (
                <div className="text-twilight-text/80 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-twilight-accent mb-1">Dignificado</h4>
                      <p>{carta.atributos.dignificado}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-twilight-accent mb-1">Mal Dignificado</h4>
                      <p>{carta.atributos.malDignificado}</p>
                    </div>
                  </div>
                </div>
              )}

              {isCartaCortesana(carta) && (
                <div className="text-twilight-text/80 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-twilight-accent mb-1">Elemento</h4>
                      <p>{carta.elemento}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-twilight-accent mb-1">Regencia</h4>
                      <p>{carta.regencia}</p>
                    </div>
                  </div>
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