import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filters: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  filters,
  selectedFilter,
  onFilterChange,
  placeholder = 'Buscar...'
}) => {
  return (
    <div className="search-container flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto mb-8">
      <div className="relative flex-grow">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-colors bg-white dark:bg-gray-800 dark:border-purple-600 dark:text-white"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500">
          🔍
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedFilter === filter
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;