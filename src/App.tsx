/**
 * @fileoverview Componente principal de la aplicación de Tarot.
 * Gestiona la visualización de los Arcanos Mayores, el sistema de autenticación,
 * y la interacción con el Árbol de la Vida.
 */

import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Lecturas from './components/Lecturas';
import Estudio from './components/Estudio';
import TodasLasCartas from './components/TodasLasCartas';
import ArcanosMayores from './components/ArcanosMayores';
import Alefato from './components/Alefato';
import Rituales from './components/Rituales';
import Simbolos from './components/Simbolos';
import HerramientasMagicas from './components/HerramientasMagicas';
import Enoquiano from './components/Enoquiano';
import Footer from './components/Footer';
import arcanosMayoresData from './Arcanos_Mayores_Tarot.json';
import { ArcanosMayores as ArcanosMayoresType } from './types/tarot';

/**
 * Componente principal App
 *
 * Características principales:
 * - Sistema de autenticación para iniciados
 * - Visualización interactiva de las cartas del Tarot
 * - Integración con el Árbol de la Vida
 * - Sistema de temas claro/oscuro
 * - Gestión de estados para cartas y detalles
 *
 * @component
 * @returns {JSX.Element} Aplicación completa de Tarot
 */

// Servicio de autenticación
const authService = {
  login: (password: string): boolean => {
    const hashedPassword = btoa('quiero pene'); // Esta no es una forma segura de hash, solo es un ejemplo
    return btoa(password) === hashedPassword;
  }
};

// Componentes con lazy loading
const LazyLecturas = React.lazy(() => import('./components/Lecturas'));
const LazyEstudio = React.lazy(() => import('./components/Estudio'));
const LazyTodasLasCartas = React.lazy(() => import('./components/TodasLasCartas'));
const LazyArcanosMayores = React.lazy(() => import('./components/ArcanosMayores'));
const LazyAlefato = React.lazy(() => import('./components/Alefato'));
const LazyRituales = React.lazy(() => import('./components/Rituales'));
const LazySimbolos = React.lazy(() => import('./components/Simbolos'));
const LazyHerramientasMagicas = React.lazy(() => import('./components/HerramientasMagicas'));
const LazyEnoquiano = React.lazy(() => import('./components/Enoquiano'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const arcanos_mayores = arcanosMayoresData as ArcanosMayoresType;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (authService.login(password)) {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      setError('Contraseña incorrecta, medita en tu respuesta y vuelve a intentarlo');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  // Verificar autenticación al cargar
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>✧ Portal de Iniciados ✧</h2>
            <p>Ingresa la frase mística para acceder al conocimiento oculto.</p>
            <div className="input-group">
              <input
                type="password"
                className="mystic-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Frase Mística"
                autoComplete="off"
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Iniciar el Viaje</button>
            <p className="hint">Pista: Luz en Extensión (en el lenguaje de los antiguos egipcios)</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
        <Nav
          isDarkMode={isDarkMode}
          onThemeToggle={toggleTheme}
          onLogout={handleLogout}
        />

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route
              path="/lecturas"
              element={<LazyLecturas arcanos_mayores={arcanos_mayores} />}
            />
            <Route path="/estudio" element={<LazyEstudio />} />
            <Route path="/cartas" element={<LazyTodasLasCartas />} />
            <Route path="/cartas/arcanos-mayores" element={<LazyArcanosMayores />} />
            <Route path="/alefato" element={<LazyAlefato />} />
            <Route path="/rituales" element={<LazyRituales />} />
            <Route path="/pentagramas" element={<LazySimbolos />} />
            <Route path="/hexagramas" element={<LazySimbolos />} />
            <Route path="/sigilos" element={<LazySimbolos />} />
            <Route path="/talismanes" element={<LazySimbolos />} />
            <Route path="/armas" element={<LazyHerramientasMagicas />} />
            <Route path="/tatvas" element={<LazyHerramientasMagicas />} />
            <Route path="/formas-divinas" element={<LazyHerramientasMagicas />} />
            <Route path="/enoquiano" element={<LazyEnoquiano />} />
            <Route path="*" element={<Navigate to="/inicio" />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
