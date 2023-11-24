// NOTE: DO NOT MODIFY the intial state structure in this file.


import { ADD_DATA, DELETE_DATA, EDIT_DATA, GET_DATA } from "./actionType";

const initialState = {
  notes: [], 
  view:"View Notes"
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type){
    case GET_DATA :
      return{
        ...state,
        notes : payload
      }

    case ADD_DATA:
      return {
        ...state,
        notes: [...state.notes, payload]
      }

      case DELETE_DATA:
  return {
    ...state,
    notes: state.notes.filter(note => note.id !== payload.id)
  };

  case EDIT_DATA:
    return {
      ...state,
      notes: state.notes.map((note) =>
        note.id === payload.id ? { ...note, ...payload } : note
      ),
    };


      default :
      return state;
  }
};

export { reducer };
