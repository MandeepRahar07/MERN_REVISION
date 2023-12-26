// authActions.js
import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionTypes";

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const res = await axios.post("https://reqres.in/api/login", credentials);
    dispatch(loginSuccess(res.data.token));
    console.log(res.data.token);
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};
