import { type FC, useState, useMemo } from 'react';
import type { MuscleGroup, Equipment, ExerciseLevel, ExerciseType } from '../types';
import { exercises } from '../data/exercises';
import { ExerciseCard } from '../components/ExerciseCard';

const muscleOptions: { value: MuscleGroup | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'pecho', label: 'Pecho' },
  { value: 'espalda', label: 'Espalda' },
  { value: 'piernas', label: 'Piernas' },
  { value: 'hombros', label: 'Hombros' },
  { value: 'brazos', label: 'Brazos' },
  { value: 'abdomen', label: 'Abdomen' },
  { value: 'cuerpo_completo', label: 'Cuerpo completo' }
];

const equipOptions: { value: Equipment | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todo' },
  { value: 'peso_corporal', label: 'Peso corporal' },
  { value: 'mancuernas', label: 'Mancuernas' },
  { value: 'barra_olimpica', label: 'Barra' },
  { value: 'banco', label: 'Banco' },
  { value: 'barra_dominadas', label: 'Dominadas' },
  { value: 'cuerda_saltar', label: 'Cuerda saltar' },
  { value: 'trampolin', label: 'Trampolín' },
  { value: 'alfombra', label: 'Alfombra' },
  { value: 'cuerda_triceps', label: 'Cuerda tríceps' }
];

const levelOptions: { value: ExerciseLevel | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'principiante', label: 'Principiante' },
  { value: 'intermedio', label: 'Intermedio' },
  { value: 'avanzado', label: 'Avanzado' }
];

const typeOptions: { value: ExerciseType | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'fuerza', label: 'Fuerza' },
  { value: 'movilidad', label: 'Movilidad' },
  { value: 'cardio', label: 'Cardio' },
  { value: 'calentamiento', label: 'Calentamiento' },
  { value: 'abdomen', label: 'Abdomen' },
  { value: 'rehabilitacion', label: 'Rehabilitación' }
];

type FilterKey = 'muscle' | 'equip' | 'level' | 'type';

export const ExerciseLibraryPage: FC = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    muscle: 'todos',
    equip: 'todos',
    level: 'todos',
    type: 'todos'
  });
  const [activeFilter, setActiveFilter] = useState<FilterKey>('muscle');

  const filtered = useMemo(() => {
    return exercises.filter(ex => {
      if (filters.muscle !== 'todos' && ex.category !== filters.muscle) return false;
      if (filters.equip !== 'todos' && !ex.equipment.includes(filters.equip as Equipment)) return false;
      if (filters.level !== 'todos' && ex.level !== filters.level) return false;
      if (filters.type !== 'todos' && ex.type !== filters.type) return false;
      if (search && !ex.name.toLowerCase().includes(search.toLowerCase()) &&
          !ex.muscles.some(m => m.toLowerCase().includes(search.toLowerCase()))) return false;
      return true;
    });
  }, [filters, search]);

  const currentOptions = activeFilter === 'muscle' ? muscleOptions :
    activeFilter === 'equip' ? equipOptions :
    activeFilter === 'level' ? levelOptions : typeOptions;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar ejercicios..."
          className="w-full bg-dark-card border border-dark-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-dark-text-muted focus:outline-none focus:border-neon-green/50"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1">
        {([
          { key: 'muscle' as FilterKey, label: 'Músculo' },
          { key: 'equip' as FilterKey, label: 'Equipo' },
          { key: 'level' as FilterKey, label: 'Nivel' },
          { key: 'type' as FilterKey, label: 'Tipo' }
        ]).map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`flex-1 text-xs py-2 rounded-lg font-medium transition-colors ${
              activeFilter === f.key
                ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                : 'bg-dark-card text-dark-text-muted border border-dark-border'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Filter options */}
      <div className="flex gap-1.5 flex-wrap">
        {currentOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setFilters(prev => ({ ...prev, [activeFilter]: opt.value }))}
            className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-all ${
              filters[activeFilter] === opt.value
                ? 'bg-neon-green text-dark-bg'
                : 'bg-dark-card text-dark-text-muted border border-dark-border hover:text-white'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-2">
        <p className="text-[11px] text-dark-text-muted">{filtered.length} ejercicios encontrados</p>
        {filtered.map(ex => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-8 text-dark-text-muted">
            <span className="text-2xl block mb-2">🔍</span>
            <p className="text-xs">No se encontraron ejercicios con esos filtros</p>
          </div>
        )}
      </div>
    </div>
  );
};
