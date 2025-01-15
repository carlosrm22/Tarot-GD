import React, { useState } from 'react';
import './App.css';
import arcanosMayoresData from './Arcanos_Mayores_Tarot.json';
import { ArcanosMayores, Carta } from './types/tarot';

function App() {
  const { arcanos: { arcanos_mayores } } = arcanosMayoresData as ArcanosMayores;
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot - Arcanos Mayores</h1>
        <p>H. Frater KarnaK</p>
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
                    <p><strong>Número:</strong> {carta.numero}</p>
                    <p><strong>Hebreo:</strong> {carta.hebreo} ({carta.letra})</p>
                    <p><strong>Signo:</strong> {carta.signo}</p>
                    <p><strong>Atribución:</strong> {carta.atribucion}</p>
                    <p><strong>Significado:</strong> {carta.significado}</p>
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
