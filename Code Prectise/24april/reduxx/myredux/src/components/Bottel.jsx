import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Req, Reqfail, Reqsuc } from '../redux/action';
function Bottel() {
    // const [data, setData] = useState([]);
    const data = useSelector((state)=> state.data);
  const dispatch = useDispatch();
    const fetchdata = async()=>{
        try{
            dispatch(Req());
    const res = await axios.get(`http://localhost:8080/bottel`)
    // setData(res.data);
    dispatch(Reqsuc(res.data));
    console.log(res.data);
        }catch(err){
            dispatch(Reqfail());
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchdata();
    },[]);

  return (
    <div>Bottel
        <div>
            {
                data.map((data)=>{
                    return <div key={data.id}>
                        <h1>{data.name}</h1>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Bottel