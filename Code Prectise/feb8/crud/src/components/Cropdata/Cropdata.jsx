import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Cropdata() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  const fetchdata = async()=>{
    try{
         const res = await fetch(`http://localhost:3001/cropdata/`);
         const result = await res.json();

         if(res.ok){
          console.log(result);
          setData(result)
         }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchdata();
  },[]);

  const deletedcrop = async(id)=>{
    try{
       const res = await fetch(`http://localhost:3001/cropdata/${id}`, { method: "DELETE" })

       const data = await res.json();
       if(res.ok){
        console.log(data);
        fetchdata();
       }

    }catch(err){
      console.log(err);
    }
  }




  return (
    <div>Cropdata
      <div>
        <button onClick={()=> Navigate('/addcrop')}>Add a Crop</button>
      </div>
      <div>
        {
          data.map((e)=>{
               return(
                <div>
                  <p>crop Name</p>
                  <p>{e.crop_name}</p>
                  <button onClick={()=>deletedcrop(e.id)}>Delete</button>
                  <button onClick = {()=> Navigate(`/editcrop/${e.id}`)}>Edit</button>
                </div>
               )
          })
        }
      </div>
    </div>
  )
}

export default Cropdata