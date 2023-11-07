import React from 'react'
import { PRODUCT_DATA } from '../actiontype'

const intialValue = {
    ProductData : []
}
function Productreducer(state = intialValue, {type, payload}) {
    switch(type){
        case PRODUCT_DATA:
            return{
            ...state,
            ProductData : payload
        }
    
        default :
        return state;
    }
    
}

export default Productreducer;