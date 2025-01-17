import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { AuthProvider } from '../../contexts/AuthContext';
import Nav from '../Nav';

const renderNav = () => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Nav />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Nav Component', () => {
  it('renders without crashing', () => {
    renderNav();
    expect(screen.getByText('Tarot GD')).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger button is clicked', () => {
    renderNav();
    const menuButton = screen.getByLabelText('Menú principal');
    fireEvent.click(menuButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes mobile menu when close button is clicked', () => {
    renderNav();
    const menuButton = screen.getByLabelText('Menú principal');
    fireEvent.click(menuButton);
    const closeButton = screen.getByLabelText('Cerrar menú');
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('contains all main navigation links', () => {
    renderNav();
    expect(screen.getByText('Lecturas')).toBeInTheDocument();
    expect(screen.getByText('Cartas')).toBeInTheDocument();
    expect(screen.getByText('Alefato')).toBeInTheDocument();
    expect(screen.getByText('Rituales')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    renderNav();
    const themeButton = screen.getByLabelText('Cambiar tema');
    fireEvent.click(themeButton);
    // Aquí podrías agregar más aserciones específicas sobre el cambio de tema
  });
});