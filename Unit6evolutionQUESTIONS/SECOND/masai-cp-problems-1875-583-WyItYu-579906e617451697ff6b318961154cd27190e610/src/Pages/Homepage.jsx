import React, { useEffect } from "react";
import { fetchreq } from "../Redux/action";
import { useSelector,useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
const Homepage = () => {
     const Dispatch = useDispatch();
    const {tasks} = useSelector((state)=> state);
      console.log(tasks);
      
    useEffect(()=>{
  Dispatch(fetchreq());
    },[Dispatch])

  return (
    <div>
      {/* Map through the task lists here using the TaskItems component */}
    </div>
  );
};

export default Homepage;
