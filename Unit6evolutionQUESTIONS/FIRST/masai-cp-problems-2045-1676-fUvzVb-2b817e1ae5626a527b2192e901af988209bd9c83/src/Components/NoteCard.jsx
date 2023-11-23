import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { Deletedata, fetchdata,handleedit } from "../Redux/AppReducer/action";
export const NoteCard = ({e}) => {
  const [Data, setData] = useState({
       title : "",
       description: ""
  })
  const[toggle, settoggle] = useState(true);
   
   const dispatch = useDispatch();
  const handledlete = (id)=>{
    dispatch(Deletedata(id));
    dispatch(fetchdata());
  }

  const handlechange= (e)=>{
    setData({
      ...Data,
      [e.target.name] : e.target.value
    })
  
  }

  const handlesubmit = (id)=>{
//  e.preventDefault();
    dispatch(handleedit(Data,id));
  }


  
  return (
    <div data-testid="note-card">
      {/* Add title and description of the note in h3 and p tag respectively */}
      <h3>{e.title}</h3>
      <p>{e.description}</p>      
      <button onClick={() => handledlete(e.id)}>
        Delete
      </button>
      {/* The button should be changed to Edit or Cancel Edit */}
      <button onClick = {()=> settoggle(!toggle)}>
        {
         toggle ? "Edit" : "Cancel Edit"
        }
      </button>
      {/* The below div should be visible only when some click on Edit and after submitting the form the data should be updated on DOM as well as redux store.
      1. Make a patch request the update
      2. After making patch request update the all the notes in the redux store by making get request*/}
     {
      toggle ? "" : 
        <div data-testid="edit-note">
          <form onSubmit={handlesubmit(e.id)}>
            <label>Title</label>
            <input           
              data-testid="title-input"
              placeholder="Enter Title"
              name = "title"
              value = {Data.title}   
              onChange={handlechange}     
              ></input>
            <label>Description</label>
            <input
              placeholder="Enter Description"            
              data-testid="description-input" 
              name = "description"
              value = {Data.description}   
              onChange={handlechange}   
              ></input>
            <input type="submit"></input>
          </form>
        </div> 
}

    </div>
  );
};




