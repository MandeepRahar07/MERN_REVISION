import { INCREMENT, DECREMENT, GET_REQ, GET_SUC, GET_FAIL, POST_REQ, POST_SUC, POST_FAIL, DEL_REQ, DEL_SUC, DEL_FAIL, EDIT_REQ, EDIT_SUC, EDIT_FAIL } from "./actionstype"; // Update to use `DECREMENT`

export const inc = () => {
  return {
    type: INCREMENT
  };
};

export const dec = () => {
  return {
    type: DECREMENT
  };
};

export const fail =()=>{
  return {
    type : GET_REQ
  }
}

export const success =(payload)=>{
  return {
    type : GET_SUC ,
    payload : payload
  }
}

export const err =()=>{
  return {
    type : GET_FAIL
  }
}

export const postReq =()=>{
  return {
    type : POST_REQ
  }
}

export const postSucc =(payload)=>{
  return {
    type : POST_SUC,
    payload : payload
  }
}

export const postFail =()=>{
  return {
      type : POST_FAIL
  }
}


export const delReq =()=>{
  return {
    type : DEL_REQ
  }
}

export const delSucc =(id)=>{
  return {
    type : DEL_SUC,
    payload : id
  }
}

export const delFail =()=>{
  return {
      type : DEL_FAIL
  }
}

export const editReq =()=>{
  return {
    type : EDIT_REQ
  }
}

export const editSucc =(payload)=>{
  return {
    type : EDIT_SUC,
    payload : payload
  }
}

export const editFail =()=>{
  return {
      type : EDIT_FAIL
  }
}