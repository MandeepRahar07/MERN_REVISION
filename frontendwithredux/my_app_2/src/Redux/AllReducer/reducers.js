import React from 'react'
import { GET_REQ, POST_REQ } from '../actiontype';


const intialvalue = {
    data : []
}

function reducers(state = intialvalue, {type, payload}) {

    switch (type) {
        case GET_REQ:
            return{
                ...state,
                data : payload
            }
         case POST_REQ:
            return{
                    ...state,
                    data : [...state.productdata, payload ]
                } 
          default :
          return state;
}
}

export default reducers