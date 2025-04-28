import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Class() {

    const[ClassDetails , setClassDetails] = useState([]);

    const Fetchdata =async ()=>{
 try{
         const res = await axios.get('http://localhost:8080/data');
         const data = res.data;
         console.log(data);
         setClassDetails(data);
 }catch(err){
    console.log(err);
 }
    }

    useEffect(()=>{
        Fetchdata();
    },[]);

  return (
    <div>Class Details At here you can see
        <div>
            {
                ClassDetails.map((e)=>{
          return(
            <div key={e.id}>
                <h1>{e.name}</h1>
                <h3>{e.place}</h3>
            </div>
          )
                })
            }
            
            </div> </div>
  )
}

export default Class