import React from 'react';
import { FaExclamationTriangle, FaUnlock, FaUserShield, FaBookReader } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-twilight-background/95 backdrop-blur-md border-t border-twilight-secondary/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Aviso de Uso */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaExclamationTriangle className="text-2xl text-twilight-accent" />
              <h3 className="text-lg font-bold text-twilight-text">Aviso de Uso y Discreción</h3>
            </div>
            <p className="text-twilight-text/80 text-sm leading-relaxed">
              Este sitio web ha sido desarrollado para uso exclusivo de los iniciados en el nivel de{' '}
              <span className="text-twilight-accent font-medium">Practicus 3=8</span> de la{' '}
              <span className="text-twilight-accent font-medium">Orden Hermética de la Aurora Dorada</span>.
            </p>
          </section>

          {/* Derechos de Autor */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaUnlock className="text-2xl text-twilight-accent" />
              <h3 className="text-lg font-bold text-twilight-text">Libre de Derechos</h3>
            </div>
            <div className="text-twilight-text/80 text-sm leading-relaxed">
              <p className="mb-2">Material de uso libre basado en los escritos de Israel Regardie:</p>
              <blockquote className="pl-4 border-l-2 border-twilight-accent/50 italic">
                <span className="text-twilight-accent">Israel Regardie.</span><br />
                The Golden Dawn: The Original Account of the Teachings, Rites and Ceremonies of the Hermetic Order. 1937.
              </blockquote>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaUserShield className="text-2xl text-twilight-accent" />
              <h3 className="text-lg font-bold text-twilight-text">Disclaimers</h3>
            </div>
            <ul className="text-twilight-text/80 text-sm space-y-2 list-inside">
              <li className="flex items-start">
                <span className="text-twilight-accent mr-2">•</span>
                <span>Contenido solo para fines de estudio</span>
              </li>
              <li className="flex items-start">
                <span className="text-twilight-accent mr-2">•</span>
                <span>Uso bajo responsabilidad del practicante</span>
              </li>
              <li className="flex items-start">
                <span className="text-twilight-accent mr-2">•</span>
                <span>No sustituye asesoría profesional</span>
              </li>
            </ul>
          </section>

          {/* Uso Exclusivo */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaBookReader className="text-2xl text-twilight-accent" />
              <h3 className="text-lg font-bold text-twilight-text">Uso Exclusivo</h3>
            </div>
            <p className="text-twilight-text/80 text-sm leading-relaxed">
              Al acceder, el usuario declara ser miembro iniciado en el grado de Practicus 3=8,
              o estar en proceso de iniciación supervisada.
            </p>
          </section>
        </div>

        {/* Separador */}
        <div className="my-8 border-t border-twilight-secondary/20"></div>

        {/* Copyright */}
        <div className="text-center text-twilight-text/60 text-sm">
          <p>
            ✧ Orden Hermética de la Aurora Dorada ✧<br />
            <span className="text-twilight-accent">Ex Deo Nascimur, In Yeheshuah Morimur, Per Spiritum Sanctum Reviviscimus</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;