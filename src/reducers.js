import { combineReducers } from "redux"
import {ADD_TODO, REMOVE_TODO, UPDATE_STATUS, INIT_TODO, UPDATE_LABEL} from './actionTypes';

const todoList = (state = [], action) => {
    if (action.type === ADD_TODO){
        return [...state,action.payload];
    }
    if (action.type === UPDATE_STATUS){
        //return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
        return state.map(todo => todo.id === action.todo.id ? action.todo : todo);
    }
    if (action.type === REMOVE_TODO){
        return state.filter(todo => todo.id !== action.payload);
    }
    if (action.type === UPDATE_LABEL){
        return state.map(todo => todo.id === action.todo.id ? { ...todo, labels: action.todo.labels } : todo);
    }
    if (action.type === INIT_TODO){
        return action.payload;
    }
    
    return state;
}

export default combineReducers({
    todoList
})