import React from 'react';

interface ElementSymbolProps {
  element: string;
}

const ElementSymbol: React.FC<ElementSymbolProps> = ({ element }) => {
  const getSymbol = (element: string): string => {
    switch (element) {
      // Elementos
      case "Aire":
        return "🜁";
      case "Agua":
        return "🜄";
      case "Fuego":
        return "🜂";
      case "Tierra":
        return "🜃";
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
      default:
        return "";
    }
  };

  return <span className="elemento-simbolo">{getSymbol(element)}</span>;
};

export default ElementSymbol;