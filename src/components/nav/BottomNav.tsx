/**
 * @fileoverview Componente de navegación inferior para móvil tipo app.
 */

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaHatWizard, FaTools, FaSearch } from "react-icons/fa";
import { GiMagicGate } from "react-icons/gi";

const mainTabs = [
  {
    path: "/",
    label: "Inicio",
    icon: <FaHome size={20} />,
    exact: true,
  },
  {
    path: "/tarot",
    label: "Tarot",
    icon: <FaBook size={20} />,
  },
  {
    path: "/hermetismo",
    label: "Hermetismo",
    icon: <FaHatWizard size={20} />,
  },
  {
    path: "/rituales",
    label: "Rituales",
    icon: <GiMagicGate size={20} />,
  },
  {
    path: "/buscar",
    label: "Buscar",
    icon: <FaSearch size={20} />,
  },
];

const BottomNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-twilight-background/95 backdrop-blur-md border-t border-twilight-secondary/10 shadow-lg z-50">
      <div className="flex items-center justify-around">
        {mainTabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 ${
                isActive
                  ? "text-twilight-accent"
                  : "text-twilight-text/70 hover:text-twilight-text"
              }`
            }>
            <span className="mb-1">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
            {isActive(tab.path, tab.exact) && (
              <span className="absolute top-0 left-1/2 w-1 h-1 bg-twilight-accent rounded-full transform -translate-x-1/2" />
            )}
          </NavLink>
        ))}
      </div>

      {/* Área segura para dispositivos con notch */}
      <div className="h-safe-area-inset-bottom bg-twilight-background/95" />
    </nav>
  );
};

export default BottomNav;