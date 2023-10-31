import React from 'react'
import { SIGN_UP } from '../actiontype'
const Intialvalue = {
    userdata : []
}
function loginreducer(state = Intialvalue ,{type, payload}) {

    switch(type){
        case SIGN_UP : 
        return{
            userdata : payload
        }

        default :
         return state
    }
  
}

export default loginreducer