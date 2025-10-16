import { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange, concentrations, label = "Concentration" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConcentration, setSelectedConcentration] = useState('all');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedConcentration(value);
    onFilterChange(value);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by name, company, or role..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
        />
      </div>

      <div className="flex items-center space-x-4">
        <label htmlFor="concentration" className="text-sm font-medium text-gray-700">
          Filter by {label}:
        </label>
        <select
          id="concentration"
          value={selectedConcentration}
          onChange={handleFilterChange}
          className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
        >
          <option value="all">All {label}s</option>
          {concentrations.map((conc) => (
            <option key={conc} value={conc}>
              {conc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
