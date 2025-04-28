import { GET_FAIL, GET_REQ, GET_SUC,GET_REQ_DL, GET_SUC_DL, GET_FAIL_DL, POST_REQ, POST_REQ_SUC, POST_REQ_FAIL } from "./actiontype";


export const Getreq = () => {
    return { type: GET_REQ }
}

export const Getsuc = (payload) => {
    return { type: GET_SUC, payload: payload }
}

export const Getfail = () => {
    return { type: GET_FAIL }
}

export const GetDl = ()=>{
    return{ type : GET_REQ_DL}
}

export const GetDlSuc = (id)=>{
    return {type : GET_SUC_DL, payload : id}
}
 
export const GetDlFail = ()=>{
    return{ type : GET_FAIL_DL }
}


export const PostReq = ()=>{
    return{
        type : POST_REQ
    }
}

export const PostReqSuccess = (payload)=>{
    return{type : POST_REQ_SUC, payload : payload}
}

export const PostReqFail = ()=>{
    return {type : POST_REQ_FAIL};
}