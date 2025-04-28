import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce'; // सही path देना

function DebounceSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 800); // 800ms delay
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData(debouncedSearchTerm);
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const fetchData = async (query) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await res.json();
      setResults(data.products || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Debounce API Search</h2>
      <input
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              {item.title}
            </div>
          ))
        ) : (
          debouncedSearchTerm && <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default DebounceSearch;
