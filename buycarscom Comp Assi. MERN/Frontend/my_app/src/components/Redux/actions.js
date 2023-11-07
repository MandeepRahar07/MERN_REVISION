import axios from 'axios'
import { LOG_IN, PRODUCT_DATA, SING_UP, USER_DATA } from './actiontype';
import Login from '../Login/Login';

export const SingupPost = (payload)=> async(dispatch)=>{
       try{
        const res = await axios.post(`http://localhost:3000/mandeep`,payload)
        dispatch({
            type : SING_UP,
            payload : res.data
        })
       }catch(err){
        console.log(err);
       }
}

export const userdataget = ()=> async(dispatch)=>{
    try{
     const res = await axios.get(`http://localhost:3000/mandeep`)
     dispatch({
         type : USER_DATA,
         payload : res.data
     })
    }catch(err){
     console.log(err);
    }
}

export const Currentuser = (payload)=>(dispatch)=>{
     dispatch({
        type: LOG_IN,
        payload : payload
     })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////


export const ProductGetRequest = () =>async(dispatch)=>{
   try{
    const res = await axios.get(`http://localhost:3000/product`)
    dispatch({
        type : PRODUCT_DATA,
        payload : res.data
   })
   }catch(err){
       console.log(err);
   }
}

