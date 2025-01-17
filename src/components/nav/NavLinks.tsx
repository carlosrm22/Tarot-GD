import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface NavLinksProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile, onClose }) => {
  const { logout } = useAuth();
  const baseClasses = "block py-2 hover:text-twilight-accent transition-colors";
  const mobileClasses = isMobile ? "text-lg" : "";

  const handleClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <nav className={`${isMobile ? 'space-y-4' : 'flex gap-6'}`}>
      <NavLink
        to="/lecturas"
        className={({ isActive }) =>
          `${baseClasses} ${mobileClasses} ${isActive ? 'text-twilight-accent' : ''}`
        }
        onClick={handleClick}
      >
        Lecturas
      </NavLink>

      <div className={`relative group ${isMobile ? '' : 'inline-block'}`}>
        <NavLink
          to="/cartas"
          className={({ isActive }) =>
            `${baseClasses} ${mobileClasses} ${isActive ? 'text-twilight-accent' : ''}`
          }
          onClick={handleClick}
        >
          Cartas
        </NavLink>
        {!isMobile && (
          <div className="dropdown">
            <NavLink
              to="/arcanos-mayores"
              className="block px-4 py-2 hover:bg-twilight-secondary/10"
              onClick={handleClick}
            >
              Arcanos Mayores
            </NavLink>
            <NavLink
              to="/alefato"
              className="block px-4 py-2 hover:bg-twilight-secondary/10"
              onClick={handleClick}
            >
              Alefato
            </NavLink>
          </div>
        )}
      </div>

      {isMobile && (
        <>
          <NavLink
            to="/arcanos-mayores"
            className={({ isActive }) =>
              `${baseClasses} ${mobileClasses} pl-4 ${isActive ? 'text-twilight-accent' : ''}`
            }
            onClick={handleClick}
          >
            Arcanos Mayores
          </NavLink>
          <NavLink
            to="/alefato"
            className={({ isActive }) =>
              `${baseClasses} ${mobileClasses} pl-4 ${isActive ? 'text-twilight-accent' : ''}`
            }
            onClick={handleClick}
          >
            Alefato
          </NavLink>
        </>
      )}

      <NavLink
        to="/rituales"
        className={({ isActive }) =>
          `${baseClasses} ${mobileClasses} ${isActive ? 'text-twilight-accent' : ''}`
        }
        onClick={handleClick}
      >
        Rituales
      </NavLink>

      <div className={`relative group ${isMobile ? '' : 'inline-block'}`}>
        <span className={`${baseClasses} ${mobileClasses} cursor-pointer`}>
          Símbolos
        </span>
        <div className={isMobile ? 'pl-4 space-y-2' : 'dropdown'}>
          <NavLink
            to="/arbol-vida"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Árbol de la Vida
          </NavLink>
          <NavLink
            to="/pentagramas"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Pentagramas
          </NavLink>
          <NavLink
            to="/hexagramas"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Hexagramas
          </NavLink>
          <NavLink
            to="/sigilos"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Sigilos
          </NavLink>
          <NavLink
            to="/talismanes"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Talismanes
          </NavLink>
        </div>
      </div>

      <div className={`relative group ${isMobile ? '' : 'inline-block'}`}>
        <span className={`${baseClasses} ${mobileClasses} cursor-pointer`}>
          Herramientas
        </span>
        <div className={isMobile ? 'pl-4 space-y-2' : 'dropdown'}>
          <NavLink
            to="/armas"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Armas Mágicas
          </NavLink>
          <NavLink
            to="/tatvas"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Tatvas
          </NavLink>
          <NavLink
            to="/formas-divinas"
            className={isMobile ? baseClasses : "block px-4 py-2 hover:bg-twilight-secondary/10"}
            onClick={handleClick}
          >
            Formas Divinas
          </NavLink>
        </div>
      </div>

      <NavLink
        to="/enoquiano"
        className={({ isActive }) =>
          `${baseClasses} ${mobileClasses} ${isActive ? 'text-twilight-accent' : ''}`
        }
        onClick={handleClick}
      >
        Enoquiano
      </NavLink>

      {isMobile && (
        <button
          onClick={() => {
            logout();
            handleClick();
          }}
          className={`${baseClasses} ${mobileClasses} text-red-500 hover:text-red-600`}
        >
          Cerrar Sesión
        </button>
      )}
    </nav>
  );
};

export default NavLinks;