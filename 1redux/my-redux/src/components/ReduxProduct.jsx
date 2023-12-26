import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fail, success, err, delReq, delSucc, delFail } from '../redux/actions';

function ReduxProduct() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(fail());
    try {
      const response = await axios.get('http://localhost:3000/mandy');
      dispatch(success(response.data));
    } catch (error) {
      console.error(error);
      dispatch(err());
    }
  };

  const handleDelete = async (id) => {
    dispatch(delReq());
    try {
      await axios.delete(`http://localhost:3000/mandy/${id}`);
      dispatch(delSucc(id));
      fetchData();
    } catch (error) {
      console.error(error);
      dispatch(delFail());
    }
  };

  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <h1>{e.name}</h1>
          <h1>{e.cat}</h1>
          <h1>{e.rate}</h1>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
          
          <button onClick={()=> navigate(`/edit/${e.id}`)}>EDIT</button>
        </div>
      ))}
    </div>
  );
}

export default ReduxProduct;
