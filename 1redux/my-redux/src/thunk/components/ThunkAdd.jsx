// ThunkAdd.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postbythunk } from '../redux thunk/action';


function ThunkAdd() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    rate: '',
    cat: '',
  });

  const handlechange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(postbythunk(data)); // Pass data directly, not as a separate argument
    setData({
      name: '',
      rate: '',
      cat: '',
    });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" onChange={handlechange} />
        <input type="text" name="rate" onChange={handlechange} />
        <input type="text" name="cat" onChange={handlechange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ThunkAdd;
