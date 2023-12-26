// NOTE: use this store variable to create a store.
import {legacy_createStore,combineReducers } from 'redux';
import {reducer as AppReducer  } from "./AppReducer/reducer";
import {reducer as AuthReducer } from "./AuthReducer/reducer";
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const rootreducer = combineReducers({
  AppReducer,
  AuthReducer
})
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.reduxStore = store;
}
