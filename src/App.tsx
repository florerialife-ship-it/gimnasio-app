import { useState, useCallback, useEffect } from 'react';
import type { Workout, WorkoutLog, FatigueLevel, AppState } from './types';
import { AppLayout } from './components/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { TodayWorkoutPage } from './pages/TodayWorkoutPage';
import { ExerciseLibraryPage } from './pages/ExerciseLibraryPage';
import { ProgressPage } from './pages/ProgressPage';
import { SettingsPage } from './pages/SettingsPage';
import { generateWorkout, generateMobilityRoutine } from './data/workoutGenerator';
import { loadState, saveState, loadHistory, saveSettings, addWorkoutToHistory, checkProgression } from './utils/storage';
import { useSettings } from './hooks/useSettings';

type Tab = 'inicio' | 'rutina' | 'ejercicios' | 'progreso' | 'config';

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const [appState, setAppState] = useState<AppState>(loadState);
  const [currentWorkout, setCurrentWorkout] = useState<Workout | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);
  const [workoutCompleteMessage, setWorkoutCompleteMessage] = useState('');

  const {
    settings,
    toggleEquipment,
    setObjective,
    setLevel,
    setDaysPerWeek,
    setRoutineDuration,
    toggleZoneToCare
  } = useSettings();

  useEffect(() => {
    setAppState(prev => ({ ...prev, settings }));
  }, [settings]);

  useEffect(() => {
    saveState(appState);
  }, [appState]);

  const startWorkout = useCallback((fatigue: FatigueLevel, easier = false, harder = false) => {
    const progression = checkProgression();
    let phase = appState.currentPhase;
    let week = appState.currentWeek;

    if (progression.shouldProgress && phase < 4) {
      phase = (phase + 1) as 0 | 1 | 2 | 3 | 4;
      week = 1;
      setAppState(prev => ({ ...prev, currentPhase: phase, currentWeek: week }));
    }

    const dayNumber = loadHistory().filter(h => h.completed).length + 1;
    const workout = generateWorkout(phase, week, dayNumber, settings, fatigue, easier, harder);
    setCurrentWorkout(workout);
    setActiveTab('rutina');
  }, [appState, settings]);

  const startQuickWorkout = useCallback(() => {
    const dayNumber = loadHistory().filter(h => h.completed).length + 1;
    const quickSettings = { ...settings, routineDuration: 20 as const };
    const workout = generateWorkout(appState.currentPhase, appState.currentWeek, dayNumber, quickSettings, 'media', false, false);
    setCurrentWorkout(workout);
    setActiveTab('rutina');
  }, [appState, settings]);

  const startMobilityWorkout = useCallback(() => {
    const workout = generateMobilityRoutine(settings);
    setCurrentWorkout(workout);
    setActiveTab('rutina');
  }, [settings]);

  const handleWorkoutComplete = useCallback((log: WorkoutLog) => {
    addWorkoutToHistory(log);
    const history = loadHistory();
    const sessionsThisWeek = history.filter(h => {
      const d = new Date(h.date + 'T00:00:00');
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      return d >= weekStart && h.completed;
    }).length;

    if (sessionsThisWeek >= settings.daysPerWeek) {
      setAppState(prev => ({
        ...prev,
        currentWeek: prev.currentWeek + 1,
        lastWorkoutDate: log.date,
        streakDays: prev.streakDays + 1
      }));
    } else {
      setAppState(prev => ({
        ...prev,
        lastWorkoutDate: log.date,
        streakDays: prev.streakDays + 1
      }));
    }

    setShowCompletion(true);
    setWorkoutCompleteMessage('¡Rutina completada! Sigue así, la consistencia es la clave.');
    setTimeout(() => setShowCompletion(false), 5000);
    setCurrentWorkout(null);
    setActiveTab('inicio');
  }, [settings.daysPerWeek]);

  const handleEasier = useCallback(() => {
    if (!currentWorkout) return;
    const dayNumber = loadHistory().filter(h => h.completed).length;
    const workout = generateWorkout(currentWorkout.phase, currentWorkout.week, dayNumber, settings, currentWorkout.fatigueLevel, true, false);
    setCurrentWorkout(workout);
  }, [currentWorkout, settings]);

  const handleHarder = useCallback(() => {
    if (!currentWorkout) return;
    const dayNumber = loadHistory().filter(h => h.completed).length;
    const workout = generateWorkout(currentWorkout.phase, currentWorkout.week, dayNumber, settings, currentWorkout.fatigueLevel, false, true);
    setCurrentWorkout(workout);
  }, [currentWorkout, settings]);

  const handleChangeExercise = useCallback(() => {
    if (!currentWorkout) return;
    const dayNumber = loadHistory().filter(h => h.completed).length;
    const workout = generateWorkout(
      currentWorkout.phase, currentWorkout.week, dayNumber, settings,
      currentWorkout.fatigueLevel, currentWorkout.easierVariant, currentWorkout.harderVariant
    );
    setCurrentWorkout(workout);
  }, [currentWorkout, settings]);

  const handlePainReport = useCallback(() => {
    handleEasier();
  }, [handleEasier]);

  const handleEquipmentMissing = useCallback(() => {
    // Equipment can be managed via settings
  }, []);

  return (
    <AppLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {showCompletion && (
        <div className="fixed top-20 left-4 right-4 z-50 bg-success/90 text-white text-sm font-semibold px-4 py-3 rounded-xl text-center shadow-lg max-w-lg mx-auto">
          {workoutCompleteMessage}
        </div>
      )}

      {activeTab === 'inicio' && (
        <DashboardPage
          onStartWorkout={(fatigue) => startWorkout(fatigue)}
          onStartQuick={startQuickWorkout}
          onStartMobility={startMobilityWorkout}
        />
      )}

      {activeTab === 'rutina' && currentWorkout && (
        <TodayWorkoutPage
          workout={currentWorkout}
          onComplete={handleWorkoutComplete}
          onEasier={handleEasier}
          onHarder={handleHarder}
          onChangeExercise={handleChangeExercise}
          onPainReport={handlePainReport}
          onEquipmentMissing={handleEquipmentMissing}
        />
      )}

      {activeTab === 'rutina' && !currentWorkout && (
        <div className="text-center py-16">
          <span className="text-4xl block mb-4">🏋️</span>
          <h2 className="text-lg font-bold text-white mb-2">Sin rutina activa</h2>
          <p className="text-sm text-dark-text-muted mb-6">
            Ve a Inicio para empezar la rutina de hoy.
          </p>
          <button
            onClick={() => setActiveTab('inicio')}
            className="bg-neon-green text-dark-bg font-semibold px-6 py-3 rounded-xl text-sm"
          >
            Ir a Inicio
          </button>
        </div>
      )}

      {activeTab === 'ejercicios' && <ExerciseLibraryPage />}

      {activeTab === 'progreso' && <ProgressPage />}

      {activeTab === 'config' && (
        <SettingsPage
          settings={settings}
          onUpdate={(partial) => saveSettings({ ...settings, ...partial })}
          onToggleEquipment={toggleEquipment}
          onSetObjective={setObjective}
          onSetLevel={setLevel}
          onSetDaysPerWeek={setDaysPerWeek}
          onSetRoutineDuration={setRoutineDuration}
          onToggleZone={toggleZoneToCare}
        />
      )}
    </AppLayout>
  );
};

export default App;
