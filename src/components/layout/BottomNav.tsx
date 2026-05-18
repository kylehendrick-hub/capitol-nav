interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { id: 'search', icon: '🔍', label: 'Search' },
  { id: 'navigate', icon: '🧭', label: 'Navigate' },
  { id: 'map', icon: '🗺️', label: 'Map' },
  { id: 'info', icon: 'ℹ️', label: 'Buildings' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`bottom-nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="icon">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
