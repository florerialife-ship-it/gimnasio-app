import { type FC, useState, useEffect, useRef, useCallback } from 'react';

interface Props {
  seconds: number;
  onComplete?: () => void;
  autoStart?: boolean;
}

export const RestTimer: FC<Props> = ({ seconds, onComplete, autoStart = false }) => {
  const [time, setTime] = useState(seconds);
  const [running, setRunning] = useState(autoStart);
  const [completed, setCompleted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    setRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    setRunning(true);
    setCompleted(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setTime(seconds);
    setCompleted(false);
  }, [seconds, stop]);

  useEffect(() => {
    if (running && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            stop();
            setCompleted(true);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, time, stop, onComplete]);

  const minutes = Math.floor(time / 60);
  const secs = time % 60;

  return (
    <div className="bg-dark-card rounded-xl border border-dark-border p-4 text-center">
      {completed ? (
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-success font-semibold text-sm">¡Descanso completo!</span>
          </div>
          <button
            onClick={reset}
            className="bg-dark-bg text-neon-green text-xs px-4 py-2 rounded-lg border border-dark-border hover:bg-dark-card-hover transition-colors"
          >
            Reiniciar temporizador
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-[10px] uppercase tracking-wider text-dark-text-muted font-semibold">
            Descanso
          </div>
          <div className={`text-4xl font-bold tabular-nums ${time <= 5 ? 'text-warning' : 'text-neon-green'}`}>
            {String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </div>
          <div className="flex items-center justify-center gap-2">
            {!running ? (
              <button
                onClick={start}
                className="bg-neon-green text-dark-bg text-xs font-semibold px-5 py-2 rounded-lg hover:bg-neon-green-dark transition-colors"
              >
                Iniciar
              </button>
            ) : (
              <button
                onClick={stop}
                className="bg-dark-bg text-warning text-xs px-5 py-2 rounded-lg border border-dark-border hover:bg-dark-card-hover transition-colors"
              >
                Pausar
              </button>
            )}
            <button
              onClick={reset}
              className="text-dark-text-muted text-xs px-3 py-2 hover:text-white transition-colors"
            >
              Reiniciar
            </button>
          </div>
        </div>
      )}
      <div className="mt-3 w-full bg-dark-bg rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-neon-green rounded-full transition-all duration-1000 ease-linear"
          style={{ width: `${((seconds - time) / seconds) * 100}%` }}
        />
      </div>
    </div>
  );
};
