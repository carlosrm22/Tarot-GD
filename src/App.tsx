/**
 * @fileoverview Componente principal de la aplicación de Tarot.
 * Gestiona la visualización de los Arcanos Mayores, el sistema de autenticación,
 * y la interacción con el Árbol de la Vida.
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

// Lazy loading de componentes
const Inicio = lazy(() => import('./components/Inicio'));
const TarotReading = lazy(() => import('./components/TarotReading'));
const TodasLasCartas = lazy(() => import('./components/TodasLasCartas'));
const ArcanosMayores = lazy(() => import('./components/ArcanosMayores'));
const Alefato = lazy(() => import('./components/Alefato'));
const Rituales = lazy(() => import('./components/Rituales'));
const Simbolos = lazy(() => import('./components/Simbolos'));
const HerramientasMagicas = lazy(() => import('./components/HerramientasMagicas'));
const Enoquiano = lazy(() => import('./components/Enoquiano'));
const ArbolVida = lazy(() => import('./components/ArbolVida'));

// Componente de carga
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-twilight-accent"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-twilight-background text-twilight-text">
              <Nav />
              <main className="flex-grow container mx-auto px-4 py-8">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/lecturas" element={<TarotReading />} />
                    <Route path="/cartas" element={<TodasLasCartas />} />
                    <Route path="/arcanos-mayores" element={<ArcanosMayores />} />
                    <Route path="/alefato" element={<Alefato />} />
                    <Route path="/rituales" element={<Rituales />} />
                    <Route path="/arbol-vida" element={<ArbolVida />} />
                    <Route path="/pentagramas" element={<Simbolos tipo="pentagramas" />} />
                    <Route path="/hexagramas" element={<Simbolos tipo="hexagramas" />} />
                    <Route path="/sigilos" element={<Simbolos tipo="sigilos" />} />
                    <Route path="/talismanes" element={<Simbolos tipo="talismanes" />} />
                    <Route path="/armas" element={<HerramientasMagicas tipo="armas" />} />
                    <Route path="/tatvas" element={<HerramientasMagicas tipo="tatvas" />} />
                    <Route path="/formas-divinas" element={<HerramientasMagicas tipo="formas" />} />
                    <Route path="/enoquiano" element={<Enoquiano />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
