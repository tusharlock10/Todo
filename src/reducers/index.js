import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer'

// The todo state will be like this-
// TodoList: {num:3, todos: [{id:1, todo:"Hello"}, {id:2, todo:"Task2"}, {id:3, todo:"Do homework"}]}

export default combineReducers({
    TodoList:TodoReducer
})