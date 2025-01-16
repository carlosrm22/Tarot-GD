/**
 * @fileoverview Componente de navegación principal con menús desplegables y diseño responsive.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onLogout: () => void;
}

const Nav: React.FC<NavProps> = ({ isDarkMode, onThemeToggle, onLogout }) => {
  const [tarotMenuOpen, setTarotMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setTarotMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (tarotMenuOpen) setTarotMenuOpen(false);
  };

  const handleTarotClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setTarotMenuOpen(!tarotMenuOpen);
    }
  };

  return (
    <nav className="main-nav" ref={navRef}>
      <div className="nav-content">
        <div className="nav-brand">
          <h1>✧ Aurora Dorada</h1>
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menú"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/inicio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>

            <div
              className={`nav-dropdown ${tarotMenuOpen ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setTarotMenuOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setTarotMenuOpen(false)}
            >
              <span className="nav-link" onClick={handleTarotClick}>
                Tarot
                <span className={`dropdown-arrow ${tarotMenuOpen ? 'active' : ''}`}>▼</span>
              </span>
              <div className={`dropdown-content ${tarotMenuOpen ? 'active' : ''}`}>
                <Link
                  to="/lecturas"
                  className="dropdown-item"
                  onClick={() => {
                    setTarotMenuOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Lecturas
                </Link>
                <Link
                  to="/estudio"
                  className="dropdown-item"
                  onClick={() => {
                    setTarotMenuOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Estudio
                </Link>
                <Link
                  to="/cartas"
                  className="dropdown-item"
                  onClick={() => {
                    setTarotMenuOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Todas las Cartas
                </Link>
              </div>
            </div>

            <Link to="/alefato" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Alefato
            </Link>
            <Link to="/rituales" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Rituales
            </Link>
          </div>

          <div className="nav-controls">
            <div className="theme-switch">
              <span>🌞</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={onThemeToggle}
                />
                <span className="slider"></span>
              </label>
              <span>🌙</span>
            </div>
            <button onClick={onLogout} className="logout-button">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;