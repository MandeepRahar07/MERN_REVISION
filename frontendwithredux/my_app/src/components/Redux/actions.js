import { GET_PROD, TOTAL_COUNT } from "./actiontype";
import { POST_PROD } from "./actiontype";
import { EDIT_PROD } from "./actiontype";
import { DELETE_PROD } from "./actiontype";
import { GET_BY_ID } from "./actiontype";
import axios from 'axios';

export const fetchProductData = (search, sorting, filter, page) => async (dispatch) => {
  try {
    const searching = search ? `&name_like=${search}` : "";
    const sort = sorting ? `&_sort=price&_order=${sorting}` : "";
    const filterBy = filter ? `&category=${filter}` : "";
    const res = await axios.get(
      `http://localhost:3000/mandeep?${searching}${sort}${filterBy}&_page=${page}&_limit=4`
    );
    dispatch({
      type: GET_PROD,
      payload: res.data,
    });
const count = res.headers.get("X-Total-Count");         
            dispatch({
              type : TOTAL_COUNT,
              payload : count
            }) 
  } catch (err) {
    console.log(err);
  }
};




export const fetchProductDatabyid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/mandeep/${id}`);
    dispatch({
      type: GET_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};



export const PostProductdata = (payload)=> async(dispatch)=>{
  try{
      const res = await axios.post(`http://localhost:3000/mandeep`,payload);
      dispatch({
          type : POST_PROD,
          payload : res.data
        })
    }catch(err){
        console.log(err);
    }
}



export const PutProductdata = (id, payload) => async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3000/mandeep/${id}`, payload);
      dispatch({
        type: EDIT_PROD,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
 
  export const DeleteProduct = (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3000/mandeep/${id}`);
      dispatch({
        type: DELETE_PROD,
        payload: { id }, // Include the ID of the deleted product in the payload
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  