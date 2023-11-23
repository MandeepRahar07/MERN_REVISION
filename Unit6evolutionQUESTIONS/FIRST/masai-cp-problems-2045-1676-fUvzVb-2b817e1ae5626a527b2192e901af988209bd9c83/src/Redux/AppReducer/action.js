//Write the ActionCreator functions here
import axios from 'axios'
import React from 'react'
import { ADD_DATA, DELETE_DATA, GET_DATA } from './actionType'

const URL = `http://localhost:3000/notes`
export const fetchdata = ()=>async(dispatch)=>{
    try{
         const res = await axios.get(URL)
         dispatch({
            type : GET_DATA,
            payload :res.data  
         })
    }catch(err){
        console.log(err);
    }
}

export const adddata = (payload)=>async(dispatch)=>{
    try{
      const res = await axios.post(URL,payload);
      dispatch({
          type : ADD_DATA,
          payload : res.data
        })
        console.log(res.data);
    }catch(err){
     console.log(err);
    }
}

export const Deletedata = (id)=>async(dispatch)=>{
    console.log(id);
    try{
        const res = await axios.delete(`http://localhost:3000/notes/${id}`);
        dispatch({
            type : DELETE_DATA,
            payload :{id}  
         })
    }catch(err){

    }
}


export const handleedit = (id,payload)=>async(dispatch)=>{
    try{
         const res = await axios.patch(`http://localhost:3000/notes/${id}`,payload)
         
    }catch(err){
        console.log(err);
    }
}

