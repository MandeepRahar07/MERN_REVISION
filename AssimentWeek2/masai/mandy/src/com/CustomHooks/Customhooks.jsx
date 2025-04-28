import React, { useEffect, useState } from 'react'

function Customhooks(url) {
    let[data, setData] = useState([]);
    let fetchdata = async()=>{
        try{
            const res = await fetch(url);
            const res2 = await res.json();
            setData(res2);

        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[url]);
  return {data};
}

export default Customhooks