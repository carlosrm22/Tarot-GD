import React from 'react';
import './App.css';
import arcanosMayoresData from './Arcanos_Mayores_Tarot.json';
import { ArcanosMayores, Carta } from './types/tarot';

function App() {
  const { arcanos: { arcanos_mayores } } = arcanosMayoresData as ArcanosMayores;

  const getImagePath = (numero: number, nombre: string) => {
    // Mapa de nombres especiales
    const nombresEspeciales: { [key: string]: string } = {
      "La Sacerdotisa": "La Gran Sacerdotisa",
      "El Carro": "La Carroza",
      "La Rueda de la Fortuna": "La Rueda de la Fortuna",
      "Templanza": "La Templanza",
    };

    const nombreArchivo = nombresEspeciales[nombre] || nombre;
    const path = `/images/${numero} ${nombreArchivo}.png`;
    console.log('Intentando cargar imagen:', path);
    return path;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot - Arcanos Mayores</h1>
      </header>
      <main className="cards-container">
        {arcanos_mayores.map((carta: Carta) => {
          const imagePath = getImagePath(carta.numero, carta.nombre);
          return (
            <div key={carta.numero} className="card">
              <div
                className="card-background"
                style={{
                  backgroundImage: `url("${imagePath}")`,
                }}
              />
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
          );
        })}
      </main>
    </div>
  );
}

export default App;
