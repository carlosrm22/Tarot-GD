/**
 * @fileoverview Componente de navegación principal con menús desplegables y diseño responsive.
 */

import React, { useState, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Nav: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const navLinkClass = useCallback(({ isActive }: { isActive: boolean }) =>
    `text-twilight-text hover:text-twilight-accent transition-colors duration-300 ${
      isActive ? 'text-twilight-accent' : ''
    }`, []);

  const handleMobileMenuClick = useCallback(() => {
    setIsOpen(prev => !prev);
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
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          {/* Overlay de fondo */}
          <div className="absolute inset-0 bg-twilight-background/95 backdrop-blur-md" />

          {/* Contenido del menú */}
          <div className="relative h-full flex flex-col overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-twilight-secondary/20">
              <NavLink to="/inicio" className="flex items-center group" onClick={handleMobileItemClick}>
                <span className="text-2xl font-bold bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
                  Tarot GD
                </span>
              </NavLink>
              <button
                onClick={handleMobileMenuClick}
                className="p-2 rounded-lg text-twilight-text hover:text-twilight-accent"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
              <div className="space-y-6">
                <NavLink to="/lecturas" className="block text-xl text-twilight-text hover:text-twilight-accent py-2" onClick={handleMobileItemClick}>
                  Lecturas
                </NavLink>
                <NavLink to="/cartas" className="block text-xl text-twilight-text hover:text-twilight-accent py-2" onClick={handleMobileItemClick}>
                  Cartas
                </NavLink>
                <NavLink to="/alefato" className="block text-xl text-twilight-text hover:text-twilight-accent py-2" onClick={handleMobileItemClick}>
                  Alefato
                </NavLink>
                <NavLink to="/rituales" className="block text-xl text-twilight-text hover:text-twilight-accent py-2" onClick={handleMobileItemClick}>
                  Rituales
                </NavLink>
              </div>

              <div className="space-y-4">
                <div className="text-xl font-medium text-twilight-accent">Símbolos</div>
                <div className="pl-4 space-y-4">
                  <NavLink to="/pentagramas" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Pentagramas
                  </NavLink>
                  <NavLink to="/hexagramas" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Hexagramas
                  </NavLink>
                  <NavLink to="/sigilos" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Sigilos
                  </NavLink>
                  <NavLink to="/talismanes" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Talismanes
                  </NavLink>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xl font-medium text-twilight-accent">Herramientas</div>
                <div className="pl-4 space-y-4">
                  <NavLink to="/armas" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Armas Mágicas
                  </NavLink>
                  <NavLink to="/tatvas" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Tatvas
                  </NavLink>
                  <NavLink to="/formas-divinas" className="block text-lg text-twilight-text hover:text-twilight-accent" onClick={handleMobileItemClick}>
                    Formas Divinas
                  </NavLink>
                </div>
              </div>

              <NavLink to="/enoquiano" className="block text-xl text-twilight-text hover:text-twilight-accent py-2" onClick={handleMobileItemClick}>
                Sistema Enoquiano
              </NavLink>
            </div>

            <div className="mt-auto p-4 border-t border-twilight-secondary/20">
              <button
                onClick={handleLogoutClick}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-twilight-secondary to-twilight-accent text-white hover:shadow-twilight focus:outline-none transition-all duration-300"
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