import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { Deletedata, fetchdata,handleedit } from "../Redux/AppReducer/action";

export const NoteCard = ({ e }) => {
  const [Data, setData] = useState({
    title: e.title,
    description: e.description,
  });
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(Deletedata(id));
    dispatch(fetchdata());
  };

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (id) => {
    dispatch(handleedit(id, Data)); // Pass id and payload to handleedit
    setToggle(true); // Reset toggle to true after submitting the form
  };

  return (
    <div data-testid="note-card">
      <h3>{e.title}</h3>
      <p>{e.description}</p>
      <button onClick={() => handleDelete(e.id)}>Delete</button>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Edit" : "Cancel Edit"}
      </button>
      {toggle ? (
        ""
      ) : (
        <div data-testid="edit-note">
          <form onSubmit={() => handleSubmit(e.id)}>
            <label>Title</label>
            <input
              data-testid="title-input"
              placeholder="Enter Title"
              name="title"
              value={Data.title}
              onChange={handleChange}
            ></input>
            <label>Description</label>
            <input
              placeholder="Enter Description"
              data-testid="description-input"
              name="description"
              value={Data.description}
              onChange={handleChange}
            ></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      )}
    </div>
  );
};
