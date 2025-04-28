import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useApiHook(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      const Data = res.data.recipes;
      setData(Data);
      setLoading(false); // ✅ success पे false करो
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [url]); // ✅ dependency में url डाल दो

  return { data, loading, error };
}

export default useApiHook;
