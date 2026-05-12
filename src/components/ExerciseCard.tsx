import { type FC, useState } from 'react';
import type { Exercise } from '../types';

interface Props {
  exercise: Exercise;
  expanded?: boolean;
  onToggle?: () => void;
}

const levelColors: Record<string, string> = {
  principiante: 'bg-green-900/40 text-green-400',
  intermedio: 'bg-yellow-900/40 text-yellow-400',
  avanzado: 'bg-red-900/40 text-red-400'
};

const muscleLabels: Record<string, string> = {
  pecho: 'Pecho',
  espalda: 'Espalda',
  piernas: 'Piernas',
  hombros: 'Hombros',
  brazos: 'Brazos',
  abdomen: 'Abdomen',
  cuerpo_completo: 'Cuerpo completo'
};

const equipLabels: Record<string, string> = {
  barra_olimpica: 'Barra',
  mancuernas: 'Mancuernas',
  banco: 'Banco',
  barra_dominadas: 'Dominadas',
  cuerda_saltar: 'Cuerda saltar',
  trampolin: 'Trampolín',
  peso_corporal: 'Peso corporal',
  alfombra: 'Alfombra',
  cuerda_triceps: 'Cuerda tríceps'
};

export const ExerciseCard: FC<Props> = ({ exercise, expanded = false, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggle = () => {
    setIsExpanded(!isExpanded);
    onToggle?.();
  };

  return (
    <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
      <button
        onClick={toggle}
        className="w-full p-4 text-left flex items-start gap-3 hover:bg-dark-card-hover transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className="text-sm font-semibold text-white truncate">{exercise.name}</h3>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${levelColors[exercise.level]}`}>
              {exercise.level}
            </span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-neon-green bg-neon-green/10 px-1.5 py-0.5 rounded">
              {muscleLabels[exercise.category] || exercise.category}
            </span>
            {exercise.muscles.slice(0, 2).map(m => (
              <span key={m} className="text-[10px] text-dark-text-muted">{m}</span>
            ))}
          </div>
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {exercise.equipment.map(eq => (
              <span key={eq} className="text-[10px] text-dark-text-muted/70 bg-dark-bg px-1.5 py-0.5 rounded">
                {equipLabels[eq] || eq}
              </span>
            ))}
          </div>
        </div>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`mt-1 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-dark-border pt-4">
          <div>
            <h4 className="text-xs font-semibold text-neon-green mb-1.5 uppercase tracking-wider">Instrucciones</h4>
            <ol className="space-y-1">
              {exercise.instructions.map((inst, i) => (
                <li key={i} className="text-xs text-dark-text flex gap-2">
                  <span className="text-neon-green font-medium flex-shrink-0">{i + 1}.</span>
                  {inst}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-warning mb-1.5 uppercase tracking-wider">Errores comunes</h4>
            <ul className="space-y-1">
              {exercise.commonErrors.map((err, i) => (
                <li key={i} className="text-xs text-dark-text flex gap-2">
                  <span className="text-warning flex-shrink-0">⚠</span>
                  {err}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-dark-bg rounded-lg p-3">
              <h4 className="text-[10px] font-semibold text-neon-green/70 uppercase tracking-wider mb-1">Variante fácil</h4>
              <p className="text-xs text-dark-text">{exercise.easyVariant}</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3">
              <h4 className="text-[10px] font-semibold text-neon-blue/70 uppercase tracking-wider mb-1">Variante difícil</h4>
              <p className="text-xs text-dark-text">{exercise.hardVariant}</p>
            </div>
          </div>

          <a
            href={exercise.videoSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-red-700/20 border border-red-500/30 rounded-lg p-3 hover:bg-red-700/30 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" fill="#ef4444" stroke="none" />
            </svg>
            <span className="text-xs text-white font-semibold">Ver video demostrativo en YouTube</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <div className="bg-neon-green/5 rounded-lg p-3 border border-neon-green/10">
            <h4 className="text-[10px] font-semibold text-neon-green/70 uppercase tracking-wider mb-1">Recomendación</h4>
            <p className="text-xs text-dark-text">{exercise.usageRecommendation}</p>
          </div>

          <div className="flex gap-1.5 flex-wrap">
            <span className="text-[10px] text-dark-text-muted/50">Músculos secundarios:</span>
            {exercise.secondaryMuscles.length > 0
              ? exercise.secondaryMuscles.map(m => (
                  <span key={m} className="text-[10px] text-dark-text-muted/60">{m}</span>
                ))
              : <span className="text-[10px] text-dark-text-muted/50">—</span>
            }
          </div>
        </div>
      )}
    </div>
  );
};
