import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO, UPDATE_STATUS } from './actionTypes'

const ToDos = (state = [], action) => {
    if (action.type === ADD_TODO) {
        return [action.payload,...state];
    }

    if (action.type === REMOVE_TODO) {
        return state.filter(todo => todo.id !== action.payload);
    }

    if (action.type === UPDATE_STATUS) {
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
    return state;

}

export default combineReducers(
    {
        ToDos
    }
)