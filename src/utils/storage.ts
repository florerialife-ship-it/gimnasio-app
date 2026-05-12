import type { AppState, UserSettings, WorkoutLog, WorkoutPhase } from '../types';

const KEYS = {
  state: 'gym_app_state',
  settings: 'gym_app_settings',
  history: 'gym_app_history',
  todayWorkout: 'gym_app_today_workout'
};

const defaultSettings: UserSettings = {
  daysPerWeek: 4,
  routineDuration: 45,
  availableEquipment: ['peso_corporal', 'alfombra', 'mancuernas', 'banco', 'barra_dominadas', 'cuerda_saltar', 'trampolin', 'cuerda_triceps'],
  objective: 'volver_forma',
  currentLevel: 'principiante',
  zonesToCare: ['ninguna']
};

const defaultState: AppState = {
  currentPhase: 0,
  currentWeek: 1,
  settings: defaultSettings,
  workoutHistory: [],
  lastWorkoutDate: null,
  streakDays: 0
};

export const loadState = (): AppState => {
  try {
    const raw = localStorage.getItem(KEYS.state);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    // Merge with defaults to handle added fields
    return {
      ...defaultState,
      ...parsed,
      settings: { ...defaultSettings, ...parsed.settings }
    };
  } catch {
    return { ...defaultState };
  }
};

export const saveState = (state: AppState): void => {
  localStorage.setItem(KEYS.state, JSON.stringify(state));
};

export const loadSettings = (): UserSettings => {
  try {
    const raw = localStorage.getItem(KEYS.settings);
    if (!raw) return { ...defaultSettings };
    return { ...defaultSettings, ...JSON.parse(raw) };
  } catch {
    return { ...defaultSettings };
  }
};

export const saveSettings = (settings: UserSettings): void => {
  localStorage.setItem(KEYS.settings, JSON.stringify(settings));
};

export const loadHistory = (): WorkoutLog[] => {
  try {
    const raw = localStorage.getItem(KEYS.history);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveHistory = (history: WorkoutLog[]): void => {
  localStorage.setItem(KEYS.history, JSON.stringify(history));
};

export const addWorkoutToHistory = (log: WorkoutLog): WorkoutLog[] => {
  const history = loadHistory();
  history.unshift(log);
  saveHistory(history);
  return history;
};

export const getTodayKey = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const hasTrainedToday = (): boolean => {
  const history = loadHistory();
  const today = getTodayKey();
  return history.some(h => h.date === today && h.completed);
};

export const getStreakDays = (): number => {
  const history = loadHistory();
  const completedDays = new Set(history.filter(h => h.completed).map(h => h.date));
  let streak = 0;
  const d = new Date();
  // Check backwards from today
  for (let i = 0; i < 365; i++) {
    const dateStr = d.toISOString().split('T')[0];
    if (completedDays.has(dateStr)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (i === 0) {
      // Today not completed yet, check yesterday
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
};

export const getCompletionRate = (weeks: number = 4): number => {
  const history = loadHistory();
  const now = new Date();
  const start = new Date(now.getTime() - weeks * 7 * 24 * 60 * 60 * 1000);
  const completedInPeriod = history.filter(h => h.completed && new Date(h.date) >= start).length;
  return completedInPeriod;
};

export const checkProgression = (): { shouldProgress: boolean; reason: string } => {
  const history = loadHistory();
  const state = loadState();

  if (state.currentPhase >= 4) {
    return { shouldProgress: false, reason: 'Ya estás en la fase de mantenimiento.' };
  }

  const phaseMinWeeks = [2, 3, 4, 4, 0][state.currentPhase];
  const recentLogs = history.filter(h => {
    const logDate = new Date(h.date);
    const weeksAgo = (Date.now() - logDate.getTime()) / (7 * 24 * 60 * 60 * 1000);
    return weeksAgo <= phaseMinWeeks;
  });

  const goodSessions = recentLogs.filter(h => {
    const avgEffort = h.exercises.reduce((s, e) => s + e.effortLevel, 0) / h.exercises.length;
    return h.completed && !h.painReported && avgEffort <= 7;
  });

  if (recentLogs.length < phaseMinWeeks * 2) {
    // Not enough sessions yet
    const doneSessions = recentLogs.filter(h => h.completed).length;
    if (doneSessions < phaseMinWeeks * 2) {
      return {
        shouldProgress: false,
        reason: `Completa al menos ${phaseMinWeeks * 2} sesiones antes de progresar. Llevas ${doneSessions}.`
      };
    }
  }

  // Check if at least 2 good consecutive sessions
  let consecutiveGood = 0;
  for (let i = 0; i < goodSessions.length; i++) {
    consecutiveGood++;
    if (consecutiveGood >= 2) break;
  }

  if (consecutiveGood >= 2 && recentLogs.filter(h => h.completed).length >= phaseMinWeeks * 2) {
    return { shouldProgress: true, reason: 'Has completado suficientes sesiones con buena técnica. ¡Es momento de progresar!' };
  }

  return {
    shouldProgress: false,
    reason: 'Sigue trabajando con buena técnica. La progresión llegará naturalmente.'
  };
};

export const resetAllData = (): void => {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
};
