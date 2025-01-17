/**
 * @fileoverview Componente principal de la aplicación de Tarot.
 * Gestiona la visualización de los Arcanos Mayores, el sistema de autenticación,
 * y la interacción con el Árbol de la Vida.
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Lazy loading de componentes
const Inicio = lazy(() => import('./components/Inicio'));
const Alefato = lazy(() => import('./components/Alefato'));
const Rituales = lazy(() => import('./components/Rituales'));
const Simbolos = lazy(() => import('./components/Simbolos'));
const Enoquiano = lazy(() => import('./components/Enoquiano'));
const ArbolVida = lazy(() => import('./components/ArbolVida'));
const Hermetismo = lazy(() => import('./components/Hermetismo'));

// Componentes de Tarot
const TarotHome = lazy(() => import('./components/tarot/TarotHome'));
const DailyReading = lazy(() => import('./components/tarot/DailyReading'));
const NewReading = lazy(() => import('./components/tarot/NewReading'));
const AllCards = lazy(() => import('./components/tarot/AllCards'));
const ArcanosMayores = lazy(() => import('./components/tarot/ArcanosMayores'));
const LearnTarot = lazy(() => import('./components/tarot/LearnTarot'));
const ReadingHistory = lazy(() => import('./components/tarot/ReadingHistory'));

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AuthProvider>
          <div className="flex flex-col min-h-screen bg-twilight-background text-twilight-text">
            <Nav />
            <main className="flex-grow">
              <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                  <Route path="/" element={<Inicio />} />
                  <Route path="/hermetismo" element={<Hermetismo />} />
                  <Route path="/alefato" element={<Alefato />} />
                  <Route path="/rituales" element={<Rituales />} />
                  <Route path="/simbolos" element={<Simbolos tipo="pentagramas" />} />
                  <Route path="/enoquiano" element={<Enoquiano />} />
                  <Route path="/arbol-vida" element={<ArbolVida />} />

                  {/* Rutas de Tarot */}
                  <Route path="/tarot" element={<TarotHome />} />
                  <Route path="/tarot/lectura-diaria" element={<DailyReading />} />
                  <Route path="/tarot/nueva-lectura" element={<NewReading />} />
                  <Route path="/tarot/cartas" element={<AllCards />} />
                  <Route path="/tarot/arcanos-mayores" element={<ArcanosMayores />} />
                  <Route path="/tarot/historial" element={<ReadingHistory />} />
                  <Route path="/tarot/aprender" element={<LearnTarot />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
