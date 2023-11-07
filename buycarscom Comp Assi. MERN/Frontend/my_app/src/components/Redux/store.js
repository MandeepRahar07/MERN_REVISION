import {combineReducers,applyMiddleware,createStore} from 'redux'
import Userreducer from "./Reducers/userreducer";
import thunk from 'redux-thunk'
const RootReducer = combineReducers({
    User: Userreducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk))
    
