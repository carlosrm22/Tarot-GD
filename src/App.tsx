import React, { useState, useEffect } from 'react';
import './App.css';
import arcanosMayoresData from './Arcanos_Mayores_Tarot.json';
import { ArcanosMayores, Carta } from './types/tarot';

function App() {
  const { arcanos: { arcanos_mayores } } = arcanosMayoresData as ArcanosMayores;
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});
  const [detallesExpandidos, setDetallesExpandidos] = useState<{
    [key: string]: boolean;
  }>({});
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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
    setIsDarkMode(prev => !prev);
  };

  const getImagePath = (numero: number, nombre: string) => {
    const nombresEspeciales: { [key: string]: string } = {
      "La Sacerdotisa": "La Gran Sacerdotisa",
      "El Carro": "La Carroza",
      "La Rueda de la Fortuna": "La Rueda de la Fortuna",
      "Templanza": "La Templanza",
    };

    const nombreArchivo = nombresEspeciales[nombre] || nombre;
    return `/images/${numero} ${nombreArchivo}.png`;
  };

  const toggleCard = (numero: number) => {
    setCartasVolteadas(prev => ({
      ...prev,
      [numero]: !prev[numero]
    }));
  };

  const toggleDetalle = (cartaId: number, detalle: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = `${cartaId}-${detalle}`;
    setDetallesExpandidos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDetalleExpandido = (cartaId: number, detalle: string) => {
    return detallesExpandidos[`${cartaId}-${detalle}`] || false;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot - Arcanos Mayores</h1>
        <div className="theme-switch">
          <span>🌞</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <span>🌙</span>
        </div>
      </header>
      <main className="cards-container">
        {arcanos_mayores.map((carta: Carta) => {
          const imagePath = getImagePath(carta.numero, carta.nombre);
          const isFlipped = cartasVolteadas[carta.numero];

          return (
            <div
              key={carta.numero}
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => toggleCard(carta.numero)}
            >
              <div className="card-front">
                <img
                  src={imagePath}
                  alt={carta.nombre}
                  loading="lazy"
                />
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>{carta.nombre}</h2>
                  <h3>{carta.titulo}</h3>
                  <div className="card-details">
                    <div
                      className={`detail-item ${isDetalleExpandido(carta.numero, 'numero') ? 'expanded' : ''}`}
                      onClick={(e) => toggleDetalle(carta.numero, 'numero', e)}
                    >
                      <div className="detail-header">
                        <strong>Número</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.numero}
                      </div>
                    </div>

                    <div
                      className={`detail-item ${isDetalleExpandido(carta.numero, 'hebreo') ? 'expanded' : ''}`}
                      onClick={(e) => toggleDetalle(carta.numero, 'hebreo', e)}
                    >
                      <div className="detail-header">
                        <strong>Hebreo</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.hebreo} ({carta.letra})
                      </div>
                    </div>

                    <div
                      className={`detail-item ${isDetalleExpandido(carta.numero, 'signo') ? 'expanded' : ''}`}
                      onClick={(e) => toggleDetalle(carta.numero, 'signo', e)}
                    >
                      <div className="detail-header">
                        <strong>Signo</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.signo}
                      </div>
                    </div>

                    <div
                      className={`detail-item ${isDetalleExpandido(carta.numero, 'atribucion') ? 'expanded' : ''}`}
                      onClick={(e) => toggleDetalle(carta.numero, 'atribucion', e)}
                    >
                      <div className="detail-header">
                        <strong>Atribución</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.atribucion}
                      </div>
                    </div>

                    <div
                      className={`detail-item ${isDetalleExpandido(carta.numero, 'significado') ? 'expanded' : ''}`}
                      onClick={(e) => toggleDetalle(carta.numero, 'significado', e)}
                    >
                      <div className="detail-header">
                        <strong>Significado</strong>
                        <span className="expand-icon">▼</span>
                      </div>
                      <div className="detail-content">
                        {carta.significado}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
