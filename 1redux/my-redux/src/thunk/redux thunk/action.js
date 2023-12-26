import { DEL_FAIL, DEL_REQ, DEL_SUC, EDIT_FAIL, EDIT_REQ, EDIT_SUCC, GET_FAIL, GET_REQ, GET_SUC, POST_FAIL, POST_REQ, POST_SUC } from "./actionTyps";
import axios from "axios";

const getreq = ()=>{
    return{
        type : GET_REQ
    }
}

const getsuc = (payload)=>{
    return {
        type : GET_SUC,
        payload : payload
    }
}

const getfail = ()=>{
    return {
        type : GET_FAIL
    }
}

export const fetchdata =()=>async(dispatch)=>{
    try{
          dispatch(getreq());
        const res = await axios.get(`http://localhost:3000/mandy`);
        dispatch(getsuc(res.data));
         
    }catch(err){
        console.log(err);
        dispatch(getfail());
    }
}



//...............................................................

const postreq = ()=>{
    return{
        type : POST_REQ
    }
}

const postsuc = (payload)=>{
    return {
        type : POST_SUC,
        payload : payload
    }
}

const postfail = ()=>{
    return {
        type : POST_FAIL
    }
}


export const postbythunk = (payload) => async (dispatch) => {
    try {
      dispatch(postreq());
      const res = await axios.post(`http://localhost:3000/mandy`, payload);
      dispatch(postsuc(res.data));
    } catch (err) {
      console.log(err);
      dispatch(postfail());
    }
  };

  //...............................................................

const delreq = ()=>{
    return{
        type : DEL_REQ 
    }
}

const delsuc = (payload)=>{
    return {
        type : DEL_SUC,
        payload : payload
    }
}

const delfail = ()=>{
    return {
        type : DEL_FAIL
    }
}


export const deletebythunk = (id) => async (dispatch) => {
    console.log(id);
    try {
      dispatch(delreq());
      const res = await axios.delete(`http://localhost:3000/mandy/${id}`);
      dispatch(delsuc(res.data));
    } catch (err) {
      console.log(err);
      dispatch(delfail());
    }
  };


  //...............................................................

  const editreq = ()=>{
    return{
        type : EDIT_REQ
    }
}

const editsuc = (payload)=>{
    return {
        type : EDIT_SUCC,
        payload : payload
    }
}

const editfail = ()=>{
    return {
        type : EDIT_FAIL
       }
}


export const editbythunk = (id , payload) => async (dispatch) => {
    console.log(id);
    try {
      dispatch(editreq());
      const res = await axios.patch(`http://localhost:3000/mandy/${id}` , payload);
      dispatch(editsuc(res.data));
    } catch (err) {
      console.log(err);
      dispatch(editfail());
    }
  };

