import { type FC } from 'react';
import type { FatigueLevel } from '../types';

interface Props {
  value: FatigueLevel;
  onChange: (level: FatigueLevel) => void;
}

const options: { value: FatigueLevel; label: string; desc: string; emoji: string }[] = [
  { value: 'baja', label: 'Baja', desc: 'Con energía', emoji: '🟢' },
  { value: 'media', label: 'Media', desc: 'Normal', emoji: '🟡' },
  { value: 'alta', label: 'Alta', desc: 'Cansado', emoji: '🔴' }
];

export const FatigueSelector: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-dark-text uppercase tracking-wider">¿Cómo te sientes hoy?</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
              value === opt.value
                ? 'border-neon-green bg-neon-green/10 text-white'
                : 'border-dark-border bg-dark-card text-dark-text-muted hover:border-dark-text-muted'
            }`}
          >
            <span className="text-lg">{opt.emoji}</span>
            <span className="text-xs font-semibold">{opt.label}</span>
            <span className="text-[10px] opacity-70">{opt.desc}</span>
          </button>
        ))}
      </div>
      {value === 'alta' && (
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-2.5">
          <p className="text-[11px] text-warning">
            Con fatiga alta, la rutina será más ligera. Prioriza movilidad y técnica.
          </p>
        </div>
      )}
      {value === 'baja' && (
        <div className="bg-neon-green/10 border border-neon-green/20 rounded-lg p-2.5">
          <p className="text-[11px] text-neon-green">
            ¡Día con energía! La rutina tendrá buena intensidad. No te excedas.
          </p>
        </div>
      )}
    </div>
  );
};
