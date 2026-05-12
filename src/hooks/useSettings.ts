import { useState, useCallback } from 'react';
import type { UserSettings, Equipment, Objective, CurrentLevel, ZoneToCare } from '../types';
import { loadSettings, saveSettings } from '../utils/storage';

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>(loadSettings);

  const update = useCallback((partial: Partial<UserSettings>) => {
    setSettings(prev => {
      const next = { ...prev, ...partial };
      saveSettings(next);
      return next;
    });
  }, []);

  const toggleEquipment = useCallback((eq: Equipment) => {
    setSettings(prev => {
      const has = prev.availableEquipment.includes(eq);
      const next: UserSettings = {
        ...prev,
        availableEquipment: has
          ? prev.availableEquipment.filter(e => e !== eq)
          : [...prev.availableEquipment, eq]
      };
      saveSettings(next);
      return next;
    });
  }, []);

  const setObjective = useCallback((obj: Objective) => update({ objective: obj }), [update]);
  const setLevel = useCallback((lvl: CurrentLevel) => update({ currentLevel: lvl }), [update]);
  const setDaysPerWeek = useCallback((d: 3 | 4 | 5 | 6) => update({ daysPerWeek: d }), [update]);
  const setRoutineDuration = useCallback((d: 20 | 30 | 45 | 60) => update({ routineDuration: d }), [update]);
  const toggleZoneToCare = useCallback((zone: ZoneToCare) => {
    setSettings(prev => {
      const has = prev.zonesToCare.includes(zone);
      let next: ZoneToCare[];
      if (zone === 'ninguna') {
        next = ['ninguna'];
      } else {
        next = prev.zonesToCare.filter(z => z !== 'ninguna');
        if (has) {
          next = next.filter(z => z !== zone);
        } else {
          next = [...next, zone];
        }
        if (next.length === 0) next = ['ninguna'];
      }
      const updated = { ...prev, zonesToCare: next };
      saveSettings(updated);
      return updated;
    });
  }, []);

  return {
    settings,
    update,
    toggleEquipment,
    setObjective,
    setLevel,
    setDaysPerWeek,
    setRoutineDuration,
    toggleZoneToCare
  };
}
