import React, { useState } from 'react';
import { searchProducts } from '../api/productData';

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.warn('Search form submitted');
    console.warn('Search query:', searchQuery);
    try {
      const data = await searchProducts(searchQuery);
      console.warn('Search results:', data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="d-flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search our products..."
          className="form-control me-2"
          style={{ width: '200px', height: '30px', marginLeft: '30px' }}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
