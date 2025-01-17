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
  const [simbolosMenuOpen, setSimbolosMenuOpen] = useState(false);
  const [herramientasMenuOpen, setHerramientasMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setTarotMenuOpen(false);
        setSimbolosMenuOpen(false);
        setHerramientasMenuOpen(false);
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
    if (simbolosMenuOpen) setSimbolosMenuOpen(false);
    if (herramientasMenuOpen) setHerramientasMenuOpen(false);
  };

  const handleMenuClick = (e: React.MouseEvent, menu: string) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      switch (menu) {
        case 'tarot':
          setTarotMenuOpen(!tarotMenuOpen);
          setSimbolosMenuOpen(false);
          setHerramientasMenuOpen(false);
          break;
        case 'simbolos':
          setSimbolosMenuOpen(!simbolosMenuOpen);
          setTarotMenuOpen(false);
          setHerramientasMenuOpen(false);
          break;
        case 'herramientas':
          setHerramientasMenuOpen(!herramientasMenuOpen);
          setTarotMenuOpen(false);
          setSimbolosMenuOpen(false);
          break;
      }
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

            {/* Menú Tarot */}
            <div
              className={`nav-dropdown ${tarotMenuOpen ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setTarotMenuOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setTarotMenuOpen(false)}
            >
              <span className="nav-link" onClick={(e) => handleMenuClick(e, 'tarot')}>
                Tarot
                <span className={`dropdown-arrow ${tarotMenuOpen ? 'active' : ''}`}>▼</span>
              </span>
              <div className={`dropdown-content ${tarotMenuOpen ? 'active' : ''}`}>
                <Link to="/lecturas" className="dropdown-item" onClick={() => {
                  setTarotMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Lecturas
                </Link>
                <Link to="/estudio" className="dropdown-item" onClick={() => {
                  setTarotMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Estudio
                </Link>
                <Link to="/cartas" className="dropdown-item" onClick={() => {
                  setTarotMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Todas las Cartas
                </Link>
              </div>
            </div>

            {/* Menú Símbolos */}
            <div
              className={`nav-dropdown ${simbolosMenuOpen ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setSimbolosMenuOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setSimbolosMenuOpen(false)}
            >
              <span className="nav-link" onClick={(e) => handleMenuClick(e, 'simbolos')}>
                Símbolos
                <span className={`dropdown-arrow ${simbolosMenuOpen ? 'active' : ''}`}>▼</span>
              </span>
              <div className={`dropdown-content ${simbolosMenuOpen ? 'active' : ''}`}>
                <Link to="/pentagramas" className="dropdown-item" onClick={() => {
                  setSimbolosMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Pentagramas
                </Link>
                <Link to="/hexagramas" className="dropdown-item" onClick={() => {
                  setSimbolosMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Hexagramas
                </Link>
                <Link to="/sigilos" className="dropdown-item" onClick={() => {
                  setSimbolosMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Sigilos
                </Link>
                <Link to="/talismanes" className="dropdown-item" onClick={() => {
                  setSimbolosMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Talismanes
                </Link>
              </div>
            </div>

            {/* Menú Herramientas */}
            <div
              className={`nav-dropdown ${herramientasMenuOpen ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setHerramientasMenuOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setHerramientasMenuOpen(false)}
            >
              <span className="nav-link" onClick={(e) => handleMenuClick(e, 'herramientas')}>
                Herramientas
                <span className={`dropdown-arrow ${herramientasMenuOpen ? 'active' : ''}`}>▼</span>
              </span>
              <div className={`dropdown-content ${herramientasMenuOpen ? 'active' : ''}`}>
                <Link to="/armas" className="dropdown-item" onClick={() => {
                  setHerramientasMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Armas Mágicas
                </Link>
                <Link to="/tatvas" className="dropdown-item" onClick={() => {
                  setHerramientasMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Tatvas
                </Link>
                <Link to="/formas-divinas" className="dropdown-item" onClick={() => {
                  setHerramientasMenuOpen(false);
                  setMobileMenuOpen(false);
                }}>
                  Formas Divinas
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