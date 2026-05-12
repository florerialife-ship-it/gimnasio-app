export type MuscleGroup =
  | 'pecho' | 'espalda' | 'piernas' | 'hombros'
  | 'brazos' | 'abdomen' | 'cuerpo_completo';

export type Equipment =
  | 'barra_olimpica' | 'mancuernas' | 'banco'
  | 'barra_dominadas' | 'cuerda_saltar' | 'trampolin'
  | 'peso_corporal' | 'alfombra' | 'cuerda_triceps';

export type ExerciseLevel = 'principiante' | 'intermedio' | 'avanzado';

export type ExerciseType =
  | 'fuerza' | 'movilidad' | 'cardio' | 'calentamiento'
  | 'abdomen' | 'rehabilitacion';

export type WorkoutPhase = 0 | 1 | 2 | 3 | 4;

export type FatigueLevel = 'baja' | 'media' | 'alta';

export type Objective =
  | 'volver_forma' | 'ganar_fuerza' | 'ganar_musculo'
  | 'bajar_grasa' | 'mejorar_condicion' | 'movilidad_salud';

export type CurrentLevel =
  | 'muy_fuera_forma' | 'principiante'
  | 'intermedio_regresando' | 'intermedio';

export type ZoneToCare = 'rodillas' | 'espalda_baja' | 'hombros' | 'munecas' | 'ninguna';

export type WorkoutSection = 'warmup' | 'main' | 'accessory' | 'cooldown';

export interface Exercise {
  id: string;
  name: string;
  category: MuscleGroup;
  muscles: string[];
  secondaryMuscles: string[];
  equipment: Equipment[];
  level: ExerciseLevel;
  type: ExerciseType;
  instructions: string[];
  commonErrors: string[];
  easyVariant: string;
  hardVariant: string;
  usageRecommendation: string;
  videoSearchUrl: string;
}

export interface WorkoutExercise {
  exercise: Exercise;
  sets: number;
  reps: number;
  timeSeconds?: number;
  restSeconds: number;
  completed: boolean;
  actualReps?: number;
  actualSets?: number;
  weightUsed?: number;
  effortLevel?: number;
  notes?: string;
}

export interface WorkoutBlock {
  type: WorkoutSection;
  title: string;
  durationMinutes: number;
  exercises: WorkoutExercise[];
}

export interface Workout {
  id: string;
  date: string;
  phase: WorkoutPhase;
  week: number;
  dayNumber: number;
  blocks: WorkoutBlock[];
  completed: boolean;
  fatigueLevel: FatigueLevel;
  totalDurationMinutes: number;
  easierVariant: boolean;
  harderVariant: boolean;
}

export interface WorkoutLog {
  id: string;
  date: string;
  phase: WorkoutPhase;
  exercises: {
    exerciseId: string;
    exerciseName: string;
    setsCompleted: number;
    repsCompleted: number;
    weightUsed?: number;
    effortLevel: number;
    notes?: string;
  }[];
  completed: boolean;
  painReported: boolean;
  notes?: string;
}

export interface PhaseInfo {
  phase: WorkoutPhase;
  name: string;
  description: string;
  objective: string;
  suggestedDuration: string;
  weeksMin: number;
  weeksMax: number;
}

export interface UserSettings {
  daysPerWeek: 3 | 4 | 5 | 6;
  routineDuration: 20 | 30 | 45 | 60;
  availableEquipment: Equipment[];
  objective: Objective;
  currentLevel: CurrentLevel;
  zonesToCare: ZoneToCare[];
}

export interface AppState {
  currentPhase: WorkoutPhase;
  currentWeek: number;
  settings: UserSettings;
  workoutHistory: WorkoutLog[];
  lastWorkoutDate: string | null;
  streakDays: number;
}
