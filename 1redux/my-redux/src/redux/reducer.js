import { INCREMENT ,DECREMENT, GET_REQ, GET_SUC, GET_FAIL, POST_REQ, POST_SUC, POST_FAIL, DEL_REQ, DEL_SUC, DEL_FAIL, EDIT_FAIL, EDIT_REQ, EDIT_SUC} from "./actionstype";


const initialState = {
  count: 0,
  data: [],
  loading : false,
  error : false
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

      case GET_REQ: 
      return {
        ...state,
        loading : true,
        error : false
      }

      case GET_SUC : 
      return {
        ...state,
        loading : false,
        error : false,
        data : payload
      }

      case GET_FAIL : 
      return {
        ...state,
        error : true,
        loading : false
      }

      case POST_REQ : 
      return {
        ...state,
        error : false,
        loading : true
      }

      case POST_SUC : 
      return {
        ...state,
        error : false,
        loading : false,
        data :[...state , payload] 
      }

      case POST_FAIL : 
      return{
        ...state,
        error : true,
        loading : false
      }
      case DEL_REQ : 
      return {
        ...state,
        error : false,
        loading : true
      }

      case DEL_SUC : 
      return {
        ...state,
        error : false,
        loading : false,
        data: state.data.filter(item => item.id !== state.id)
      }

      case DEL_FAIL : 
      return{
        ...state,
        error : true,
        loading : false
      }

      case EDIT_FAIL : 
      return{
        ...state,
        error : true,
        loading : false
      }

      case EDIT_REQ : 
      return{
        ...state,
        error : true,
        loading : false
      }

      case EDIT_SUC:
        return {
          ...state,
          error: false,
          loading: false,
          data: state.data.map(item => (item.id === payload.id ? payload : item))
        };
      
      
    default:
      return state;
  }
}

export default Reducer;
