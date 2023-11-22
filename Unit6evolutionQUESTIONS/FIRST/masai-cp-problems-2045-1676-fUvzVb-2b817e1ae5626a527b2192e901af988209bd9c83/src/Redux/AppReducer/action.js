//Write the ActionCreator functions here
import axios from 'axios'
import React from 'react'
import { GET_DATA } from './actionType'


export const fetchdata = ()=>async(dispatch)=>{
    try{
         const res = await axios.get(`http://localhost:3000/notes`)
         dispatch({
            type : GET_DATA,
            payload :res.data  
         })
    }catch(err){
        console.log(err);
    }
}