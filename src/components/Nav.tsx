/**
 * @fileoverview Componente de navegación principal con menús desplegables y diseño responsive.
 * Este componente maneja la navegación de la aplicación, incluyendo el cambio de tema y la autenticación del usuario.
 */

import React, { useState, memo, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext'; // Hook para manejar el tema
import { useAuth } from '../contexts/AuthContext'; // Hook para manejar la autenticación
import MobileMenu from './nav/MobileMenu'; // Componente para el menú móvil
import NavLinks from './nav/NavLinks'; // Componente para los enlaces de navegación

// Componente Nav, memoizado para evitar re-renderizados innecesarios
const Nav: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú móvil
  const { isDarkMode, toggleTheme } = useTheme(); // Obtener el estado del tema y la función para alternar
  const { logout } = useAuth(); // Obtener la función de cierre de sesión

  // Manejar el cierre del menú móvil al presionar la tecla Escape
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  // Efecto para agregar y limpiar el listener de teclado
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Efecto para bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear el scroll
    } else {
      document.body.style.overflow = ''; // Restaurar el scroll
    }
    return () => {
      document.body.style.overflow = ''; // Limpiar el estilo al desmontar
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 bg-twilight-background/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo de la aplicación */}
          <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent">
            Tarot GD
          </NavLink>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-4">
            {/* Botón para alternar entre modo claro y oscuro */}
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
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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

// Establecer un nombre para el componente en herramientas de desarrollo
Nav.displayName = 'Nav';

// Exportar el componente
export default Nav;
