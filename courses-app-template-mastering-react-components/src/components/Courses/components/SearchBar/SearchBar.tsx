
import { useState } from 'react';
import './searchBar.css';

type Props = { onSearch?: (q: string) => void };

const SearchBar = ({ onSearch }: Props) => {
  const [q, setQ] = useState('');
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        placeholder="Input text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button
        className="btn btn--primary searchbar__btn"
        onClick={() => onSearch?.(q)}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
