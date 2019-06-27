import {
  ADD_BUTTON_PRESS,
  DELETE_BUTTON_PRESS,
  ON_CHANGE_TEXT,
  LOAD_TODOS
} from "./types";

// functions for loading data from the storage
const getData = async () => {
  // Helper function to get data from the storage
    const state = await AsyncStorage.getItem("state")
    .then(() => {console.log('in getData, got this data : ',state)})
    .catch((error) => {console.log('Got this error:',error)})
};



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
  return {
    type: LOAD_TODOS
  };
};
