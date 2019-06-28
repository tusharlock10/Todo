import {
  ADD_BUTTON_PRESS,
  DELETE_BUTTON_PRESS,
  ON_CHANGE_TEXT,
  LOAD_TODOS,
  SAVE_BUTTON_PRESS
} from "../actions/types";
import { AsyncStorage } from "react-native";
// TodoList: {num:2, todos: [{id:1, lineColor: [1,2,3] ,todo:"Hello"},
// {id:2, lineColor: [10,20,30],todo:"Task2"}]}

const get_color_value = (color, dif) => {
  if (color + dif > 255) {
    color = color * -1;
  }
  color = color + dif;
  return color;
};

const getLineColor = colors => {
  // num%16 (num*15) for  B
  // num%24 (num*10) for G
  // num%12 (num*20) for R
  const R = get_color_value(colors[0], 25);
  const G = get_color_value(colors[1], 20);
  const B = get_color_value(colors[2], 17);
  const new_colors = [R, G, B];
  return new_colors;
};

INITIAL_STATE = {
  num: 0,
  todos: [],
  latest_lineColor: getLineColor([150,150,150]),
  text_changed:false,
  is_loading:true,
};



const saveData = async (state) => {
  // Takes the state of the reducer and saves it as it is

  // getData function is insidethe actions.

  AsyncStorage.setItem('state', JSON.stringify(state));

}


export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ADD_BUTTON_PRESS:
      const new_num = state.num + 1;
      const new_lineColor = getLineColor(state.latest_lineColor);
      const new_todos = [
        ...state.todos,
        { id: new_num, todo: "", lineColor: new_lineColor }
      ];
      const new_state = {
        num: new_num,
        todos: new_todos,
        latest_lineColor: new_lineColor,
        text_changed:false,
        is_loading:false
      };

      saveData(new_state);   // Saving Data on Add_Button_Press

      return new_state


    case DELETE_BUTTON_PRESS:
      const new_todos_2 = [];
      state.todos.forEach(todo_obj => {
        if (todo_obj.id !== action.payload) {
          new_todos_2.push(todo_obj);
        }
      });

      const new_state_2 ={
        num: state.num,
        todos: new_todos_2,
        latest_lineColor: state.latest_lineColor,
        text_changed:false,
        is_loading:false
      };

      saveData(new_state_2);   // Saving Data on Delete_Button_Press

      return new_state_2

    case ON_CHANGE_TEXT:
      const new_todos_3 = [];
      state.todos.forEach(todo_obj => {
        if (todo_obj.id === action.payload.id) {
          todo_obj.todo = action.payload.text;
        }
        new_todos_3.push(todo_obj);
      });
      return {
        num: state.num,
        todos: new_todos_3,
        latest_lineColor: state.latest_lineColor,
        text_changed:true,
        is_loading:false
      };

    case SAVE_BUTTON_PRESS:
      const new_state_3 = {
        num: state.num,
        todos: state.todos,
        latest_lineColor: state.latest_lineColor,
        text_changed:false,
        is_loading:false
      };

      saveData(new_state_3);
      return new_state_3;

    case LOAD_TODOS:
      if (action.payload===null){
        return {
          num: state.num,
          todos: state.todos,
          latest_lineColor: state.latest_lineColor,
          text_changed:false,
          is_loading:false
        };
      }
      return {
        num: action.payload.num,
        todos: action.payload.todos,
        latest_lineColor: action.payload.latest_lineColor,
        text_changed:false,
        is_loading:false
      };


    default:
      return state;
  }
};
