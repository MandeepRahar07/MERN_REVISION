
import { PRT, PRTF, PRTS, RT, RTF, RTS } from './actiontype'

const Intailstate = {
    data  : [],
    loading : false
}
function reducer( state = Intailstate, {type, payload}) {
    switch(type){
        case RT:
            return{
                ...state,
                loading : true
            }
        case RTS: 
        return{
            ...state, 
            loading : false,
            data : payload
        }    
        case RTF : 
        return {
            ...state, 
            loading : false
        }

        //post request
        case PRT:
            return{
                ...state,
                loading : true
            }
        case PRTS: 
        return{
            ...state, 
            loading : false,
       
        }    
        case PRTF : 
        return {
            ...state, 
            loading : false
        }
        default :
        return state;
    }
  
}

export default reducer