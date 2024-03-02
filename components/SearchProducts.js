import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    router.push(`/?search=${encodeURIComponent(searchQuery)}`, undefined, { shallow: true });
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
        <button type="submit" id="prodsearch">Search</button>
      </form>
    </div>
  );
}
