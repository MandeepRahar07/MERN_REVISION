import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editFail, editReq, editSucc } from '../redux/actions';

function ReducEdit() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const[edit , setEdit] = useState({
        name: "", // Set initial values
    rate: "",
    cat: ""
    })

    const handlechange = (e)=>{
     setEdit((pre)=> (
        {
            ...pre,
            [e.target.name] : e.target.value
        }
     ))
    }

  const handlesubmit =(e)=>{
     e.preventDefault();
     const Editdata = async()=>{
              dispatch(editReq());
        try{
        const data = await axios.patch(`http://localhost:3000/mandy/${id}`,edit);
        dispatch(editSucc( data.data));
        }catch(err){
        console.log(err);
        dispatch(editFail());
     }
  }
  Editdata();
  }


  return (
    <div>ReducEdit
        <form onSubmit={handlesubmit}>
            <input type="text" name = 'name' onChange={handlechange} />
            <input type="text" name = 'rate' onChange={handlechange} />
            <input type="text" name = 'cat' onChange={handlechange} />
            <button type = 'submit'>submit</button>
        </form >

    </div>
  )
}

export default ReducEdit