
import { DEL_FAIL, DEL_REQ, DEL_SUC, EDIT_FAIL, EDIT_REQ, EDIT_SUCC, GET_FAIL, GET_REQ, GET_SUC, POST_FAIL, POST_REQ, POST_SUC } from './actionTyps'

const intialstate = {
    data : [],
    isLoading : false,
    isError : false

}
function Reducer(state= intialstate, {type, payload}) {
    switch(type){
        case GET_REQ:
        return{
            ...state,
            isLoading : true,
            isError : false
        }

        case GET_SUC:
            return {
                ...state,
                data : payload,
                isLoading : false,
                isError : false
            }
        
        case GET_FAIL:
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        case POST_REQ : 
        return {
            ...state,
            isLoading : true,
            isError : false
        }


        case POST_SUC:
            return {
              ...state,
              data: [...state.data, payload],
              isLoading: false,
              isError: false
            };
          

        case POST_FAIL :
            return {
                ...state,
                isLoading : false,
                isError : true
            }

            case DEL_REQ : 
            return {
                ...state,
                isLoading : true,
                isError : false
            }
    
    
            case DEL_SUC:
                return {
                  ...state,
                  data: state.data.filter(item=>item.id !==payload),
                  isLoading: false,
                  isError: false
                };
              
    
            case DEL_FAIL :
                return {
                    ...state,
                    isLoading : false,
                    isError : true
                }

            case EDIT_REQ: 
            return{
                ...state,
                isLoading : true,
                isError: false
            }

            case EDIT_SUCC : 
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : state.data.map(item=>(item.id === payload.id)? payload : item)

            }

            case EDIT_FAIL : 
            return{
                ...state, 
                isError : true, 
                isLoading : false
            }

        default:
            return state;
    }
  
}

export default Reducer