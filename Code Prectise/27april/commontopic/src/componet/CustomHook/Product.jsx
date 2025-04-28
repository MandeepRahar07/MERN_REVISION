import React from 'react';
import useApiHook from './useApiHook'; 

function Product() {
  const { data, error, loading } = useApiHook('https://dummyjson.com/recipes');

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong!</h2>;
  return (
    <div>
      <h2>Products</h2>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <h3>{e.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
