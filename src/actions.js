import {ADD_TODO, REMOVE_TODO, UPDATE_STATUS, INIT_TODO} from './actionTypes';

export const addToDo = todo => {
    return {
        type: ADD_TODO, 
        payload: todo
    };
}

export const updateToDo = id => {
    return {
        type: UPDATE_STATUS, 
        payload: id
    };
}

export const deleteToDo = id => {
    return {
        type: REMOVE_TODO, 
        payload: id
    };
}

export const initToDo = todos => {
    return {
        type: INIT_TODO, 
        payload: todos
    };
}

