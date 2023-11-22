// NOTE: use this store variable to create a store.
// remove the assigned object and create the store and assign to the store.

import { applyMiddleware, combineReducers, createStore } from "redux";
import  {reducer}  from "./AppReducer/reducer";
import thunk from 'redux-thunk';

const rootreducer = combineReducers({
 Notes : reducer,
})

const store = createStore(rootreducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
