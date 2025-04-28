import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function editcrop() {
    const[cropdata, setCropdata] = useState({});
   const {id} = useParams();
    const fetchdata = async()=>{
        try{
              const res = await fetch(`http://localhost:3001/cropdata/${id}`);
              
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>editcrop</div>
  )
}

export default editcrop