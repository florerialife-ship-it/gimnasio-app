import { type FC } from 'react';
import type { WorkoutPhase } from '../types';
import { getPhaseInfo } from '../data/phases';

interface Props {
  phase: WorkoutPhase;
  week?: number;
  size?: 'sm' | 'md';
}

const phaseColors: Record<number, string> = {
  0: 'bg-blue-900/30 text-blue-400 border-blue-500/30',
  1: 'bg-green-900/30 text-green-400 border-green-500/30',
  2: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30',
  3: 'bg-orange-900/30 text-orange-400 border-orange-500/30',
  4: 'bg-purple-900/30 text-purple-400 border-purple-500/30'
};

export const PhaseBadge: FC<Props> = ({ phase, week, size = 'md' }) => {
  const info = getPhaseInfo(phase);
  const isSm = size === 'sm';

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${phaseColors[phase]} ${isSm ? 'px-2 py-1' : ''}`}>
      <div className={`rounded-full bg-current ${isSm ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
      <span className={`font-semibold ${isSm ? 'text-[10px]' : 'text-xs'}`}>
        Fase {phase}: {info?.name.split(' ').slice(0, 2).join(' ')}
        {week !== undefined && ` · Sem ${week}`}
      </span>
    </div>
  );
};
