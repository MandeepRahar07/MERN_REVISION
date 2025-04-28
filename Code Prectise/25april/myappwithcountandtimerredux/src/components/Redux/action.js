import { PRT, PRTF, PRTS, RT, RTF, RTS } from "./actiontype"

export const rt = ()=>{
    return{ type : RT}
}

export const rts = (payload)=>{
    return{type : RTS, payload : payload}
}

export const rtf = ()=>{
    return{type : RTF}
}

export const prt = ()=>{
    return{ type : PRT}
}

export const prts = (payload)=>{
    return{type : PRTS, payload : payload}
}

export const prtf = ()=>{
    return{type : PRTF}
}