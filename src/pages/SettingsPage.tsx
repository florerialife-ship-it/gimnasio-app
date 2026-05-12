import { type FC, useState } from 'react';
import type { UserSettings, Objective, CurrentLevel } from '../types';
import { EquipmentSelector } from '../components/EquipmentSelector';
import { resetAllData, loadState } from '../utils/storage';

interface Props {
  settings: UserSettings;
  onUpdate: (partial: Partial<UserSettings>) => void;
  onToggleEquipment: (eq: import('../types').Equipment) => void;
  onSetObjective: (obj: Objective) => void;
  onSetLevel: (lvl: CurrentLevel) => void;
  onSetDaysPerWeek: (d: 3 | 4 | 5 | 6) => void;
  onSetRoutineDuration: (d: 20 | 30 | 45 | 60) => void;
  onToggleZone: (zone: import('../types').ZoneToCare) => void;
}

const objectiveOptions: { value: Objective; label: string; desc: string }[] = [
  { value: 'volver_forma', label: 'Volver a estar en forma', desc: 'Acondicionamiento general progresivo' },
  { value: 'ganar_fuerza', label: 'Ganar fuerza', desc: 'Aumentar fuerza en ejercicios compuestos' },
  { value: 'ganar_musculo', label: 'Ganar músculo', desc: 'Hipertrofia con volumen progresivo' },
  { value: 'bajar_grasa', label: 'Bajar grasa', desc: 'Mayor densidad y algo de cardio' },
  { value: 'mejorar_condicion', label: 'Mejorar condición', desc: 'Resistencia y capacidad cardiovascular' },
  { value: 'movilidad_salud', label: 'Movilidad y salud', desc: 'Enfoque en bienestar y prevención' }
];

const levelOptions: { value: CurrentLevel; label: string; desc: string }[] = [
  { value: 'muy_fuera_forma', label: 'Muy fuera de forma', desc: 'Empieza desde cero con rutinas muy suaves' },
  { value: 'principiante', label: 'Principiante', desc: 'Algo de experiencia pero necesitas guía' },
  { value: 'intermedio_regresando', label: 'Intermedio regresando', desc: 'Ya entrenabas pero llevas tiempo sin hacerlo' },
  { value: 'intermedio', label: 'Intermedio', desc: 'Buen nivel, buscas progresar de forma estructurada' }
];

const zoneOptions: { value: import('../types').ZoneToCare; label: string }[] = [
  { value: 'ninguna', label: 'Ninguna' },
  { value: 'rodillas', label: 'Rodillas' },
  { value: 'espalda_baja', label: 'Espalda baja' },
  { value: 'hombros', label: 'Hombros' },
  { value: 'munecas', label: 'Muñecas' }
];

const daysOptions: (3 | 4 | 5 | 6)[] = [3, 4, 5, 6];
const durationOptions: (20 | 30 | 45 | 60)[] = [20, 30, 45, 60];

