/**
 * @fileoverview Componente de navegación principal con diseño tipo app móvil.
 */

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaBook,
  FaHome,
  FaSearch,
  FaBookOpen,
  FaTools,
  FaHatWizard,
  FaStar,
  FaChevronRight,
} from "react-icons/fa";
import { GiMagicGate, GiTreeBranch, GiSpellBook } from "react-icons/gi";
import { SiHexo } from "react-icons/si";

interface NavLinksProps {
  isMobile?: boolean;
  onClose?: () => void;
}

// Estructura de navegación principal
const mainRoutes = [
  {
    id: "inicio",
    label: "Inicio",
    path: "/",
    icon: <FaHome />,
    exact: true,
  },
  {
    id: "tarot",
    label: "Tarot",
    icon: <GiSpellBook />,
    subroutes: [
      { path: "/lecturas", label: "Lecturas", icon: <FaBookOpen /> },
      { path: "/cartas", label: "Cartas", icon: <FaBook /> },
      { path: "/arcanos-mayores", label: "Arcanos", icon: <FaStar /> },
    ],
  },
  {
    id: "hermetismo",
    label: "Hermetismo",
    icon: <FaHatWizard />,
    subroutes: [
      { path: "/arbol-vida", label: "Árbol de la Vida", icon: <GiTreeBranch /> },
      { path: "/alefato", label: "Alefato", icon: <FaBook /> },
      { path: "/enoquiano", label: "Enoquiano", icon: <GiMagicGate /> },
    ],
  },
  {
    id: "rituales",
    label: "Rituales",
    icon: <GiMagicGate />,
    subroutes: [
      { path: "/rituales/lista", label: "Lista", icon: <FaBook /> },
      { path: "/pentagramas", label: "Pentagramas", icon: <SiHexo /> },
      { path: "/hexagramas", label: "Hexagramas", icon: <SiHexo /> },
    ],
  },
  {
    id: "herramientas",
    label: "Herramientas",
    icon: <FaTools />,
    subroutes: [
      { path: "/armas", label: "Armas Mágicas", icon: <GiMagicGate /> },
      { path: "/sigilos", label: "Sigilos", icon: <SiHexo /> },
      { path: "/talismanes", label: "Talismanes", icon: <SiHexo /> },
      { path: "/tatvas", label: "Tatvas", icon: <GiMagicGate /> },
    ],
  },
  {
    id: "buscar",
    label: "Buscar",
    path: "/buscar",
    icon: <FaSearch />,
  },
];

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false, onClose }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path?: string, subroutes?: any[]) => {
    if (path === "/" && location.pathname !== "/") return false;
    if (path && location.pathname.startsWith(path)) return true;
    if (subroutes) {
      return subroutes.some((route) => location.pathname.startsWith(route.path));
    }
    return false;
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col">
        {mainRoutes.map((route) => {
          const active = isActive(route.path, route.subroutes);
          const isOpen = openSection === route.id;

          if (route.subroutes) {
            return (
              <div key={route.id} className="border-b border-twilight-secondary/10">
                <button
                  onClick={() => setOpenSection(isOpen ? null : route.id)}
                  className={`w-full px-4 py-3 flex items-center justify-between ${
                    active ? "text-twilight-accent" : "text-twilight-text"
                  }`}>
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center">
                      {route.icon}
                    </span>
                    {route.label}
                  </span>
                  <FaChevronRight
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}>
                  {route.subroutes.map((subroute) => (
                    <NavLink
                      key={subroute.path}
                      to={subroute.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 pl-12 ${
                          isActive
                            ? "text-twilight-accent"
                            : "text-twilight-text/80 hover:text-twilight-text"
                        }`
                      }
                      onClick={onClose}>
                      <span className="w-5 h-5 flex items-center justify-center">
                        {subroute.icon}
                      </span>
                      {subroute.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 border-b border-twilight-secondary/10 ${
                  isActive
                    ? "text-twilight-accent"
                    : "text-twilight-text hover:text-twilight-text/80"
                }`
              }
              onClick={onClose}>
              <span className="w-6 h-6 flex items-center justify-center">
                {route.icon}
              </span>
              {route.label}
            </NavLink>
          );
        })}
      </nav>
    );
  }

  // Versión de escritorio
  return (
    <nav className="hidden md:flex items-center gap-6">
      {mainRoutes.map((route) => {
        if (route.subroutes) {
          return (
            <div key={route.id} className="relative group">
              <button
                className={`flex items-center gap-2 py-2 ${
                  isActive(undefined, route.subroutes)
                    ? "text-twilight-accent"
                    : "text-twilight-text hover:text-twilight-accent"
                }`}>
                {route.icon}
                <span>{route.label}</span>
              </button>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-twilight-background rounded-lg shadow-lg border border-twilight-secondary/10 py-2 min-w-[200px]">
                  {route.subroutes.map((subroute) => (
                    <NavLink
                      key={subroute.path}
                      to={subroute.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 ${
                          isActive
                            ? "text-twilight-accent"
                            : "text-twilight-text hover:bg-twilight-secondary/10"
                        }`
                      }>
                      <span className="w-5 h-5 flex items-center justify-center">
                        {subroute.icon}
                      </span>
                      {subroute.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <NavLink
            key={route.id}
            to={route.path}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 ${
                isActive
                  ? "text-twilight-accent"
                  : "text-twilight-text hover:text-twilight-accent"
              }`
            }>
            {route.icon}
            <span>{route.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavLinks;
