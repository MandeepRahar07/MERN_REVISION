import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletebythunk, fetchdata } from '../redux thunk/action';
import { useNavigate } from 'react-router-dom';

function ThunkProduct() {
  const {data} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(data);
  useEffect(()=>{
    dispatch(fetchdata());
  },[]);

  const handleClick =(id)=>{
    dispatch(deletebythunk(id))
    fetchdata();
    console.log(id);
  }
  return (
    <div>{
       data.map((e)=>{
        return (
            <div key={e.id}>
                <h1>{e.name}</h1>
                <h4>{e.rate}</h4>
                <h3>{e.cat}</h3>
                <button onClick={()=>{handleClick(e.id)}}>DELETE</button>
                <button onClick={()=>{navigate(`/edit/${e.id}`)}}>EDIT</button>
                <h2>{e.id}</h2>
            </div>
        )
       })
    }
    </div>
  )
}

export default ThunkProduct;