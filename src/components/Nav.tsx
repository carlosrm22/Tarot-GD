/**
 * @fileoverview Componente de navegación principal con menús desplegables y diseño responsive.
 */

import React, { useState, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

interface NavProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onLogout: () => void;
}

const Nav: React.FC<NavProps> = memo(({ isDarkMode, onThemeToggle, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = useCallback(({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active' : ''}`, []);

  const handleMobileMenuClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleMobileItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleLogoutClick = useCallback(() => {
    onLogout();
    setIsOpen(false);
  }, [onLogout]);

  return (
    <nav className="bg-purple-700 dark:bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/inicio" className="flex items-center">
              <span className="text-white text-xl font-bold">Tarot GD</span>
            </NavLink>

            <div className="hidden md:flex md:ml-10 md:space-x-4">
              <NavLink to="/lecturas" className={navLinkClass}>
                Lecturas
              </NavLink>
              <NavLink to="/estudio" className={navLinkClass}>
                Estudio
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

              <div className="nav-dropdown">
                <button className="nav-link">Símbolos ▼</button>
                <div className="nav-dropdown-content">
                  <NavLink to="/pentagramas" className="nav-dropdown-item">
                    Pentagramas
                  </NavLink>
                  <NavLink to="/hexagramas" className="nav-dropdown-item">
                    Hexagramas
                  </NavLink>
                  <NavLink to="/sigilos" className="nav-dropdown-item">
                    Sigilos
                  </NavLink>
                  <NavLink to="/talismanes" className="nav-dropdown-item">
                    Talismanes
                  </NavLink>
                </div>
              </div>

              <div className="nav-dropdown">
                <button className="nav-link">Herramientas ▼</button>
                <div className="nav-dropdown-content">
                  <NavLink to="/armas" className="nav-dropdown-item">
                    Armas Mágicas
                  </NavLink>
                  <NavLink to="/tatvas" className="nav-dropdown-item">
                    Tatvas
                  </NavLink>
                  <NavLink to="/formas-divinas" className="nav-dropdown-item">
                    Formas Divinas
                  </NavLink>
                </div>
              </div>

              <NavLink to="/enoquiano" className={navLinkClass}>
                Sistema Enoquiano
              </NavLink>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full text-white hover:bg-purple-600 focus:outline-none"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>

            <button
              onClick={onLogout}
              className="hidden md:block ml-4 px-4 py-2 rounded text-white bg-purple-600 hover:bg-purple-500 focus:outline-none"
            >
              Salir
            </button>

            <button
              onClick={handleMobileMenuClick}
              className="mobile-menu-button md:hidden ml-4"
              aria-label="Menú principal"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <NavLink to="/lecturas" className="mobile-menu-link" onClick={handleMobileItemClick}>
              Lecturas
            </NavLink>
            <NavLink to="/estudio" className="mobile-menu-link" onClick={handleMobileItemClick}>
              Estudio
            </NavLink>
            <NavLink to="/cartas" className="mobile-menu-link" onClick={handleMobileItemClick}>
              Cartas
            </NavLink>
            <NavLink to="/alefato" className="mobile-menu-link" onClick={handleMobileItemClick}>
              Alefato
            </NavLink>
            <NavLink to="/rituales" className="mobile-menu-link" onClick={handleMobileItemClick}>
              Rituales
            </NavLink>

            <div className="mobile-menu-section">
              <div className="mobile-menu-section-title">Símbolos</div>
              <div className="mobile-menu-section-content">
                <NavLink to="/pentagramas" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Pentagramas
                </NavLink>
                <NavLink to="/hexagramas" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Hexagramas
                </NavLink>
                <NavLink to="/sigilos" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Sigilos
                </NavLink>
                <NavLink to="/talismanes" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Talismanes
                </NavLink>
              </div>
            </div>

            <div className="mobile-menu-section">
              <div className="mobile-menu-section-title">Herramientas</div>
              <div className="mobile-menu-section-content">
                <NavLink to="/armas" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Armas Mágicas
                </NavLink>
                <NavLink to="/tatvas" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Tatvas
                </NavLink>
                <NavLink to="/formas-divinas" className="mobile-menu-sublink" onClick={handleMobileItemClick}>
                  Formas Divinas
                </NavLink>
              </div>
            </div>

            <NavLink to="/enoquiano" className="mobile-menu-link" onClick={handleMobileItemClick}>
              Sistema Enoquiano
            </NavLink>

            <button
              onClick={handleLogoutClick}
              className="w-full mt-4 px-4 py-2 text-white bg-purple-600 hover:bg-purple-500 focus:outline-none rounded"
            >
              Salir
            </button>
          </div>
        </div>
      )}
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;