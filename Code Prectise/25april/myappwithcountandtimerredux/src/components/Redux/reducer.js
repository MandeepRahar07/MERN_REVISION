import React from 'react'
import { data } from 'react-router-dom'
import { PRT, PRTF, PRTS, RT, RTF, RTS } from './actiontype'
const IntialState = {
    data : [],
    loading : false
}

function reducer(state = IntialState, {type, payload}) {

    switch(type){
        case RT: 
        return{
            ...state,
            loading : true
        }
        case RTF: 
        return{
            ...state,
            loading : false
        }
        case RTS: 
        return{
            ...state,
            loading : false,
            data : payload
        }

        case PRT: 
        return{
            ...state,
            loading : true
        }
        case PRTF: 
        return{
            ...state,
            loading : false
        }
        case PRTS: 
        return{
            ...state,
            loading : false,
            data : {...state.data , payload}
        }

        default: 
        return state;
    }
      
}

export default reducer