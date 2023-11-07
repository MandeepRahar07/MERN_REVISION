import React from 'react'
import { DELETE_PROD, POST_PROD, SIGN_UP ,GET_BY_ID, TOTAL_COUNT} from '../actiontype';
import { GET_PROD } from '../actiontype';
const Intialvalue = {
    productdetail : {},
    productdata : [],
    totalcount : 0
}
function Productreducer(state = Intialvalue ,{type, payload}) {

    switch(type){
        case SIGN_UP : 
        return{
            userdata : payload
        }
        case GET_PROD:
            return{
                ...state,
                productdata : payload
            }
         case POST_PROD:
            return {
                ...state,
                productdata : [...state.productdata, payload ]
            } 
            case DELETE_PROD:
                return {
                  ...state,
                  productdata: state.productdata.filter((product) => product.id !== payload.id),
                };
                
                case GET_BY_ID:
                    return {
                      ...state,
                      productdetail: payload,
                    };
                case TOTAL_COUNT:
                    return{
                        ...state,
                      totalcount : payload
                    }
                    
        default :
         return state
    }
  
}

export default Productreducer