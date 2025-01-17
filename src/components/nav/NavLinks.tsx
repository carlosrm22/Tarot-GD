/**
 * @fileoverview Componente para los enlaces de navegación.
 * Este componente maneja los enlaces de navegación de la aplicación y cierra el menú móvil al hacer clic en un enlace.
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBook, FaCaretDown } from "react-icons/fa";
import { GiMagicGate, GiTreeBranch, GiSpellBook } from "react-icons/gi";
import { SiHexo } from "react-icons/si";

interface NavLinksProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const baseClasses = "flex items-center gap-2 py-2 text-twilight-text hover:text-twilight-accent transition-colors";
  const mobileClasses = "text-lg";
  const desktopClasses = "mx-4";
  const activeClasses = "text-twilight-accent font-medium";

  const handleSubmenuClick = (menu: string, e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setOpenSubmenu(openSubmenu === menu ? null : menu);
    }
  };

  const renderSubmenu = (
    title: string,
    items: { path: string; label: string; icon?: React.ReactNode }[],
    icon?: React.ReactNode
  ) => {
    const isOpen = openSubmenu === title;

    return (
      <div className={`${isMobile ? "mt-2" : "relative group"}`}>
        <button
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} w-full ${
            isOpen ? activeClasses : ""
          } flex items-center justify-between`}
          onClick={(e) => handleSubmenuClick(title, e)}
          aria-expanded={isOpen}
          aria-controls={`submenu-${title}`}>
          <span className="flex items-center gap-2">
            {icon}
            {title}
          </span>
          <FaCaretDown
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          id={`submenu-${title}`}
          className={`${
            isMobile
              ? "pl-6 space-y-2 mt-2"
              : `absolute left-0 mt-2 py-2 bg-twilight-background rounded-lg shadow-lg min-w-[200px] border border-twilight-secondary/10 ${
                  isOpen ? "block" : "hidden"
                } group-hover:block`
          }`}>
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${baseClasses} ${
                  isMobile
                    ? mobileClasses
                    : "px-4 py-2 hover:bg-twilight-secondary/10"
                } ${isActive ? activeClasses : ""}`
              }
              onClick={(e) => {
                if (isMobile && onClose) {
                  onClose();
                }
                if (!isMobile && openSubmenu) {
                  setOpenSubmenu(null);
                }
              }}>
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  const tarotMenu = [
    { path: "/lecturas", label: "Lecturas de Tarot", icon: <FaBook size={16} /> },
    { path: "/cartas", label: "Todas las Cartas", icon: <GiSpellBook size={16} /> },
    { path: "/arcanos-mayores", label: "Arcanos Mayores", icon: <SiHexo size={16} /> },
  ];

  const hermetismoMenu = [
    { path: "/arbol-vida", label: "Árbol de la Vida", icon: <GiTreeBranch size={16} /> },
    { path: "/alefato", label: "Alefato Hebreo", icon: <FaBook size={16} /> },
    { path: "/enoquiano", label: "Sistema Enoquiano", icon: <GiMagicGate size={16} /> },
  ];

  const ritualMenu = [
    { path: "/rituales", label: "Rituales", icon: <GiMagicGate size={16} /> },
    { path: "/pentagramas", label: "Pentagramas", icon: <SiHexo size={16} /> },
    { path: "/hexagramas", label: "Hexagramas", icon: <SiHexo size={16} /> },
  ];

  const herramientasMenu = [
    { path: "/armas", label: "Armas Mágicas", icon: <GiMagicGate size={16} /> },
    { path: "/sigilos", label: "Sigilos", icon: <SiHexo size={16} /> },
    { path: "/talismanes", label: "Talismanes", icon: <SiHexo size={16} /> },
    { path: "/tatvas", label: "Tatvas", icon: <GiMagicGate size={16} /> },
  ];

  return (
    <nav className={`${!isMobile ? "flex items-center gap-2" : "flex flex-col gap-4"}`}>
      {renderSubmenu("Tarot", tarotMenu, <GiSpellBook size={20} />)}
      {renderSubmenu("Hermetismo", hermetismoMenu, <FaBook size={20} />)}
      {renderSubmenu("Rituales", ritualMenu, <GiMagicGate size={20} />)}
      {renderSubmenu("Herramientas", herramientasMenu, <SiHexo size={20} />)}
    </nav>
  );
};

export default NavLinks;
