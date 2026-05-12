import { type FC, useState, useCallback } from 'react';
import type { Workout, WorkoutLog, WorkoutExercise } from '../types';
import { WorkoutBlockView } from '../components/WorkoutBlockView';
import { RestTimer } from '../components/RestTimer';

interface Props {
  workout: Workout;
  onComplete: (log: WorkoutLog) => void;
  onEasier: () => void;
  onHarder: () => void;
  onChangeExercise: (blockType: string, exIndex: number) => void;
  onPainReport: () => void;
  onEquipmentMissing: (ex: WorkoutExercise) => void;
}

export const TodayWorkoutPage: FC<Props> = ({
  workout,
  onComplete,
  onEasier,
  onHarder,
  onChangeExercise,
  onPainReport,
  onEquipmentMissing
}) => {
  const [currentWorkout, setCurrentWorkout] = useState<Workout>(workout);
  const [effortLevel, setEffortLevel] = useState<number>(7);
  const [notes, setNotes] = useState('');
  const [painReported, setPainReported] = useState(false);

  const handleToggleExercise = useCallback((blockType: string, exIndex: number) => {
    setCurrentWorkout(prev => {
      const blocks = prev.blocks.map(b => {
        if (b.type === blockType) {
          const exercises = b.exercises.map((e, i) =>
            i === exIndex ? { ...e, completed: !e.completed } : e
          );
          return { ...b, exercises };
        }
        return b;
      });
      return { ...prev, blocks };
    });
  }, []);

  const totalExercises = currentWorkout.blocks.reduce((s, b) => s + b.exercises.length, 0);
  const completedExercises = currentWorkout.blocks.reduce(
    (s, b) => s + b.exercises.filter(e => e.completed).length, 0
  );
  const progressPercent = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;

  const handleComplete = () => {
    const log: WorkoutLog = {
      id: `log-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      phase: currentWorkout.phase,
      exercises: currentWorkout.blocks.flatMap(b =>
        b.exercises.map(e => ({
          exerciseId: e.exercise.id,
          exerciseName: e.exercise.name,
          setsCompleted: e.completed ? e.sets : 0,
          repsCompleted: e.completed ? e.reps : 0,
          weightUsed: e.weightUsed,
          effortLevel: effortLevel,
          notes: notes || undefined
        }))
      ),
      completed: true,
      painReported,
      notes: notes || undefined
    };
    onComplete(log);
  };

  const handlePainReport = () => {
    setPainReported(true);
    onPainReport();
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-white">Rutina de hoy</h2>
          <span className="text-xs text-dark-text-muted">
            ~{currentWorkout.totalDurationMinutes} min
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-dark-bg rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-neon-green rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs text-neon-green font-bold tabular-nums">{progressPercent}%</span>
        </div>
        <p className="text-[11px] text-dark-text-muted mt-2">
          {completedExercises} de {totalExercises} ejercicios completados
        </p>

        {/* Safety note */}
        <div className="mt-3 bg-dark-bg rounded-lg p-2.5">
          <p className="text-[10px] text-dark-text-muted">
            Escucha a tu cuerpo. Si sientes dolor agudo, para inmediatamente.
            La técnica es más importante que el peso o las repeticiones.
          </p>
        </div>
      </div>

      {/* Workout blocks */}
      {currentWorkout.blocks.map((block, bi) => (
        <WorkoutBlockView
          key={`${block.type}-${bi}`}
          block={block}
          onToggleExercise={(blockType, exIdx) => {
            if (blockType !== block.type) return;
            handleToggleExercise(block.type, exIdx);
          }}
        />
      ))}

      {/* Quick action buttons */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={onEasier}
          className="bg-dark-card border border-dark-border rounded-xl p-3 text-center hover:bg-dark-card-hover transition-colors"
        >
          <span className="text-base block">⬇️</span>
          <span className="text-[10px] font-semibold text-white">Más fácil</span>
        </button>
        <button
          onClick={onHarder}
          className="bg-dark-card border border-dark-border rounded-xl p-3 text-center hover:bg-dark-card-hover transition-colors"
        >
          <span className="text-base block">⬆️</span>
          <span className="text-[10px] font-semibold text-white">Más intensa</span>
        </button>
        <button
          onClick={handlePainReport}
          className={`border rounded-xl p-3 text-center transition-colors ${
            painReported
              ? 'bg-danger/10 border-danger/30'
              : 'bg-dark-card border-dark-border hover:bg-dark-card-hover'
          }`}
        >
          <span className="text-base block">🩹</span>
          <span className={`text-[10px] font-semibold ${painReported ? 'text-danger' : 'text-white'}`}>
            {painReported ? 'Dolor reportado' : 'Me duele'}
          </span>
        </button>
      </div>

      {/* Effort level */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h3 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">
          Esfuerzo percibido (1-10)
        </h3>
        <div className="flex justify-between gap-1">
          {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setEffortLevel(n)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                n === effortLevel
                  ? 'bg-neon-green text-dark-bg'
                  : n <= 3
                  ? 'bg-green-900/20 text-green-400'
                  : n <= 6
                  ? 'bg-yellow-900/20 text-yellow-400'
                  : n <= 8
                  ? 'bg-orange-900/20 text-orange-400'
                  : 'bg-red-900/20 text-red-400'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-dark-text-muted">Muy fácil</span>
          <span className="text-[10px] text-dark-text-muted">Máximo</span>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h3 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-2">
          Notas (opcional)
        </h3>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="¿Cómo te sentiste? ¿Algún ajuste?..."
          className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-xs text-dark-text placeholder-dark-text-muted resize-none h-16 focus:outline-none focus:border-neon-green/50"
        />
      </div>

      {/* Complete workout button */}
      <button
        onClick={handleComplete}
        disabled={completedExercises === 0}
        className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
          completedExercises > 0
            ? 'bg-neon-green text-dark-bg hover:bg-neon-green-dark'
            : 'bg-dark-card text-dark-text-muted border border-dark-border'
        }`}
      >
        {completedExercises > 0 ? '✅ Completar rutina' : 'Completa al menos un ejercicio'}
      </button>

      <div className="h-4" />
    </div>
  );
};
