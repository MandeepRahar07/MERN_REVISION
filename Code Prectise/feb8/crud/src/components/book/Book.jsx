import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

function Book() {
    const [book, setBook] = useState([]);
    const Navigate = useNavigate();
    const fecthdata = async()=>{
        try{
            const res = await fetch(`http://localhost:3001/cropdata/`);
            const data = await res.json();
        setBook(data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
fecthdata();
    },[])

    const handledelete = async(id)=>{
        try{
            const res = await fetch(`http://localhost:3001/cropdata/${id}`, { method: "DELETE" })

            const data = await res.json();
            if(res.ok){
             console.log(data);
             fecthdata();
            }

        }catch(err){
            console.log(err);
        }

    }
  return (
    <div>Book
<div>
    Add a book in the librery
    <button onClick={()=> Navigate("/bookadd")}>Add Book </button>
</div>
        <div>
            {
                book.map((e)=>{
                    return(
                        <div>
                            <p>{e.crop_name}</p>
                            <button onClick={()=> handledelete(e.id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Book 