import { GET_REQ,POST_REQ } from "./actiontype";
import axios from 'axios';


export const getrequest = ()=>async(dispatch)=>{
    try{
      const res = await axios.get(`http://localhost:3000/mandeep`)
      dispatch({
        type : GET_REQ,
        payload : res.data
      })
    }catch(err){
        console.log(err);
    }
}

export const postrequest = (payload)=>async(dispatch)=>{

try{
    const res = await axios.post(`http://localhost:3000/mandeep`,payload);
    dispatch({
        type : POST_REQ,
        payload : res.data
    })
}
   catch(err){
    console.log(err);
}
}