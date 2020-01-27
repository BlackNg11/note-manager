import { noteData } from "../firebase";
import { combineReducers } from "redux";

const noteInit = {
  isEdit: false,
  isAdd: false,
  editItem: {},
  alertShow: false
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

    case "CHANGE_ADD_STATUS":
      return { ...state, isAdd: !state.isAdd };
      break;

    case "ALERT_ON":
      return { ...state, alertShow: true };
      break;

    case "ALERT_OFF":
      return { ...state, alertShow: false };
      break;

    case "GET_EDIT_DATA":
      return { ...state, editItem: action.editObject };
      break;

    case "EDIT_DATA":
      //Update on firebase
      noteData.child(action.payload.id).update({
        content: action.payload.noteContent,
        title: action.payload.noteTitle
      });
      return { ...state, editItem: {} };
      break;

    case "DELETE_DATA":
      //Update on firebase
      noteData.child(action.payload.key).remove();
      return state;
      break;

    default:
      return state;
  }
};

export default combineReducers({
  dataNote: allReducer
});
