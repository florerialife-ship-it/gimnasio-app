import { type FC } from 'react';

type Tab = 'inicio' | 'rutina' | 'ejercicios' | 'progreso' | 'config';

interface Props {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'inicio', label: 'Inicio', icon: 'home' },
  { id: 'rutina', label: 'Rutina', icon: 'play' },
  { id: 'ejercicios', label: 'Ejercicios', icon: 'list' },
  { id: 'progreso', label: 'Progreso', icon: 'chart' },
  { id: 'config', label: 'Config', icon: 'gear' }
];

const Icon: FC<{ name: string; active: boolean }> = ({ name, active }) => {
  const color = active ? '#a3e635' : '#6b7280';
  const weight = active ? 'fill' : 'none';

  const paths: Record<string, JSX.Element> = {
    home: (
      <g>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} fill={active ? color : 'none'} />
        <polyline points="9 22 9 12 15 12 15 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} fill={active ? '#0f0f13' : 'none'} />
      </g>
    ),
    play: (
      <polygon points="5 3 19 12 5 21 5 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} fill={active ? color : 'none'} />
    ),
    list: (
      <g>
        <line x1="8" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round" stroke={color} />
        <line x1="8" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" stroke={color} />
        <line x1="8" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" stroke={color} />
        <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="2" strokeLinecap="round" stroke={color} />
        <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="2" strokeLinecap="round" stroke={color} />
        <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="2" strokeLinecap="round" stroke={color} />
      </g>
    ),
    chart: (
      <g>
        <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} />
        <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} />
        <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} />
      </g>
    ),
    gear: (
      <g>
        <circle cx="12" cy="12" r="3" strokeWidth="2" stroke={color} fill={active ? color : 'none'} />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color} fill={active ? color + '20' : 'none'} />
      </g>
    )
  };

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  );
};

export const BottomNavigation: FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-dark-border pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center w-full h-full gap-0.5 transition-colors ${
              activeTab === tab.id ? 'text-neon-green' : 'text-dark-text-muted'
            }`}
          >
            <Icon name={tab.icon} active={activeTab === tab.id} />
            <span className="text-[10px] font-medium leading-none">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
