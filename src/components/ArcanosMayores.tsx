import React, { useState } from 'react';
import TreeOfLife from './TreeOfLife';
import arcanosMayoresData from '../Arcanos_Mayores_Tarot.json';
import { ArcanosMayores as ArcanosMayoresType } from '../types/tarot';

const ArcanosMayores: React.FC = () => {
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});
  const [detallesExpandidos, setDetallesExpandidos] = useState<{ [key: string]: boolean }>({});
  const arcanos_mayores = arcanosMayoresData as ArcanosMayoresType;

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

  const getImagePath = (numero: number, nombre: string) => {
    const nombresEspeciales: { [key: string]: string } = {
      "La Sacerdotisa": "La Gran Sacerdotisa",
      "El Carro": "La Carroza",
      "La Rueda de la Fortuna": "La Rueda de la Fortuna",
      "Templanza": "La Templanza",
    };

    const nombreArchivo = nombresEspeciales[nombre] || nombre;
    return `${process.env.PUBLIC_URL}/images/${numero} ${nombreArchivo}.png`;
  };

  const expandirTodo = (cartaId: number) => {
    const secciones = ['numero', 'hebreo', 'signo', 'atribucion', 'sendero', 'significado'];
    const nuevosDetalles = { ...detallesExpandidos };
    secciones.forEach(seccion => {
      nuevosDetalles[`${cartaId}-${seccion}`] = true;
    });
    setDetallesExpandidos(nuevosDetalles);
  };

  const contraerTodo = (cartaId: number) => {
    const secciones = ['numero', 'hebreo', 'signo', 'atribucion', 'sendero', 'significado'];
    const nuevosDetalles = { ...detallesExpandidos };
    secciones.forEach(seccion => {
      nuevosDetalles[`${cartaId}-${seccion}`] = false;
    });
    setDetallesExpandidos(nuevosDetalles);
  };

  return (
    <div className="todas-cartas-container">
      <div className="todas-cartas-header">
        <h1>Arcanos Mayores</h1>
        <p className="todas-cartas-intro">
          Explora los 22 Arcanos Mayores del Tarot y sus profundas correspondencias
          esotéricas según el sistema de la Aurora Dorada.
        </p>
      </div>

      <div className="cards-container">
        {arcanos_mayores.arcanos.arcanos_mayores.map(carta => (
          <div
            key={carta.numero}
            className={`card ${cartasVolteadas[carta.numero] ? 'flipped' : ''}`}
            onClick={() => toggleCard(carta.numero)}
          >
            <div className="card-front">
              <img
                src={getImagePath(carta.numero, carta.nombre)}
                alt={carta.nombre}
                loading="lazy"
              />
            </div>
            <div className="card-back">
              <div className="card-content">
                <h2>{carta.nombre}</h2>
                <h3>{carta.titulo}</h3>

                <div className="card-details">
                  <div className="expand-all-controls">
                    <button
                      className="expand-all-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        expandirTodo(carta.numero);
                      }}
                      title="Expandir todo"
                    >
                      ⏬
                    </button>
                    <button
                      className="expand-all-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        contraerTodo(carta.numero);
                      }}
                      title="Contraer todo"
                    >
                      ⏫
                    </button>
                  </div>

                  <div
                    className={`detail-item ${isDetalleExpandido(carta.numero, 'numero') ? 'expanded' : ''}`}
                  >
                    <div
                      className="detail-header"
                      onClick={(e) => toggleDetalle(carta.numero, 'numero', e)}
                    >
                      <span>Número</span>
                      <span className="expand-icon">▼</span>
                    </div>
                    <div className="detail-content">
                      <p>{carta.numero}</p>
                    </div>
                  </div>

                  <div
                    className={`detail-item ${isDetalleExpandido(carta.numero, 'hebreo') ? 'expanded' : ''}`}
                  >
                    <div
                      className="detail-header"
                      onClick={(e) => toggleDetalle(carta.numero, 'hebreo', e)}
                    >
                      <span>Letra Hebrea</span>
                      <span className="expand-icon">▼</span>
                    </div>
                    <div className="detail-content" data-section="hebreo">
                      <p>
                        {carta.hebreo}
                        <span className="letra-hebrea">{carta.letra}</span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={`detail-item ${isDetalleExpandido(carta.numero, 'signo') ? 'expanded' : ''}`}
                  >
                    <div
                      className="detail-header"
                      onClick={(e) => toggleDetalle(carta.numero, 'signo', e)}
                    >
                      <span>Signo</span>
                      <span className="expand-icon">▼</span>
                    </div>
                    <div className="detail-content" data-section="signo">
                      <p>
                        {carta.signo}
                        <span className="simbolo-signo">
                          {carta.signo === "Aire" ? "🜁" :
                           carta.signo === "Agua" ? "🜄" :
                           carta.signo === "Fuego" ? "🜂" :
                           carta.signo === "Luna" ? "☽" :
                           carta.signo === "Mercurio" ? "☿" :
                           carta.signo === "Venus" ? "♀" :
                           carta.signo === "Sol" ? "⨀" :
                           carta.signo === "Marte" ? "♂" :
                           carta.signo === "Júpiter" ? "♃" :
                           carta.signo === "Saturno" ? "♄" :
                           carta.signo === "Piscis" ? "♓" :
                           carta.signo === "Acuario" ? "♒" :
                           carta.signo === "Capricornio" ? "♑" :
                           carta.signo === "Sagitario" ? "♐" :
                           carta.signo === "Escorpio" ? "♏" :
                           carta.signo === "Libra" ? "♎" :
                           carta.signo === "Virgo" ? "♍" :
                           carta.signo === "Leo" ? "♌" :
                           carta.signo === "Cáncer" ? "♋" :
                           carta.signo === "Géminis" ? "♊" :
                           carta.signo === "Tauro" ? "♉" :
                           carta.signo === "Aries" ? "♈" : ""}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={`detail-item ${isDetalleExpandido(carta.numero, 'atribucion') ? 'expanded' : ''}`}
                  >
                    <div
                      className="detail-header"
                      onClick={(e) => toggleDetalle(carta.numero, 'atribucion', e)}
                    >
                      <span>Atribución</span>
                      <span className="expand-icon">▼</span>
                    </div>
                    <div className="detail-content" data-section="atribucion">
                      <p>{carta.atribucion}</p>
                    </div>
                  </div>

                  <div
                    className={`detail-item ${isDetalleExpandido(carta.numero, 'sendero') ? 'expanded' : ''}`}
                  >
                    <div
                      className="detail-header"
                      onClick={(e) => toggleDetalle(carta.numero, 'sendero', e)}
                    >
                      <span>Sendero</span>
                      <span className="expand-icon">▼</span>
                    </div>
                    <div className="detail-content" data-section="sendero">
                      <p>{carta.sendero}</p>
                      <TreeOfLife sendero={carta.sendero} />
                    </div>
                  </div>

                  <div
                    className={`detail-item ${isDetalleExpandido(carta.numero, 'significado') ? 'expanded' : ''}`}
                  >
                    <div
                      className="detail-header"
                      onClick={(e) => toggleDetalle(carta.numero, 'significado', e)}
                    >
                      <span>Significado</span>
                      <span className="expand-icon">▼</span>
                    </div>
                    <div className="detail-content" data-section="significado">
                      <p>{carta.significado}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArcanosMayores;