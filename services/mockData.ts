import { Job } from '../types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Fahrzeuglackierer (m/w/d) - Premium Segment',
    company: 'AutoGlanz Studio München',
    location: 'München',
    type: 'Vollzeit',
    salary: '3.800€ - 4.500€',
    description: 'Wir suchen einen erfahrenen Lackierer für Sportwagen und Oldtimer. Höchste Präzision erforderlich.',
    tags: ['Lackierung', 'Oldtimer', 'Finish'],
    postedDate: '2024-05-20',
    isPromoted: true
  },
  {
    id: '2',
    title: 'Industrielackierer / Pulverbeschichter',
    company: 'Metallbau Schmidt GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: 'Nach Tarif',
    description: 'Bedienung von Pulverbeschichtungsanlagen für Großbauteile. Schichtarbeit möglich.',
    tags: ['Pulver', 'Industrie', 'Schichtarbeit'],
    postedDate: '2024-05-18',
    isPromoted: false
  },
  {
    id: '3',
    title: 'Lackiermeister als Werkstattleiter',
    company: 'Karosserie & Lack Center',
    location: 'Berlin',
    type: 'Vollzeit',
    salary: '5.200€+',
    description: 'Führung unseres Lack-Teams (10 Mitarbeiter). Qualitätskontrolle und Kundenannahme.',
    tags: ['Meister', 'Führung', 'Management'],
    postedDate: '2024-05-22',
    isPromoted: true
  },
  {
    id: '4',
    title: 'Ausbildung zum Fahrzeuglackierer 2024',
    company: 'ColorWorks',
    location: 'Köln',
    type: 'Ausbildung',
    salary: 'Ausbildungsvergütung',
    description: 'Starte deine Karriere mit Farbe! Wir bringen dir alles bei, vom Schleifen bis zum Hochglanz.',
    tags: ['Azubi', 'Ausbildung', 'Start'],
    postedDate: '2024-05-15',
    isPromoted: false
  },
  {
    id: '5',
    title: 'Smart Repair Spezialist',
    company: 'QuickFix Autopark',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    salary: 'Leistungsbezogen',
    description: 'Experte für Spot-Repair und Dellentechnik gesucht. Mobiler Service.',
    tags: ['Smart Repair', 'Mobil', 'Service'],
    postedDate: '2024-05-21',
    isPromoted: false
  }
];