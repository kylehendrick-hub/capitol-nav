import { ReactNode } from 'react';
import { useNavigation } from '../../context/NavigationContext';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { state, dispatch } = useNavigation();

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="logo">🏛️</span>
        <h1>CapitolNav</h1>
        <button
          className={`a11y-toggle ${state.options.accessible ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_ACCESSIBLE' })}
          title="Wheelchair accessible routes"
        >
          ♿ {state.options.accessible ? 'ON' : 'OFF'}
        </button>
      </header>
      {children}
    </div>
  );
}