export const SettingsPage: FC<Props> = ({
  settings,
  onUpdate,
  onToggleEquipment,
  onSetObjective,
  onSetLevel,
  onSetDaysPerWeek,
  onSetRoutineDuration,
  onToggleZone
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    if (showResetConfirm) {
      resetAllData();
      setShowResetConfirm(false);
      window.location.reload();
    } else {
      setShowResetConfirm(true);
    }
  };

  return (
    <div className="space-y-4">
      {/* Objective */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Objetivo principal</h2>
        <div className="space-y-2">
          {objectiveOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => onSetObjective(opt.value)}
              className={`w-full text-left p-3 rounded-lg border transition-all ${
                settings.objective === opt.value
                  ? 'border-neon-green bg-neon-green/10'
                  : 'border-dark-border bg-dark-bg hover:border-dark-text-muted'
              }`}
            >
              <span className="text-sm font-semibold text-white block">{opt.label}</span>
              <span className="text-[11px] text-dark-text-muted">{opt.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Current level */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Nivel actual</h2>
        <div className="space-y-2">
          {levelOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => onSetLevel(opt.value)}
              className={`w-full text-left p-3 rounded-lg border transition-all ${
                settings.currentLevel === opt.value
                  ? 'border-neon-green bg-neon-green/10'
                  : 'border-dark-border bg-dark-bg hover:border-dark-text-muted'
              }`}
            >
              <span className="text-sm font-semibold text-white block">{opt.label}</span>
              <span className="text-[11px] text-dark-text-muted">{opt.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Days per week */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Días por semana</h2>
        <div className="flex gap-2">
          {daysOptions.map(d => (
            <button
              key={d}
              onClick={() => onSetDaysPerWeek(d)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                settings.daysPerWeek === d
                  ? 'bg-neon-green text-dark-bg'
                  : 'bg-dark-bg text-dark-text-muted border border-dark-border hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-dark-text-muted mt-2">
          {settings.daysPerWeek === 3 && '3 días: frecuencia mínima recomendada.'}
          {settings.daysPerWeek === 4 && '4 días: buen balance para cuerpo completo.'}
          {settings.daysPerWeek === 5 && '5 días: permite división empuje/jalón/pierna.'}
          {settings.daysPerWeek === 6 && '6 días: alta frecuencia, requiere buena recuperación.'}
        </p>
      </div>

      {/* Routine duration */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Duración de rutina</h2>
        <div className="grid grid-cols-4 gap-2">
          {durationOptions.map(d => (
            <button
              key={d}
              onClick={() => onSetRoutineDuration(d)}
              className={`py-2.5 rounded-lg text-sm font-bold transition-all ${
                settings.routineDuration === d
                  ? 'bg-neon-green text-dark-bg'
                  : 'bg-dark-bg text-dark-text-muted border border-dark-border hover:text-white'
              }`}
            >
              {d}'
            </button>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Equipo disponible</h2>
        <EquipmentSelector selected={settings.availableEquipment} onToggle={onToggleEquipment} />
      </div>

      {/* Zones to care */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Zonas a cuidar</h2>
        <div className="flex gap-1.5 flex-wrap">
          {zoneOptions.map(opt => {
            const active = settings.zonesToCare.includes(opt.value);
            return (
              <button
                key={opt.value}
                onClick={() => onToggleZone(opt.value)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  active
                    ? 'bg-neon-green text-dark-bg'
                    : 'bg-dark-bg text-dark-text-muted border border-dark-border hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {settings.zonesToCare.filter(z => z !== 'ninguna').length > 0 && (
          <div className="mt-3 bg-warning/10 border border-warning/20 rounded-lg p-2.5">
            <p className="text-[11px] text-warning">
              Los ejercicios que afecten estas zonas se adaptarán o sustituirán automáticamente.
            </p>
          </div>
        )}
      </div>

      {/* Connection info */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">
          Abrir desde el celular
        </h2>
        <div className="space-y-2 text-xs text-dark-text">
          <p>1. Ejecuta: <code className="text-neon-green bg-dark-bg px-1.5 py-0.5 rounded text-[11px]">npm run dev -- --host 0.0.0.0</code></p>
          <p>2. Busca la IP local de tu PC (ej: 192.168.1.X).</p>
          <p>3. En el celular abre: <code className="text-neon-blue bg-dark-bg px-1.5 py-0.5 rounded text-[11px]">http://TU-IP:5173</code></p>
          <p className="text-dark-text-muted text-[10px] mt-2">
            Si el firewall de Windows pregunta, permite el acceso a Node.js en redes privadas.
          </p>
        </div>
      </div>

      {/* Reset data */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-4">
        <h2 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wider mb-3">Datos</h2>
        <p className="text-[11px] text-dark-text-muted mb-3">
          Los datos se guardan en localStorage de este navegador. Puedes borrarlos aquí.
        </p>
        <button
          onClick={handleReset}
          className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
            showResetConfirm
              ? 'bg-danger text-white'
              : 'bg-dark-bg text-danger border border-danger/30 hover:bg-danger/10'
          }`}
        >
          {showResetConfirm ? '¿Confirmar borrado de todos los datos?' : 'Borrar todos los datos'}
        </button>
        {showResetConfirm && (
          <button
            onClick={() => setShowResetConfirm(false)}
            className="ml-2 text-xs text-dark-text-muted px-4 py-2 hover:text-white transition-colors"
          >
            Cancelar
          </button>
        )}
      </div>

      <div className="h-4" />
    </div>
  );
};
