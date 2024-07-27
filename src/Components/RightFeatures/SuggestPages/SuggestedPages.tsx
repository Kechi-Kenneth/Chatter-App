import './SuggestedPages.css'
import React, { useState } from 'react';

interface Suggestion {
  id: number;
  name: string;
  job: string;
  profileImage: string;
}

interface SuggestPagesProps {
  suggestions: Suggestion[];
}

const SuggestPages: React.FC<SuggestPagesProps> = ({ suggestions }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleSuggestions = showAll ? suggestions : suggestions.slice(0, 5);

  return (
    <div className='suggested-pages'>
      <h2>Suggest Pages</h2>
      <ul>
        {visibleSuggestions.map(suggestion => (
          <li key={suggestion.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src={suggestion.profileImage} 
              alt={`${suggestion.name}'s profile`} 
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <h4 style={{ margin: 0 }}>{suggestion.name}</h4>
              <p style={{ margin: 0 }}>{suggestion.job}</p>
            </div>
          </li>
        ))}
      </ul>
      {suggestions.length > 5 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
};

// Usage example




export default SuggestPages;
