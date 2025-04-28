import { RT,RTS,RTF } from "./actiontype"

export const rt = ()=>{
    return { type : RT}
}

export const rts = (payload)=>{
    return { type : RTS, payload : payload}
}

export const rtf = ()=>{
    return { type : RTF}
}