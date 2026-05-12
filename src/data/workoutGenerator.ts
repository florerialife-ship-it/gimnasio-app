import type { Workout, WorkoutBlock, WorkoutExercise, Exercise, UserSettings, FatigueLevel, WorkoutPhase } from '../types';
import { exercises } from './exercises';

const pick = <T>(arr: T[], n: number): T[] => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
};

const filterByEquipment = (eqs: Exercise[], available: string[]): Exercise[] =>
  eqs.filter(e => e.equipment.every(equip => available.includes(equip)));

const filterByLevel = (eqs: Exercise[], phase: WorkoutPhase): Exercise[] => {
  if (phase <= 1) return eqs.filter(e => e.level === 'principiante');
  if (phase === 2) return eqs.filter(e => e.level === 'principiante' || e.level === 'intermedio');
  return eqs;
};

const makeExercise = (ex: Exercise, sets: number, reps: number, rest: number, time?: number): WorkoutExercise => ({
  exercise: ex,
  sets,
  reps,
  timeSeconds: time,
  restSeconds: rest,
  completed: false
});

// Warmup exercises (bodyweight, mobility)
const warmupExercises = exercises.filter(e =>
  e.type === 'movilidad' || e.type === 'calentamiento' ||
  e.id === 'jumping_jacks' || e.id === 'sentadilla_libre' ||
  e.id === 'circulos_brazos' || e.id === 'bird_dog' ||
  e.id === 'dead_bug' || e.id === 'respiracion_diafragmatica'
);

// Cooldown exercises (stretching, breathing)
const cooldownExercises = exercises.filter(e =>
  e.id === 'estiramiento_pecho' || e.id === 'estiramiento_espalda' ||
  e.id === 'respiracion_diafragmatica' || e.id === 'movilidad_hombros' ||
  e.id === 'movilidad_cadera' || e.id === 'bird_dog' ||
  e.id === 'superman'
);

// Main exercises by category
const pushExercises = exercises.filter(e =>
  ['lagartija', 'lagartija_inclinada', 'press_pecho_mancuernas', 'press_militar_mancuernas', 'press_suelo_mancuernas', 'fondos_asistidos_banco'].includes(e.id)
);
const pullExercises = exercises.filter(e =>
  ['remo_mancuerna', 'remo_barra', 'remo_invertido', 'remo_banda', 'dominada_asistida', 'colgado_barra', 'curl_biceps', 'curl_martillo'].includes(e.id)
);
const legExercises = exercises.filter(e =>
  ['sentadilla_libre', 'sentadilla_goblet', 'peso_muerto_rumano_mancuernas', 'peso_muerto_barra_ligera', 'desplantes', 'step_ups_banco', 'puente_gluteo', 'hip_thrust_banco', 'buenos_dias', 'zancada_atras', 'sentadilla_pared'].includes(e.id)
);
const coreExercises = exercises.filter(e =>
  ['plancha', 'plancha_lateral', 'crunch_abdominal', 'elevacion_piernas', 'bird_dog', 'dead_bug', 'superman', 'abdominales_bicicleta'].includes(e.id)
);
const shoulderExercises = exercises.filter(e =>
  ['elevaciones_laterales', 'pajaros_mancuernas', 'press_militar_mancuernas'].includes(e.id)
);
const armExercises = exercises.filter(e =>
  ['curl_biceps', 'curl_martillo', 'extension_triceps_cuerda', 'fondos_asistidos_banco'].includes(e.id)
);
const cardioExercises = exercises.filter(e =>
  ['saltar_cuerda', 'trampolin_suave', 'jumping_jacks', 'mountain_climbers'].includes(e.id)
);

const generateWarmup = (availableEquip: string[], phase: WorkoutPhase, durationMinutes: number): WorkoutBlock => {
  const available = filterByEquipment(warmupExercises, availableEquip);
  const selected = pick(available, Math.min(6, available.length));
  const exs = selected.map(e => makeExercise(e, 1, e.type === 'movilidad' ? 10 : 15, 15, 45));

  return {
    type: 'warmup',
    title: 'Calentamiento',
    durationMinutes: Math.min(12, Math.max(6, Math.floor(durationMinutes * 0.2))),
    exercises: exs
  };
};

