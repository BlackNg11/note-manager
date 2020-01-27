import { noteData } from "../firebase";
import { combineReducers } from "redux";

const noteInit = {
  isEdit: false,
  editItem: {}
};

const allReducer = (state = noteInit, action) => {
  switch (action.type) {
    case "ADD_DATA":
      noteData.push(action.payload);
      return state;
      break;

    case "CHANGE_EDIT_STATUS":
      return { ...state, isEdit: !state.isEdit };
      break;

    case "GET_EDIT_DATA":
      return { ...state, editItem: action.editObject };
      break;

    default:
      return state;
  }
};

export default combineReducers({
  dataNote: allReducer
});
