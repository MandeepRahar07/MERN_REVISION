import { GET_REQ,GET_REQ_SUC,GET_REQ_FAIL } from "./actiontype";

export const getrequest = ()=>{
   return{ type : GET_REQ}
}

export const getreqsuccess = (payload)=>{
    return{ type : GET_REQ_SUC, payload : payload}
}

export const getfail = ()=> {
    return{ type : GET_REQ_FAIL}
}