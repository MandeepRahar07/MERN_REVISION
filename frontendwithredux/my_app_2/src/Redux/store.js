
import {applyMiddleware, combineReducers, createStore } from 'redux';

import reducers from './AllReducer/reducers';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    ProductData : reducers
}) 

export const store = createStore(RootReducer, applyMiddleware(thunk));