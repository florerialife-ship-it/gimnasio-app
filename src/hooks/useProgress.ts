import { useState, useCallback } from 'react';
import type { WorkoutLog } from '../types';
import { loadHistory, addWorkoutToHistory, getStreakDays, getCompletionRate } from '../utils/storage';

export function useProgress() {
  const [history, setHistory] = useState<WorkoutLog[]>(loadHistory);
  const [streak, setStreak] = useState(getStreakDays);
  const [completionRate, setCompletionRate] = useState(getCompletionRate);

  const addLog = useCallback((log: WorkoutLog) => {
    const updated = addWorkoutToHistory(log);
    setHistory(updated);
    setStreak(getStreakDays());
    setCompletionRate(getCompletionRate());
  }, []);

  const refresh = useCallback(() => {
    setHistory(loadHistory());
    setStreak(getStreakDays());
    setCompletionRate(getCompletionRate());
  }, []);

  return {
    history,
    streak,
    completionRate,
    addLog,
    refresh
  };
}
