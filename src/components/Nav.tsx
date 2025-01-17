/**
 * @fileoverview Componente de navegación principal con menús desplegables y diseño responsive.
 */

import React, { useState, useCallback, memo, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Nav: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();

  // Manejar el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Manejar el foco cuando el menú está abierto
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isOpen]);

  const navLinkClass = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `text-twilight-text hover:text-twilight-accent transition-colors duration-300 ${
        isActive ? 'text-twilight-accent' : ''
      }`,
    []
  );

  const handleMobileMenuClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleMobileItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleLogoutClick = useCallback(() => {
    logout();
    setIsOpen(false);
  }, [logout]);

  return (
    <nav className="bg-twilight-background/95 backdrop-blur-md border-b border-twilight-secondary/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/inicio" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Tarot GD
              </span>
            </NavLink>

            <div className="hidden md:flex md:ml-10 md:space-x-8">
              <NavLink to="/lecturas" className={navLinkClass}>
                Lecturas
              </NavLink>
              <NavLink to="/cartas" className={navLinkClass}>
                Cartas
              </NavLink>
              <NavLink to="/alefato" className={navLinkClass}>
                Alefato
              </NavLink>
              <NavLink to="/rituales" className={navLinkClass}>
                Rituales
              </NavLink>

              {/* Menús Desplegables */}
              <div className="relative group">
                <button className="text-twilight-text hover:text-twilight-accent transition-colors duration-300">
                  Símbolos ▼
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-twilight-primary/95 backdrop-blur-md border border-twilight-secondary/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                  <NavLink to="/pentagramas" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Pentagramas
                  </NavLink>
                  <NavLink to="/hexagramas" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Hexagramas
                  </NavLink>
                  <NavLink to="/sigilos" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Sigilos
                  </NavLink>
                  <NavLink to="/talismanes" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Talismanes
                  </NavLink>
                </div>
              </div>

              <div className="relative group">
                <button className="text-twilight-text hover:text-twilight-accent transition-colors duration-300">
                  Herramientas ▼
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-twilight-primary/95 backdrop-blur-md border border-twilight-secondary/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                  <NavLink to="/armas" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Armas Mágicas
                  </NavLink>
                  <NavLink to="/tatvas" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Tatvas
                  </NavLink>
                  <NavLink to="/formas-divinas" className="block px-4 py-2 text-twilight-text hover:bg-twilight-secondary/20">
                    Formas Divinas
                  </NavLink>
                </div>
              </div>

              <NavLink to="/enoquiano" className={navLinkClass}>
                Sistema Enoquiano
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-twilight-text hover:text-twilight-accent focus:outline-none transition-colors duration-300"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>

            <button
              onClick={handleLogoutClick}
              className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-twilight-secondary to-twilight-accent text-white hover:shadow-twilight focus:outline-none transition-all duration-300"
            >
              Salir
            </button>

            <button
              onClick={handleMobileMenuClick}
              className="md:hidden p-2 rounded-lg text-twilight-text hover:text-twilight-accent focus:outline-none"
              aria-label="Menú principal"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Nuevo Menú Móvil */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleMobileMenuClick}
            aria-hidden="true"
          />

          {/* Panel del Menú */}
          <div
            ref={menuRef}
            className="fixed right-0 top-0 bottom-0 w-[280px] bg-twilight-background border-l border-twilight-secondary/20 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
          >
            {/* Cabecera */}
            <div className="p-4 border-b border-twilight-secondary/20 flex items-center justify-between">
              <span className="text-xl font-bold bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
                Tarot GD
              </span>
              <button
                onClick={handleMobileMenuClick}
                className="p-2 text-twilight-text hover:text-twilight-accent"
                aria-label="Cerrar menú"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Área Scrollable */}
            <div className="flex-1 overflow-y-auto py-4">
              {/* Enlaces Principales */}
              <div className="px-4 space-y-2">
                <NavLink
                  to="/lecturas"
                  className="block py-2 text-lg text-twilight-text hover:text-twilight-accent"
                  onClick={handleMobileItemClick}
                >
                  Lecturas
                </NavLink>
                <NavLink
                  to="/cartas"
                  className="block py-2 text-lg text-twilight-text hover:text-twilight-accent"
                  onClick={handleMobileItemClick}
                >
                  Cartas
                </NavLink>
                <NavLink
                  to="/alefato"
                  className="block py-2 text-lg text-twilight-text hover:text-twilight-accent"
                  onClick={handleMobileItemClick}
                >
                  Alefato
                </NavLink>
                <NavLink
                  to="/rituales"
                  className="block py-2 text-lg text-twilight-text hover:text-twilight-accent"
                  onClick={handleMobileItemClick}
                >
                  Rituales
                </NavLink>
              </div>

              {/* Separador */}
              <div className="my-4 border-t border-twilight-secondary/20" />

              {/* Sección Símbolos */}
              <div className="px-4 mb-4">
                <h3 className="text-lg font-medium text-twilight-accent mb-2">Símbolos</h3>
                <div className="space-y-2 pl-4">
                  <NavLink
                    to="/pentagramas"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Pentagramas
                  </NavLink>
                  <NavLink
                    to="/hexagramas"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Hexagramas
                  </NavLink>
                  <NavLink
                    to="/sigilos"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Sigilos
                  </NavLink>
                  <NavLink
                    to="/talismanes"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Talismanes
                  </NavLink>
                </div>
              </div>

              {/* Sección Herramientas */}
              <div className="px-4 mb-4">
                <h3 className="text-lg font-medium text-twilight-accent mb-2">Herramientas</h3>
                <div className="space-y-2 pl-4">
                  <NavLink
                    to="/armas"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Armas Mágicas
                  </NavLink>
                  <NavLink
                    to="/tatvas"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Tatvas
                  </NavLink>
                  <NavLink
                    to="/formas-divinas"
                    className="block py-2 text-twilight-text hover:text-twilight-accent"
                    onClick={handleMobileItemClick}
                  >
                    Formas Divinas
                  </NavLink>
                </div>
              </div>

              {/* Separador */}
              <div className="my-4 border-t border-twilight-secondary/20" />

              {/* Sistema Enoquiano */}
              <div className="px-4">
                <NavLink
                  to="/enoquiano"
                  className="block py-2 text-lg text-twilight-text hover:text-twilight-accent"
                  onClick={handleMobileItemClick}
                >
                  Sistema Enoquiano
                </NavLink>
              </div>
            </div>

            {/* Footer con botón de salir */}
            <div className="p-4 border-t border-twilight-secondary/20">
              <button
                onClick={handleLogoutClick}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-twilight-secondary to-twilight-accent text-white hover:shadow-twilight transition-all duration-300"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;
