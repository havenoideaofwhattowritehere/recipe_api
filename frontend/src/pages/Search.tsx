import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'ingredient' | 'country' | 'category' | 'id'>('ingredient');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {

      let searchQuery = `?${searchType}=${query}`;
      if (searchType === 'id') {
        searchQuery = `id?id=${query}`;
      }
      navigate(`/recipes${searchQuery}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by ingredient, country, category or ID"
      />
      <select onChange={(e) => setSearchType(e.target.value as 'ingredient' | 'country' | 'category' | 'id')}>
        <option value="ingredient">Ingredient</option>
        <option value="country">Country</option>
        <option value="category">Category</option>
        <option value="id">Recipe ID</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
