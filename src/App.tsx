/**
 * @fileoverview Componente principal de la aplicación de Tarot.
 * Gestiona la visualización de los Arcanos Mayores, el sistema de autenticación,
 * y la interacción con el Árbol de la Vida.
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import TodasLasCartas from './components/TodasLasCartas';
import ArcanosMayores from './components/ArcanosMayores';
import Alefato from './components/Alefato';
import Rituales from './components/Rituales';
import Simbolos from './components/Simbolos';
import HerramientasMagicas from './components/HerramientasMagicas';
import Enoquiano from './components/Enoquiano';
import Footer from './components/Footer';
import TarotReading from './components/TarotReading';
import arcanosMayoresData from './Arcanos_Mayores_Tarot.json';
import { ArcanosMayores as ArcanosMayoresType } from './types/tarot';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Componentes con lazy loading
const LazyTarotReading = React.lazy(() => import('./components/TarotReading'));
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
  const arcanos_mayores = arcanosMayoresData as ArcanosMayoresType;

  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Nav />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route
                  path="/lecturas"
                  element={<LazyTarotReading cartas={arcanos_mayores.arcanos.arcanos_mayores} getImagePath={(numero, nombre) => `/images/arcanos/${numero}_${nombre}.jpg`} />}
                />
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
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
