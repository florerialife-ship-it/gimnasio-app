import { type FC } from 'react';
import type { Equipment } from '../types';

interface Props {
  selected: Equipment[];
  onToggle: (eq: Equipment) => void;
}

const equipList: { id: Equipment; label: string; icon: string }[] = [
  { id: 'barra_olimpica', label: 'Barra olímpica', icon: '🏋️' },
  { id: 'mancuernas', label: 'Mancuernas', icon: '💪' },
  { id: 'banco', label: 'Banco', icon: '🪑' },
  { id: 'barra_dominadas', label: 'Barra dominadas', icon: '🔝' },
  { id: 'cuerda_saltar', label: 'Cuerda saltar', icon: '🪢' },
  { id: 'trampolin', label: 'Trampolín', icon: '🦘' },
  { id: 'cuerda_triceps', label: 'Cuerda tríceps', icon: '🪢' },
  { id: 'peso_corporal', label: 'Peso corporal', icon: '🧍' },
  { id: 'alfombra', label: 'Alfombra', icon: '🧘' }
];

export const EquipmentSelector: FC<Props> = ({ selected, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {equipList.map(eq => {
        const active = selected.includes(eq.id);
        return (
          <button
            key={eq.id}
            onClick={() => onToggle(eq.id)}
            className={`flex items-center gap-2 p-2.5 rounded-lg border text-left transition-all ${
              active
                ? 'border-neon-green bg-neon-green/10 text-white'
                : 'border-dark-border bg-dark-card text-dark-text-muted hover:border-dark-text-muted'
            }`}
          >
            <span className="text-base">{eq.icon}</span>
            <span className="text-xs font-medium">{eq.label}</span>
            {active && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-auto flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
};
