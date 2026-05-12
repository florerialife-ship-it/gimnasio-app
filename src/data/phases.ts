import type { PhaseInfo } from '../types';

export const phases: PhaseInfo[] = [
  {
    phase: 0,
    name: 'Adaptación y regreso al movimiento',
    description: 'Crear el hábito, mejorar la movilidad, activar los músculos dormidos y evitar lesiones.',
    objective: 'Crear hábito, movilidad, activación muscular',
    suggestedDuration: '2 semanas',
    weeksMin: 2,
    weeksMax: 3
  },
  {
    phase: 1,
    name: 'Base física',
    description: 'Mejorar técnica de ejercicios, resistencia muscular y condición física general.',
    objective: 'Técnica, resistencia y condición base',
    suggestedDuration: '4 semanas',
    weeksMin: 3,
    weeksMax: 5
  },
  {
    phase: 2,
    name: 'Fuerza e hipertrofia inicial',
    description: 'Ganar fuerza y músculo de forma progresiva. Dividir por tren superior, tren inferior y cuerpo completo.',
    objective: 'Fuerza e hipertrofia progresiva',
    suggestedDuration: '6 semanas',
    weeksMin: 4,
    weeksMax: 8
  },
  {
    phase: 3,
    name: 'Progresión intermedia',
    description: 'Mejorar fuerza, volumen, condición y definición con divisiones tipo empuje/jalón/pierna o superior/inferior.',
    objective: 'Fuerza, volumen, condición y definición',
    suggestedDuration: '6 semanas',
    weeksMin: 4,
    weeksMax: 8
  },
  {
    phase: 4,
    name: 'Mantenimiento y mejora continua',
    description: 'Sostener resultados y seguir progresando con variedad de rutinas.',
    objective: 'Mantener y seguir mejorando',
    suggestedDuration: 'Indefinido',
    weeksMin: 1,
    weeksMax: 999
  }
];

export const getPhaseInfo = (phase: number): PhaseInfo | undefined =>
  phases.find(p => p.phase === phase);
