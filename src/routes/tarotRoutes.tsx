/**
 * @fileoverview Configuración de rutas para la sección de Tarot.
 */

import React from "react";
import { RouteObject } from "react-router-dom";
import TarotHome from "../components/tarot/TarotHome";
import DailyReading from "../components/tarot/DailyReading";
import NewReading from "../components/tarot/NewReading";
import AllCards from "../components/tarot/AllCards";

const tarotRoutes: RouteObject[] = [
  {
    path: "/tarot",
    children: [
      {
        index: true,
        element: <TarotHome />,
      },
      {
        path: "lectura-diaria",
        element: <DailyReading />,
      },
      {
        path: "nueva-lectura",
        element: <NewReading />,
      },
      {
        path: "cartas",
        element: <AllCards />,
      },
      // TODO: Añadir más rutas según se desarrollen los componentes
      {
        path: "arcanos-mayores",
        lazy: async () => {
          const { default: ArcanosMayores } = await import(
            "../components/tarot/ArcanosMayores"
          );
          return { element: <ArcanosMayores /> };
        },
      },
      {
        path: "historial",
        lazy: async () => {
          const { default: ReadingHistory } = await import(
            "../components/tarot/ReadingHistory"
          );
          return { element: <ReadingHistory /> };
        },
      },
      {
        path: "aprender",
        lazy: async () => {
          const { default: LearnTarot } = await import(
            "../components/tarot/LearnTarot"
          );
          return { element: <LearnTarot /> };
        },
      },
    ],
  },
];

export default tarotRoutes;