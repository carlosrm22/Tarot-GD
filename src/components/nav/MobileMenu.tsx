import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]">
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-twilight-background shadow-lg p-6 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <NavLink to="/" className="text-2xl font-bold text-gradient" onClick={onClose}>
            Tarot GD
          </NavLink>
          <button
            onClick={onClose}
            className="p-2 hover:text-twilight-accent transition-colors"
            aria-label="Cerrar menú"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <NavLinks isMobile onClose={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;