import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchdata } from "../Redux/AppReducer/action";
import {useEffect} from 'react';
import { NoteCard } from "../Components/NoteCard";

export const ViewNotes = () => { 
const dispatch = useDispatch();
  const {notes} = useSelector((state)=> state.Notes);
console.log(notes);
  useEffect(()=>{
    dispatch(fetchdata());
  },[dispatch]);

  return (
    <div data-testid="viewnotes-container">
      <h1>View Notes</h1>
      <div data-testid="view-notes">
       {/* render all the notes by using NoteCard component */}
        {
          notes.map((e)=>{
           return <div>
            <NoteCard e = {e}/>
           </div>
          })
        } 
      </div>
    </div>
  );
};