const generateCooldown = (availableEquip: string[], durationMinutes: number): WorkoutBlock => {
  const available = filterByEquipment(cooldownExercises, availableEquip);
  const selected = pick(available, Math.min(5, available.length));
  const exs = selected.map(e => makeExercise(e, 1, 1, 15, 30));

  return {
    type: 'cooldown',
    title: 'Enfriamiento',
    durationMinutes: Math.min(8, Math.max(4, Math.floor(durationMinutes * 0.15))),
    exercises: exs
  };
};

const generateMainBlock = (
  availableEquip: string[],
  phase: WorkoutPhase,
  durationMinutes: number,
  fatigue: FatigueLevel,
  dayNumber: number
): WorkoutBlock => {
  const fatigueMultiplier = fatigue === 'alta' ? 0.6 : fatigue === 'media' ? 0.8 : 1;

  let mainExs: Exercise[] = [];

  if (phase === 0) {
    // Full body suave
    const pool = filterByLevel(filterByEquipment([...pushExercises, ...legExercises, ...pullExercises], availableEquip), phase);
    mainExs = pick(pool, Math.floor(4 * fatigueMultiplier));
  } else if (phase === 1) {
    // Full body 3-4x/week
    const pool = filterByLevel(filterByEquipment([...pushExercises, ...legExercises, ...pullExercises, ...coreExercises], availableEquip), phase);
    const numExs = Math.max(3, Math.floor(6 * fatigueMultiplier));
    mainExs = pick(pool, numExs);
  } else if (phase === 2) {
    // Split: upper/lower/fullbody
    const dayType = dayNumber % 3;
    let pool: Exercise[] = [];
    if (dayType === 0) {
      pool = filterByLevel(filterByEquipment([...pushExercises, ...pullExercises, ...shoulderExercises, ...armExercises], availableEquip), phase);
    } else if (dayType === 1) {
      pool = filterByLevel(filterByEquipment(legExercises, availableEquip), phase);
    } else {
      pool = filterByLevel(filterByEquipment([...pushExercises, ...legExercises, ...pullExercises, ...coreExercises], availableEquip), phase);
    }
    mainExs = pick(pool, Math.max(4, Math.floor(6 * fatigueMultiplier)));
  } else if (phase === 3) {
    // PPL or upper/lower
    const dayType = dayNumber % 4;
    let pool: Exercise[] = [];
    if (dayType === 0) {
      pool = filterByLevel(filterByEquipment([...pushExercises, ...shoulderExercises], availableEquip), phase);
    } else if (dayType === 1) {
      pool = filterByLevel(filterByEquipment([...pullExercises, ...armExercises], availableEquip), phase);
    } else if (dayType === 2) {
      pool = filterByLevel(filterByEquipment(legExercises, availableEquip), phase);
    } else {
      pool = filterByLevel(filterByEquipment([...pushExercises, ...pullExercises, ...legExercises, ...coreExercises], availableEquip), phase);
    }
    mainExs = pick(pool, Math.max(4, Math.floor(7 * fatigueMultiplier)));
  } else {
    // Phase 4: Maintenance, varied
    const pool = filterByLevel(filterByEquipment([...pushExercises, ...pullExercises, ...legExercises, ...shoulderExercises, ...armExercises, ...coreExercises], availableEquip), phase);
    mainExs = pick(pool, Math.max(5, Math.floor(7 * fatigueMultiplier)));
  }

  const exercises: WorkoutExercise[] = mainExs.map(e => {
    const sets = fatigue === 'alta' ? 2 : 3;
    const reps = e.type === 'fuerza' ? (phase <= 1 ? 12 : 10) : 15;
    const rest = phase <= 1 ? 60 : 75;
    return makeExercise(e, sets, reps, rest);
  });

  return {
    type: 'main',
    title: phase <= 1 ? 'Bloque principal - Full Body' : 'Bloque principal',
    durationMinutes: Math.floor(durationMinutes * 0.55),
    exercises
  };
};

