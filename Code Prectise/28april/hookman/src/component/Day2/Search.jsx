import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Search() {
    const [data, setData] = useState([]);
    const[search, setSearch] = useState('');

    const Fatchdata = async (query = '') => {
        try {
          const url = query
            ? `https://dummyjson.com/products/search?q=${query}`
            : `https://dummyjson.com/products`;
          const res = await axios.get(url);
          setData(res.data.products);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          Fatchdata(search);
        }, 500);
        return () => clearTimeout(timeoutId);
      }, [search]);

    return (
        <div>
            <div>
                <div>
                    <h2>Search The Item </h2>
                </div>
                <div>
                    <input type="text"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     placeholder='Type for the search'
                    />
                </div>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <div key={e.id}>
                                    <h3>
                                        {e.title}
                                    </h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Search