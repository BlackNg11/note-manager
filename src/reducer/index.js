import {noteData} from '../firebase';
import { combineReducers } from 'redux';



const allReducer = (state = {},action) => {
  switch (action.type) {
    case 'ADD_DATA':
        noteData.push(action.payload)
        return {state, ...action.payload}
      break;
      default:
          return state;
  }
}




export default combineReducers({
  dataNote: allReducer
});
