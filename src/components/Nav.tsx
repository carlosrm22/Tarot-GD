/**
 * @fileoverview Componente de navegación principal con diseño tipo app.
 */

import React, { useState, useCallback, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import MobileMenu from "./nav/MobileMenu";
import NavLinks from "./nav/NavLinks";
import BottomNav from "./nav/BottomNav";

const Nav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const location = useLocation();

  // Cerrar el drawer al cambiar de ruta
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  // Manejar tecla Escape
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    },
    [isDrawerOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 bg-twilight-background/95 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
              Tarot GD
            </NavLink>

            {/* Navegación de escritorio */}
            <NavLinks />

            {/* Acciones */}
            <div className="flex items-center gap-4">
              {/* Botón de tema */}
              <button
                onClick={toggleTheme}
                className="p-2 hover:text-twilight-accent transition-colors"
                aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}>
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>

              {/* Botón de menú móvil */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="md:hidden p-2 hover:text-twilight-accent transition-colors"
                aria-label="Abrir menú"
                aria-expanded={isDrawerOpen}
                aria-controls="mobile-menu">
                <FaBars size={24} />
              </button>

              {/* Botón de cerrar sesión - Desktop */}
              <button
                onClick={logout}
                className="hidden md:block hover:text-red-500 transition-colors">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <MobileMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        logout={logout}
      />

      {/* Navegación inferior móvil */}
      <BottomNav />

      {/* Espaciado para la navegación inferior en móvil */}
      <div className="h-16 md:h-0" />
    </>
  );
};

export default Nav;
