import { combineReducers, applyMiddleware, createStore } from 'redux';
import loginreducer from './reducer/loginreducer';
import thunk from 'redux-thunk';
import Productreducer from './reducer/productreducer';

const rootreducer = combineReducers({
    login: loginreducer,
    product: Productreducer,
});

export const store = createStore(rootreducer, applyMiddleware(thunk));
