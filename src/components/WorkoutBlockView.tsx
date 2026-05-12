import { type FC, useState } from 'react';
import type { WorkoutBlock, WorkoutExercise } from '../types';
import { RestTimer } from './RestTimer';

interface Props {
  block: WorkoutBlock;
  onToggleExercise: (blockType: string, exIndex: number) => void;
}

const blockColors: Record<string, string> = {
  warmup: 'border-l-orange-500',
  main: 'border-l-neon-green',
  accessory: 'border-l-neon-blue',
  cooldown: 'border-l-purple-500'
};

const blockIcons: Record<string, string> = {
  warmup: '🔥',
  main: '💪',
  accessory: '🔧',
  cooldown: '🧘'
};

const WorkoutExerciseItem: FC<{
  we: WorkoutExercise;
  index: number;
  blockType: string;
  onToggle: (idx: number) => void;
}> = ({ we, index, blockType, onToggle }) => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className={`bg-dark-bg rounded-lg p-3 border border-dark-border ${we.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(index)}
          className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            we.completed
              ? 'bg-neon-green border-neon-green'
              : 'border-dark-text-muted hover:border-neon-green'
          }`}
        >
          {we.completed && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f0f13" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-sm font-semibold text-white ${we.completed ? 'line-through' : ''}`}>
              {we.exercise.name}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-dark-text-muted">
            <span>
              {we.sets} {we.sets === 1 ? 'serie' : 'series'}
              {we.timeSeconds ? ` · ${we.timeSeconds}s` : ` · ${we.reps} reps`}
            </span>
            <span>·</span>
            <span>Descanso: {we.restSeconds}s</span>
          </div>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="text-[11px] text-neon-blue hover:text-neon-blue-dark transition-colors flex items-center gap-1"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {showTimer ? 'Ocultar' : 'Temporizador'}
            </button>
            <a
              href={we.exercise.videoSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
              </svg>
              Ver video
            </a>
          </div>
        </div>
      </div>

      {showTimer && (
        <div className="mt-3">
          <RestTimer seconds={we.restSeconds} />
        </div>
      )}
    </div>
  );
};

export const WorkoutBlockView: FC<Props> = ({ block, onToggleExercise }) => {
  const completedCount = block.exercises.filter(e => e.completed).length;
  const totalCount = block.exercises.length;

  return (
    <div className={`bg-dark-card rounded-xl border border-dark-border border-l-4 ${blockColors[block.type] || 'border-l-dark-border'} overflow-hidden`}>
      <div className="p-4 border-b border-dark-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{blockIcons[block.type] || '•'}</span>
            <div>
              <h3 className="text-sm font-bold text-white">{block.title}</h3>
              <span className="text-[11px] text-dark-text-muted">~{block.durationMinutes} min · {totalCount} ejercicios</span>
            </div>
          </div>
          <span className="text-xs text-neon-green font-semibold">
            {completedCount}/{totalCount}
          </span>
        </div>
        <div className="mt-2 w-full bg-dark-bg rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-neon-green rounded-full transition-all"
            style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="p-3 space-y-2">
        {block.exercises.map((we, i) => (
          <WorkoutExerciseItem
            key={`${we.exercise.id}-${i}`}
            we={we}
            index={i}
            blockType={block.type}
            onToggle={(idx) => onToggleExercise(block.type, idx)}
          />
        ))}
      </div>
    </div>
  );
};
