/**
 * @fileoverview Componente que presenta información sobre los rituales mágicos de la Aurora Dorada.
 */

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaStar, FaMoon, FaSun } from 'react-icons/fa';

interface Ritual {
  id: string;
  titulo: string;
  descripcion: string;
  proposito: string;
  nivel: string;
  elementos: string[];
  icono: React.ReactNode;
}

const rituales: Ritual[] = [
  {
    id: 'pilar-medio',
    titulo: 'Ritual del Pilar del Medio',
    descripcion: `El Ritual del Pilar del Medio es una práctica fundamental que alinea
      los centros energéticos del practicante con las esferas del Árbol de
      la Vida. Este ritual establece una conexión directa con las fuerzas
      divinas y fortalece el canal central de energía.`,
    proposito: 'Equilibrio, centramiento y conexión con las fuerzas divinas',
    nivel: 'Básico',
    elementos: ['Visualización', 'Vibración de nombres', 'Meditación'],
    icono: <FaSun className="text-2xl" />
  },
  {
    id: 'pentagrama',
    titulo: 'Ritual Menor del Pentagrama',
    descripcion: `Este ritual es esencial para la purificación del espacio mágico y la
      protección del practicante. Involucra la visualización y trazado de
      pentagramas en el aire, junto con la invocación de los Arcángeles
      y la creación de un espacio sagrado.`,
    proposito: 'Purificación, protección y equilibrio elemental',
    nivel: 'Básico',
    elementos: ['Pentagramas', 'Nombres divinos', 'Elementos'],
    icono: <FaStar className="text-2xl" />
  },
  {
    id: 'rosa-cruz',
    titulo: 'Ritual de la Rosa Cruz',
    descripcion: `Un ritual más avanzado que trabaja con las energías planetarias y
      la cruz cabalística. Integra simbolismo rosacruz con prácticas
      mágicas, creando un campo de fuerza espiritual más refinado y
      estableciendo conexiones con las influencias planetarias.`,
    proposito: 'Desarrollo espiritual y conexión con fuerzas planetarias',
    nivel: 'Avanzado',
    elementos: ['Cruz Cabalística', 'Rosas', 'Fuerzas planetarias'],
    icono: <FaMoon className="text-2xl" />
  }
];

const Rituales: React.FC = () => {
  const [detallesExpandidos, setDetallesExpandidos] = useState<{ [key: string]: boolean }>({});

  const toggleDetalle = (ritualId: string) => {
    setDetallesExpandidos(prev => ({
      ...prev,
      [ritualId]: !prev[ritualId]
    }));
  };

  return (
    <div className="rituales-container p-4 bg-twilight-background/95 rounded-lg shadow-lg">
      <div className="rituales-header text-center mb-6">
        <h1 className="text-3xl font-bold text-twilight-accent">Rituales de la Aurora Dorada</h1>
        <p className="rituales-intro text-lg text-twilight-text">
          Explora los rituales fundamentales del sistema mágico de la Aurora Dorada.
          Estos rituales son herramientas para el desarrollo espiritual y la
          comprensión de los misterios esotéricos.
        </p>
      </div>

      <div className="rituales-sections space-y-6">
        {rituales.map((ritual) => (
          <section key={ritual.id} className="ritual-section p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              {ritual.icono}
              <h2 className="text-xl font-semibold">{ritual.titulo}</h2>
            </div>

            <p className="text-gray-700">{ritual.descripcion.substring(0, 100)}...</p>

            <button
              className="w-full flex justify-between items-center p-3 rounded-lg bg-twilight-background hover:bg-twilight-accent transition-colors mt-4"
              onClick={() => toggleDetalle(ritual.id)}
            >
              <span className="text-twilight-text">Ver detalles</span>
              {detallesExpandidos[ritual.id] ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {detallesExpandidos[ritual.id] && (
              <div className="mt-4 space-y-2">
                <div className="ritual-nota">
                  <strong>Propósito:</strong> {ritual.proposito}
                </div>

                <div className="ritual-nota">
                  <strong>Nivel:</strong> {ritual.nivel}
                </div>

                <div className="ritual-nota">
                  <strong>Elementos clave:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {ritual.elementos.map((elemento, index) => (
                      <li key={index} className="text-gray-600">{elemento}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700">{ritual.descripcion}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="rituales-advertencia mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
        <h3 className="font-bold text-red-600">Advertencia Importante</h3>
        <p className="text-red-700">
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