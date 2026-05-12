import { type FC, useState, useMemo } from 'react';
import type { FatigueLevel, AppState } from '../types';
import { PhaseBadge } from '../components/PhaseBadge';
import { FatigueSelector } from '../components/FatigueSelector';
import { getPhaseInfo } from '../data/phases';
import { getStreakDays, getCompletionRate, checkProgression, loadState } from '../utils/storage';
import { loadSettings } from '../utils/storage';

interface Props {
  onStartWorkout: (fatigue: FatigueLevel) => void;
  onStartQuick: () => void;
  onStartMobility: () => void;
}

const objectiveLabels: Record<string, string> = {
  volver_forma: 'Volver a estar en forma',
  ganar_fuerza: 'Ganar fuerza',
  ganar_musculo: 'Ganar músculo',
  bajar_grasa: 'Bajar grasa',
  mejorar_condicion: 'Mejorar condición física',
  movilidad_salud: 'Movilidad y salud general'
};

export const DashboardPage: FC<Props> = ({ onStartWorkout, onStartQuick, onStartMobility }) => {
  const [fatigue, setFatigue] = useState<FatigueLevel>('media');
  const state = useMemo(() => loadState(), []);
  const settings = useMemo(() => loadSettings(), []);
  const phaseInfo = getPhaseInfo(state.currentPhase);
  const streak = useMemo(() => getStreakDays(), []);
  const weeklyRate = useMemo(() => getCompletionRate(1), []);
  const progression = useMemo(() => checkProgression(), []);

  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const today = new Date().getDay();

  const weeklySchedule = useMemo(() => {
    const days = settings.daysPerWeek;
    const schedule: number[] = [];
    // Distribute training days across the week
    const step = Math.floor(7 / days);
    for (let i = 0; i < days; i++) {
      schedule.push((1 + i * step) % 7); // Start from Monday
    }
    return schedule;
  }, [settings.daysPerWeek]);

  const isTrainingDay = weeklySchedule.includes(today);

  return (
    <div className="space-y-4">
      {/* Safety message */}
      <div className="bg-danger/10 border border-danger/20 rounded-xl p-3">
        <p className="text-[11px] text-danger/90 leading-relaxed">
          ⚠ Si hay dolor agudo, mareo o molestia fuerte, detén el ejercicio inmediatamente.
        </p>
      </div>

      {/* Phase and week */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <PhaseBadge phase={state.currentPhase} week={state.currentWeek} />
        <span className="text-[11px] text-dark-text-muted">
          Racha: <span className="text-neon-green font-bold">{streak}</span> días
        </span>
      </div>

      {/* Current objective */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-1">Objetivo actual</h2>
        <p className="text-sm text-white font-semibold">{objectiveLabels[settings.objective] || settings.objective}</p>
        {phaseInfo && (
          <p className="text-xs text-dark-text-muted mt-1">{phaseInfo.description}</p>
        )}
      </div>

      {/* Weekly schedule */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Semana de entrenamiento</h2>
        <div className="flex justify-between">
          {daysOfWeek.map((day, i) => {
            const isTrainDay = weeklySchedule.includes(i);
            const isToday = i === today;
            return (
              <div key={day} className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-dark-text-muted">{day}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isToday
                      ? 'ring-2 ring-neon-green bg-neon-green/20 text-neon-green'
                      : isTrainDay
                      ? 'bg-neon-green/10 text-neon-green'
                      : 'bg-dark-bg text-dark-text-muted/40'
                  }`}
                >
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[11px] text-dark-text-muted mt-2 text-center">
          {isTrainingDay ? '🎯 Hoy es día de entrenamiento' : '📅 Hoy es día de descanso activo o movilidad'}
        </p>
      </div>

      {/* Fatigue selector */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <FatigueSelector value={fatigue} onChange={setFatigue} />
      </div>

      {/* Start workout button */}
      <button
        onClick={() => onStartWorkout(fatigue)}
        className="w-full bg-neon-green text-dark-bg text-base font-bold py-4 rounded-xl hover:bg-neon-green-dark transition-colors flex items-center justify-center gap-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Empezar rutina de hoy
      </button>

      {/* Alternative modes */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onStartQuick}
          className="bg-dark-card border border-dark-border rounded-xl p-3 text-center hover:bg-dark-card-hover transition-colors"
        >
          <span className="text-lg block mb-1">⚡</span>
          <span className="text-xs font-semibold text-white">Rutina rápida</span>
          <span className="text-[10px] text-dark-text-muted block mt-0.5">20 minutos</span>
        </button>
        <button
          onClick={onStartMobility}
          className="bg-dark-card border border-dark-border rounded-xl p-3 text-center hover:bg-dark-card-hover transition-colors"
        >
          <span className="text-lg block mb-1">🧘</span>
          <span className="text-xs font-semibold text-white">Movilidad</span>
          <span className="text-[10px] text-dark-text-muted block mt-0.5">Recuperación</span>
        </button>
      </div>

      {/* Progress info */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-2">Progreso semanal</h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-white font-semibold">{weeklyRate} sesiones esta semana</span>
          <span className="text-xs text-neon-green">{Math.round((weeklyRate / settings.daysPerWeek) * 100)}%</span>
        </div>
        <div className="mt-2 w-full bg-dark-bg rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-neon-green rounded-full transition-all"
            style={{ width: `${Math.min(100, (weeklyRate / settings.daysPerWeek) * 100)}%` }}
          />
        </div>
      </div>

      {/* Progression suggestion */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-2">Progresión</h2>
        <div className={`flex items-start gap-2 ${progression.shouldProgress ? 'text-neon-green' : 'text-dark-text-muted'}`}>
          <span className="text-base mt-0.5">{progression.shouldProgress ? '📈' : '📊'}</span>
          <p className="text-xs leading-relaxed">{progression.reason}</p>
        </div>
      </div>
    </div>
  );
};
