/**
 * @fileoverview Componente del menú móvil con enlaces de navegación y botón de cierre.
 * Incluye manejo de clics fuera, bloqueo de scroll del body y animaciones de apertura/cierre.
 */

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { FocusTrap } from "focus-trap-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  logout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, logout }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("popstate", onClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("popstate", onClose);
    };
  }, [isOpen, onClose]);

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        onDeactivate: onClose,
        initialFocus: "#mobile-menu-close",
        allowOutsideClick: true,
      }}>
      <div className="fixed inset-0 z-50">
        {/* Overlay con animación */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
          onClick={onClose}
        />

        {/* Panel deslizable */}
        <div
          ref={menuRef}
          className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-twilight-background/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-out overflow-hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title">
          {/* Encabezado */}
          <div className="flex items-center justify-between p-4 border-b border-twilight-secondary/20">
            <NavLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-twilight-secondary to-twilight-accent bg-clip-text text-transparent"
              onClick={onClose}
              id="mobile-menu-title">
              Tarot GD
            </NavLink>
            <button
              id="mobile-menu-close"
              onClick={onClose}
              className="p-2 rounded-lg text-twilight-text hover:text-twilight-accent focus:outline-none focus:ring-2 focus:ring-twilight-accent transition-all duration-200"
              aria-label="Cerrar menú">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Contenido del menú */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <NavLinks isMobile onClose={onClose} />
          </div>

          {/* Pie del menú */}
          <div className="p-4 border-t border-twilight-secondary/20 bg-twilight-background/80">
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-twilight-secondary to-twilight-accent text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-twilight-accent transition-all duration-300 flex items-center justify-center gap-2">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};

export default MobileMenu;
