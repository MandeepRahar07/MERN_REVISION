import { LP_REQ, LP_REQ_FAIL, LP_REQ_SUC } from "./actiontype"


export const LPreq = ()=>{
    return{ type : LP_REQ};
}

export const LPreqSuc = (payload)=>{
    return {type : LP_REQ_SUC, payload : payload}
}

export const LPreqFail = ()=>{
    return{type : LP_REQ_FAIL}
}