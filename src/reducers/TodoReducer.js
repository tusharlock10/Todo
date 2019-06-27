import {
  ADD_BUTTON_PRESS,
  DELETE_BUTTON_PRESS,
  ON_CHANGE_TEXT,
  LOAD_TODOS
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
  num: 2,
  todos: [
    { id: 1, lineColor: [10, 20, 30], todo: "Task1" },
    { id: 2, lineColor: [10, 20, 30], todo: "Task2" }
  ],
  latest_lineColor: getLineColor([10, 20, 30])
};

const saveData = async (state) => {
    try {
        console.log("setting state")
        await AsyncStorage.setItem('state', 'hello');
        console.log("setted state")
      } catch (error) {
        console.log('Got this error:',error)
      }

};

const getData = async () => {
    // Helper function to get data from the storage
      const state = await AsyncStorage.getItem("state")
      console.log('in getData, got this data : ',state)
  };

const exp= async ()=>{
    console.log("Got value of state: ", await AsyncStorage.getItem('state'))

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

      return {
        num: new_num,
        todos: new_todos,
        latest_lineColor: new_lineColor
      };

    case DELETE_BUTTON_PRESS:
      const new_todos_2 = [];
      state.todos.forEach(todo_obj => {
        if (todo_obj.id !== action.payload) {
          new_todos_2.push(todo_obj);
        }
      });
      return {
        num: state.num,
        todos: new_todos_2,
        latest_lineColor: state.latest_lineColor
      };

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
        latest_lineColor: state.latest_lineColor
      };

    case LOAD_TODOS:
        console.log("In todos")
        getData();
        return state;

    default:
      return state;
  }
};
