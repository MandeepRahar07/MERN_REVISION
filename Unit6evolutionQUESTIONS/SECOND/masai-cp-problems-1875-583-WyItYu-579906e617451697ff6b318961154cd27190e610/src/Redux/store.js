// NOTE: use this store variable to create a store.
import {legacy_createStore} from 'redux';
import { reducer } from "./reducer";
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const store = legacy_createStore(reducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.reduxStore = store;
}
