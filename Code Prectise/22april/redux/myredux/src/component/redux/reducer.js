
import { GET_FAIL, GET_REQ, GET_SUC, GET_REQ_DL, GET_SUC_DL, GET_FAIL_DL, POST_REQ, POST_REQ_SUC, POST_REQ_FAIL } from './actiontype';
const Intailsate = {
    data: [],
    loading: false
}

function reducer(state = Intailsate, { type, payload }) {
    switch (type) {
        case GET_REQ:
            return {
                ...state,
                loading: true
            }

        case GET_FAIL:
            return {
                ...state,

                loading: false,
            }

        case GET_SUC:
            return {
                ...state,
                data: payload,
                loading: false
            }

        case GET_FAIL_DL:
            return {
                ...state,
                laoding: false
            }

        case GET_SUC_DL:
            return {
                ...state,
                data: state.data.filter(item => item.id !== state.id)
            }

        case GET_REQ_DL:
            return {
                ...state,
                loading: true
            }

         case POST_REQ : 
         return{
            ...state,
            loading : true
         }
         
         case POST_REQ_SUC : 
         return{
            ...state,
            loading : false,
            data : [...state.data, payload]
         }

         case POST_REQ_FAIL:
            return{
                ...state,
                loading : false
            }

        default:
            return state;
    }

}

export default reducer