import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postFail, postReq, postSucc } from '../redux/actions';

function AddRedux() {
    const [himanshu , setHimanshu] = useState({
        name : " ",
        cat : " ",
        rate : " "
    })

    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch()

    const addedData =async()=>{
        dispatch(postReq())
        await axios.post('http://localhost:3000/mandy' , himanshu).then((res)=>{
            dispatch(postSucc(res.data))
        }).catch((error)=>{
                console.log(error);
                dispatch(postFail())
        })
    }
    console.log(himanshu);

    const handleSubmit = (e) => {
        e.preventDefault();
       addedData();
    }
    
    const handleChange = (e) => {
   
        setHimanshu(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='name' name ="name" onChange={handleChange}/>
        <input placeholder='cat'name ="cat" onChange={handleChange}/>
        <input placeholder='rate' name ="rate" onChange={handleChange}/>
        <button type='submit'>click</button>
    </form>
  )
}

export default AddRedux