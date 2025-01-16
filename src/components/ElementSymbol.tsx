import React from 'react';
import { TipoEnergia } from '../types/correspondencias';

interface ElementSymbolProps {
  element: TipoEnergia | string;
}

const ElementSymbol: React.FC<ElementSymbolProps> = ({ element }) => {
  const getSymbol = (element: string): string => {
    switch (element) {
      // Elementos
      case "Tierra":
        return "🜃";
      case "Aire":
        return "🜁";
      case "Agua":
        return "🜄";
      case "Fuego":
        return "🜂";
      case "Supremo Elemental":
        return "⛤";
      // Planetas
      case "Luna":
        return "☽";
      case "Mercurio":
        return "☿";
      case "Venus":
        return "♀";
      case "Sol":
        return "⨀";
      case "Marte":
        return "♂";
      case "Júpiter":
        return "♃";
      case "Saturno":
        return "♄";
      // Signos zodiacales
      case "Aries":
        return "♈";
      case "Tauro":
        return "♉";
      case "Géminis":
        return "♊";
      case "Cáncer":
        return "♋";
      case "Leo":
        return "♌";
      case "Virgo":
        return "♍";
      case "Libra":
        return "♎";
      case "Escorpio":
        return "♏";
      case "Sagitario":
        return "♐";
      case "Capricornio":
        return "♑";
      case "Acuario":
        return "♒";
      case "Piscis":
        return "♓";
      case "Zodiaco":
        return "♅";
      // Sefirot
      case "Maljut":
        return "⊗";
      case "Yesod":
        return "⓽";
      case "Hod":
        return "⯄";
      case "Netsaj":
        return "⯃";
      case "Tiféret":
        return "⬡";
      case "Guevurá":
        return "⬠";
      case "Jesed":
        return "⎕";
      case "Biná":
        return "△";
      case "Jojmá":
        return "⨁";
      case "Kéter":
        return "⨀";
      case "Sefirot":
        return "✡";
      default:
        return "";
    }
  };

  return <span className="elemento-simbolo">{getSymbol(element)}</span>;
};

export default ElementSymbol;