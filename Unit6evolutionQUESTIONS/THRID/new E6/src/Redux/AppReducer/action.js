// actions.js
import axios from "axios";
import {
  GET_WATCHES_DATA_FAILURE,
  GET_WATCHES_DATA_REQUEST,
  GET_WATCHES_DATA_SUCCESS,
} from "./actionType";

const getreq = () => ({
  type: GET_WATCHES_DATA_REQUEST,
});

const getsuss = (payload) => ({
  type: GET_WATCHES_DATA_SUCCESS,
  payload: payload,
});

const geterror = () => ({
  type: GET_WATCHES_DATA_FAILURE,
});

export const fetchWatches = (category) => async (dispatch) => {
    console.log(category);
  try {
    dispatch(getreq());
    
    // Update the API URL based on the presence of a category
    const apiUrl = category.length != 0 ? `http://localhost:8080/watches?category=${category}` : `http://localhost:8080/watches`;
    const res = await axios.get(apiUrl);

    // Assuming your response data structure has a property called "watches"
    dispatch(getsuss(res.data));
  } catch (err) {
    console.log(err);
    dispatch(geterror());
  }
};
