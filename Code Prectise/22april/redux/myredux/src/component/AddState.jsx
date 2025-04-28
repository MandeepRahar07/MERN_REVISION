import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostReq, PostReqFail, PostReqSuccess } from './redux/action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddState() {
  const [State, setAddState] = useState({
    name: '',
  });
  const navigate = useNavigate();

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setAddState((prestate) => ({
      ...prestate,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(PostReq());
      const res = await axios.post(`http://localhost:8008/data/`, State);
      dispatch(PostReqSuccess(res.data));
      setAddState({ name: '' }); // Clear input
   navigate('/state');
    } catch (err) {
      dispatch(PostReqFail());
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add State In the list</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">Name</label>
        <input
          name="name"
          placeholder="state name"
          type="text"
          value={State.name}
          onChange={Handlechange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddState;