const generateAccessoryBlock = (availableEquip: string[], phase: WorkoutPhase, fatigue: FatigueLevel): WorkoutBlock => {
  const fatigueMultiplier = fatigue === 'alta' ? 0.5 : 1;
  const pool = filterByLevel(filterByEquipment([...coreExercises, ...armExercises, ...shoulderExercises, ...cardioExercises], availableEquip), phase);
  const selected = pick(pool, Math.max(2, Math.floor(4 * fatigueMultiplier)));
  const exs = selected.map(e => {
    const sets = fatigue === 'alta' ? 1 : 2;
    const reps = e.type === 'cardio' ? 0 : 15;
    const time = e.type === 'cardio' ? 60 : undefined;
    return makeExercise(e, sets, reps, 30, time);
  });

  return {
    type: 'accessory',
    title: 'Bloque complementario',
    durationMinutes: Math.floor(10 * fatigueMultiplier),
    exercises: exs
  };
};

export const generateWorkout = (
  phase: WorkoutPhase,
  week: number,
  dayNumber: number,
  settings: UserSettings,
  fatigue: FatigueLevel,
  easier: boolean = false,
  harder: boolean = false
): Workout => {
  const availableEquip = settings.availableEquipment.map(e => e);
  // Always have bodyweight
  if (!availableEquip.includes('peso_corporal')) availableEquip.push('peso_corporal');
  if (!availableEquip.includes('alfombra')) availableEquip.push('alfombra');

  let duration = settings.routineDuration;
  if (easier) duration = Math.max(20, duration - 10);
  if (harder) duration = Math.min(60, duration + 10);

  const warmup = generateWarmup(availableEquip, phase, duration);
  const main = generateMainBlock(availableEquip, phase, duration, fatigue, dayNumber);
  const accessory = generateAccessoryBlock(availableEquip, phase, fatigue);
  const cooldown = generateCooldown(availableEquip, duration);

  const blocks: WorkoutBlock[] = [warmup, main];
  if (accessory.exercises.length > 0) blocks.push(accessory);
  blocks.push(cooldown);

  const totalDur = blocks.reduce((s, b) => s + b.durationMinutes, 0);

  return {
    id: `w-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    phase,
    week,
    dayNumber,
    blocks,
    completed: false,
    fatigueLevel: fatigue,
    totalDurationMinutes: totalDur,
    easierVariant: easier,
    harderVariant: harder
  };
};

// Generate mobility-only routine
export const generateMobilityRoutine = (
  settings: UserSettings,
  durationMinutes: number = 20
): Workout => {
  const availableEquip = [...settings.availableEquipment, 'peso_corporal', 'alfombra'];
  const mobility = exercises.filter(e => e.type === 'movilidad');
  const available = filterByEquipment(mobility, availableEquip);
  const selected = pick(available, Math.min(8, available.length));

  const warmupExs = selected.slice(0, 4).map(e => makeExercise(e, 1, 10, 15, 45));
  const mainExs = selected.slice(4).map(e => makeExercise(e, 2, 12, 20, 45));
  const cooldownExs = pick(filterByEquipment(cooldownExercises, availableEquip), 3).map(e => makeExercise(e, 1, 1, 20, 30));

  return {
    id: `w-mob-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    phase: 0,
    week: 1,
    dayNumber: 0,
    blocks: [
      {
        type: 'warmup',
        title: 'Movilidad articular',
        durationMinutes: 8,
        exercises: warmupExs
      },
      {
        type: 'main',
        title: 'Movilidad y estiramientos',
        durationMinutes: 8,
        exercises: mainExs
      },
      {
        type: 'cooldown',
        title: 'Respiración y relajación',
        durationMinutes: 4,
        exercises: cooldownExs
      }
    ],
    completed: false,
    fatigueLevel: 'media',
    totalDurationMinutes: durationMinutes,
    easierVariant: false,
    harderVariant: false
  };
};
