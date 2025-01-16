/**
 * @fileoverview Componente que presenta información sobre los rituales mágicos de la Aurora Dorada.
 */

import React from 'react';

const Rituales: React.FC = () => {
  return (
    <div className="rituales-container">
      <div className="rituales-header">
        <h1>Rituales de la Aurora Dorada</h1>
        <p className="rituales-intro">
          Explora los rituales fundamentales del sistema mágico de la Aurora Dorada.
          Estos rituales son herramientas para el desarrollo espiritual y la
          comprensión de los misterios esotéricos.
        </p>
      </div>

      <div className="rituales-sections">
        <section className="ritual-section">
          <h2>✧ Ritual del Pilar del Medio</h2>
          <p>
            El Ritual del Pilar del Medio es una práctica fundamental que alinea
            los centros energéticos del practicante con las esferas del Árbol de
            la Vida.
          </p>
          <div className="ritual-nota">
            <strong>Propósito:</strong> Equilibrio, centramiento y conexión con
            las fuerzas divinas.
          </div>
        </section>

        <section className="ritual-section">
          <h2>✧ Ritual Menor del Pentagrama</h2>
          <p>
            Este ritual es esencial para la purificación del espacio mágico y la
            protección del practicante. Involucra la visualización y trazado de
            pentagramas en el aire.
          </p>
          <div className="ritual-nota">
            <strong>Propósito:</strong> Purificación, protección y equilibrio
            elemental.
          </div>
        </section>

        <section className="ritual-section">
          <h2>✧ Ritual de la Rosa Cruz</h2>
          <p>
            Un ritual más avanzado que trabaja con las energías planetarias y
            la cruz cabalística. Integra simbolismo rosacruz con prácticas
            mágicas.
          </p>
          <div className="ritual-nota">
            <strong>Propósito:</strong> Desarrollo espiritual y conexión con
            fuerzas planetarias.
          </div>
        </section>
      </div>

      <div className="rituales-advertencia">
        <h3>Advertencia Importante</h3>
        <p>
          Los rituales presentados aquí son para estudio y referencia. La práctica
          real requiere preparación adecuada y, preferiblemente, guía de un
          practicante experimentado. Respeta siempre los principios éticos y
          la tradición.
        </p>
      </div>
    </div>
  );
};

export default Rituales;