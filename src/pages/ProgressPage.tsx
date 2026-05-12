import { type FC, useMemo, useState } from 'react';
import { loadHistory, getStreakDays, getCompletionRate, checkProgression, loadState } from '../utils/storage';
import type { WorkoutLog } from '../types';

const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export const ProgressPage: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(() => new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(() => new Date().getFullYear());

  const history = useMemo(() => loadHistory(), []);
  const streak = useMemo(() => getStreakDays(), []);
  const state = useMemo(() => loadState(), []);

  const weeklyRate = useMemo(() => getCompletionRate(1), []);
  const monthlyRate = useMemo(() => getCompletionRate(4), []);
  const progression = useMemo(() => checkProgression(), []);

  // Calendar data
  const calendarDays = useMemo(() => {
    const completedDates = new Set(history.filter(h => h.completed).map(h => h.date));
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();
    const days: { day: number; dateStr: string; completed: boolean }[] = [];

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({ day: d, dateStr, completed: completedDates.has(dateStr) });
    }
    // Pad start
    const padding = Array.from({ length: firstDayOfWeek }, (_, i) => ({
      day: 0, dateStr: '', completed: false
    }));
    return [...padding, ...days];
  }, [history, selectedMonth, selectedYear]);

  const recentLogs = useMemo(() => history.slice(0, 10), [history]);

  const getLevelLabel = (n: number): string => {
    if (n <= 3) return 'Suave';
    if (n <= 5) return 'Moderado';
    if (n <= 7) return 'Intenso';
    if (n <= 9) return 'Muy intenso';
    return 'Máximo';
  };

  const getLevelColor = (n: number): string => {
    if (n <= 3) return 'text-green-400';
    if (n <= 6) return 'text-yellow-400';
    if (n <= 8) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-4">
      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-dark-card rounded-xl border border-dark-border p-3 text-center">
          <span className="text-2xl font-bold text-neon-green block">{streak}</span>
          <span className="text-[10px] text-dark-text-muted">Días racha</span>
        </div>
        <div className="bg-dark-card rounded-xl border border-dark-border p-3 text-center">
          <span className="text-2xl font-bold text-white block">{weeklyRate}</span>
          <span className="text-[10px] text-dark-text-muted">Esta semana</span>
        </div>
        <div className="bg-dark-card rounded-xl border border-dark-border p-3 text-center">
          <span className="text-2xl font-bold text-neon-blue block">{monthlyRate}</span>
          <span className="text-[10px] text-dark-text-muted">Últimas 4 sem</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => {
              if (selectedMonth === 0) {
                setSelectedMonth(11);
                setSelectedYear(prev => prev - 1);
              } else {
                setSelectedMonth(prev => prev - 1);
              }
            }}
            className="text-dark-text-muted hover:text-white p-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h3 className="text-sm font-bold text-white">
            {monthNames[selectedMonth]} {selectedYear}
          </h3>
          <button
            onClick={() => {
              if (selectedMonth === 11) {
                setSelectedMonth(0);
                setSelectedYear(prev => prev + 1);
              } else {
                setSelectedMonth(prev => prev + 1);
              }
            }}
            className="text-dark-text-muted hover:text-white p-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map(d => (
            <span key={d} className="text-[10px] text-dark-text-muted text-center pb-1">{d}</span>
          ))}
          {calendarDays.map((d, i) => (
            <div
              key={i}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium ${
                d.day === 0
                  ? ''
                  : d.completed
                  ? 'bg-neon-green text-dark-bg'
                  : new Date(selectedYear, selectedMonth, d.day).getTime() > Date.now()
                  ? 'bg-dark-bg text-dark-text-muted/30'
                  : 'bg-dark-bg text-dark-text-muted'
              }`}
            >
              {d.day || ''}
            </div>
          ))}
        </div>
      </div>

      {/* Consistency summary */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h3 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-2">
          Consistencia
        </h3>
        <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden mb-2">
          <div
            className="h-full bg-neon-green rounded-full"
            style={{ width: `${Math.min(100, (weeklyRate / (state.settings?.daysPerWeek || 4)) * 100)}%` }}
          />
        </div>
        <p className="text-xs text-dark-text">
          {weeklyRate >= (state.settings?.daysPerWeek || 4) - 1
            ? 'Excelente consistencia esta semana. Sigue así.'
            : weeklyRate >= Math.ceil((state.settings?.daysPerWeek || 4) / 2)
            ? 'Buena consistencia. Puedes mejorar un poco más.'
            : 'Te falta consistencia. Intenta cumplir con más días esta semana.'}
        </p>
      </div>

      {/* Progression recommendation */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h3 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-2">
          Recomendación de progresión
        </h3>
        <p className="text-xs text-dark-text leading-relaxed">{progression.reason}</p>
        {progression.shouldProgress && (
          <p className="text-xs text-neon-green mt-2 font-semibold">
            El sistema te sugerirá avanzar de fase en la próxima sesión.
          </p>
        )}
      </div>

      {/* History */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h3 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">
          Historial reciente
        </h3>
        {recentLogs.length === 0 ? (
          <p className="text-xs text-dark-text-muted text-center py-4">Sin sesiones registradas aún</p>
        ) : (
          <div className="space-y-2">
            {recentLogs.map(log => {
              const avgEffort = log.exercises.length > 0
                ? Math.round(log.exercises.reduce((s, e) => s + e.effortLevel, 0) / log.exercises.length)
                : 0;

              return (
                <div key={log.id} className="bg-dark-bg rounded-lg p-3 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    log.completed ? 'bg-neon-green/20' : 'bg-dark-card'
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={log.completed ? '#a3e635' : '#6b7280'}
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">
                        {new Date(log.date + 'T00:00:00').toLocaleDateString('es-MX', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </span>
                      {log.painReported && (
                        <span className="text-[10px] text-danger bg-danger/10 px-1.5 py-0.5 rounded">Dolor</span>
                      )}
                    </div>
                    <span className="text-[11px] text-dark-text-muted">
                      {log.exercises.length} ejercicios · Esfuerzo: <span className={getLevelColor(avgEffort)}>{avgEffort}/10 ({getLevelLabel(avgEffort)})</span>
                    </span>
                  </div>
                  <span className="text-[10px] text-dark-text-muted">Fase {log.phase}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="h-4" />
    </div>
  );
};
