/**
 * @fileoverview Componente de navegación principal con menús desplegables y diseño responsive.
 */

import React, { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import MobileMenu from './nav/MobileMenu';
import NavLinks from './nav/NavLinks';

const Nav: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 bg-twilight-background/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-gradient">
            Tarot GD
          </NavLink>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:text-twilight-accent transition-colors"
              aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Botón de cerrar sesión - Desktop */}
            <button
              onClick={logout}
              className="hidden md:block hover:text-red-500 transition-colors"
            >
              Cerrar Sesión
            </button>

            {/* Botón de menú móvil */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 hover:text-twilight-accent transition-colors"
              aria-label="Menú principal"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
});

Nav.displayName = 'Nav';

export default Nav;
