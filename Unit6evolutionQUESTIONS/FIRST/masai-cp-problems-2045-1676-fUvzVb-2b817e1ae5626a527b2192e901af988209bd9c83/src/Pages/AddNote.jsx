import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { adddata } from "../Redux/AppReducer/action";


export const AddNote = () => {



const [data, setData] = useState({
     title : "",
     description : ""
})

console.log(data);

const handlechange = (e)=>{

  setData({
    ...data,
    [e.target.name] : e.target.value
  })

}

const dispatch = useDispatch();


const handlesubmit = (e)=>{
e.preventDefault();
dispatch(adddata(data))
setData("");
}


  return (
    <div data-testid="add-note">
      <h1>Add Your Note</h1>
      <div>
        <form onSubmit={handlesubmit}>
          <label>Title</label>

          <input         
            data-testid="title-input"
            placeholder="Enter Title"
            name = "title"
            value = {data.title}
           onChange={handlechange}></input>

          <label>Description</label>
          <input
            placeholder="Enter Description"         
            data-testid="description-input"
            name = "description"
            value = {data.description}
            onChange={handlechange}></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};
