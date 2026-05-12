import { type FC, type ReactNode } from 'react';
import { BottomNavigation } from './BottomNavigation';

type Tab = 'inicio' | 'rutina' | 'ejercicios' | 'progreso' | 'config';

interface Props {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({ activeTab, onTabChange, children }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col max-w-lg mx-auto">
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 44V28l4-2v18" fill="#a3e635" opacity="0.9"/>
              <path d="M28 44V24l4-2v22" fill="#a3e635" opacity="0.7"/>
              <path d="M36 44V20l4-2v26" fill="#a3e635"/>
              <circle cx="38" cy="16" r="3" fill="#a3e635"/>
              <path d="M14 46h36" stroke="#a3e635" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="text-base font-bold text-white tracking-tight">Coach Gimnasio</h1>
          </div>
          <span className="text-[11px] text-dark-text-muted bg-dark-card px-2 py-1 rounded-full">
            v1.0
          </span>
        </div>
      </header>

      <main className="flex-1 px-4 pt-4 pb-24">
        {children}
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};
