import axios from "axios"
import { GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "./actionTypes"

//get tasks
const getreq = ()=>{
  return{
    type : GET_TASKS_REQUEST
  }
}

const getsuss = (payload)=>{
    return {
        type : GET_TASKS_SUCCESS,
        payload : payload
    }
}

const geterror = ()=>{
    return {
        type : GET_TASKS_FAILURE
    }
}

export const fetchreq = () => async (dispatch) => {
    try {
      dispatch(getreq());
      const res = await axios.get(`http://localhost:8080/tasks`); // Use await here
      dispatch(getsuss(res.data));
    } catch (err) {
      console.log(err);
      dispatch(geterror());
    }
  };
//add task



//update task

//delete task
