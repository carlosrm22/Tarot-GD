import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import TarotHome from './TarotHome';
import DailyReading from './DailyReading';
import NewReading from './NewReading';
import AllCards from './AllCards';
import LearnTarot from './LearnTarot';

export const tarotRoutes: RouteObject[] = [
  {
    path: '/tarot',
    Component: TarotHome,
  },
  {
    path: '/tarot/lectura-diaria',
    Component: DailyReading,
  },
  {
    path: '/tarot/nueva-lectura',
    Component: NewReading,
  },
  {
    path: '/tarot/cartas',
    Component: AllCards,
  },
  {
    path: '/tarot/aprender',
    Component: LearnTarot,
  },
  {
    path: '/tarot/arcanos-mayores',
    Component: lazy(() => import('./ArcanosMayores')),
  },
  {
    path: '/tarot/historial',
    Component: lazy(() => import('./ReadingHistory')),
  }
];