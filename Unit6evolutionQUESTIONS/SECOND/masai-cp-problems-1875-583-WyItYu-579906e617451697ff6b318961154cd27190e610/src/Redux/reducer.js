import { GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case GET_TASKS_REQUEST:
      return{
        ...state,
       isLoading : true
      }

    case GET_TASKS_SUCCESS:
      return{
        ...state,
        tasks : payload,
        isLoading : false
      }

    case GET_TASKS_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true
     }
      
     //add Task

    
 
    
    default:
      return state;
  }
  //write the logic to handle, get task, update task, add task, and delete task

};

export { reducer };
