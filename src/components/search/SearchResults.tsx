import { SearchResult } from '../../engine/search-index';

interface SearchResultsProps {
  results: SearchResult[];
  onSelect: (result: SearchResult) => void;
  onNavigate?: (result: SearchResult) => void;
}

function getIcon(type: string): string {
  return type === 'occupant' ? '👤' : '🚪';
}

export function SearchResults({ results, onSelect, onNavigate }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <ul className="result-list">
      {results.map((result, i) => (
        <li key={`${result.entry.id}-${i}`} className="result-item" onClick={() => onSelect(result)}>
          <div className="result-icon">{getIcon(result.entry.type)}</div>
          <div className="result-text">
            <div className="result-name">{result.entry.displayName}</div>
            <div className="result-subtitle">{result.entry.subtitle}</div>
          </div>
          {onNavigate && (
            <button
              className="result-action"
              onClick={e => {
                e.stopPropagation();
                onNavigate(result);
              }}
            >
              Navigate →
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
