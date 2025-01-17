/**
 * @fileoverview Componente del menú móvil simplificado con navegación directa.
 */

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaSignOutAlt } from "react-icons/fa";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  logout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, logout }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menú */}
      <div
        ref={menuRef}
        className="absolute right-0 top-0 h-full w-64 bg-twilight-background/95 shadow-lg flex flex-col"
        role="dialog"
        aria-modal="true">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-twilight-secondary/10">
          <h2 className="text-lg font-medium">Menú</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-twilight-secondary/10"
            aria-label="Cerrar menú">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navegación */}
        <div className="flex-1 overflow-y-auto py-2">
          <NavLinks isMobile onClose={onClose} />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-twilight-secondary/10">
          <button
            onClick={() => {
              logout();
              onClose();
            }}
            className="w-full py-2 px-4 rounded flex items-center gap-2 text-red-500 hover:bg-red-500/10 transition-colors">
            <FaSignOutAlt />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
