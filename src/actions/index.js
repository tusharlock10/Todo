import {
  ADD_BUTTON_PRESS,
  DELETE_BUTTON_PRESS,
  ON_CHANGE_TEXT,
  LOAD_TODOS,
  SAVE_BUTTON_PRESS
} from "./types";
import { AsyncStorage } from "react-native";


// functions for loading data from the storage

export const AddButtonAction = () => {
  return {
    type: ADD_BUTTON_PRESS
  };
};

export const DeleteButtonAction = id => {
  return {
    type: DELETE_BUTTON_PRESS,
    payload: id
  };
};

export const onChangeTextAction = (id, text) => {
  return {
    type: ON_CHANGE_TEXT,
    payload: { id: id, text: text }
  };
};

export const LoadTodosAction = () => {
  return (dispatch) => {
    getData(dispatch);
  }
};

export const SaveButtonAction = () => {

  return {
    type: SAVE_BUTTON_PRESS
  };
};

const getData = async (dispatch) => {
  // Returns the state saved before

  var got_state;

  AsyncStorage.getItem('state', (error, result) => {
  got_state = JSON.parse(result);

  dispatch({type:LOAD_TODOS, payload: got_state});
  });
  
}