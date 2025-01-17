import React, { useState } from 'react';
import TreeOfLife from './TreeOfLife';

const ArbolVida: React.FC = () => {
  const [senderoActivo, setSenderoActivo] = useState<string>('');

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
          Árbol de la Vida
        </h1>
        <p className="text-lg sm:text-xl text-twilight-text leading-relaxed max-w-2xl mx-auto">
          Explora el Árbol de la Vida (Etz Chaim), el diagrama central de la Cábala que representa
          la estructura del universo y el camino de la creación divina.
        </p>
      </div>

      {/* Árbol de la Vida */}
      <div className="max-w-4xl mx-auto">
        <TreeOfLife sendero={senderoActivo} showDetails={true} />
      </div>

      {/* Descripción */}
      <div className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          Sobre el Árbol de la Vida
        </h2>
        <p className="text-twilight-text leading-relaxed mb-4">
          El Árbol de la Vida es un modelo sagrado que representa la creación del universo
          y el camino de retorno a la divinidad. Está compuesto por diez Sefirot (esferas)
          conectadas por veintidós senderos, cada uno asociado con una letra hebrea y una
          carta del Tarot.
        </p>
        <p className="text-twilight-text leading-relaxed">
          Cada Sefirá representa un aspecto diferente de la manifestación divina, desde
          la más abstracta (Kether, la Corona) hasta la más concreta (Malkuth, el Reino).
          Los senderos entre ellas representan los procesos y transformaciones necesarios
          para el desarrollo espiritual.
        </p>
      </div>
    </div>
  );
};

export default ArbolVida;