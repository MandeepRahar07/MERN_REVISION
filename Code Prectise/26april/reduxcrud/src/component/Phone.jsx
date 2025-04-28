
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { rt, rts } from "./redux/action";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export function Phone (){
const Data = useSelector(state => state.data);
const dispatch = useDispatch();

const fetchdata = async()=>{
    try{
    dispatch(rt());
    const res = await axios.get(`https://dummyjson.com/products`)
    dispatch(rts(res.data.products));
  
    }catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    fetchdata();
},[])

    return(
        <div>
         <h1>Phone List witht the title</h1>
         <div>
            {
                Data.map((e)=>{
                    return(
                        <div key={e.id}>
                            <h3>{e.title}</h3>
                        </div>
                    )
                })
            }
         </div>
        </div>
    )
}