import { combineReducers } from "redux"
import {ADD_TODO, REMOVE_TODO, UPDATE_STATUS, INIT_TODO} from './actionTypes';

const todoList = (state = [], action) => {
    if (action.type === ADD_TODO){
        return [...state,action.payload];
    }
    if (action.type === UPDATE_STATUS){
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
    if (action.type === REMOVE_TODO){
        return state.filter(todo => todo.id !== action.payload);
    }
    if (action.type === INIT_TODO){
        return action.payload;
    }

    return state;
}

export default combineReducers({
    todoList
})