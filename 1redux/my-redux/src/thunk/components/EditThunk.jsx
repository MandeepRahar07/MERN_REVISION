
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editbythunk, postbythunk } from '../redux thunk/action';
import { useParams } from 'react-router-dom';



function EditThunk() {
    const dispatch = useDispatch();
    const {id} = useParams();
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
      dispatch(editbythunk( id , data)); // Pass data directly, not as a separate argument
      setData({
        name: '',
        rate: '',
        cat: '',
      });
    };

  return (
     <div>
        <h1>EDIT PAGE</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" onChange={handlechange} />
        <input type="text" name="rate" onChange={handlechange} />
        <input type="text" name="cat" onChange={handlechange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditThunk