import {ADD_TODO, REMOVE_TODO, UPDATE_STATUS, INIT_TODO} from './actionTypes';

export const addToDo = toDoItem => {
    return {
        type: ADD_TODO, 
        payload: toDoItem
    };
}

export const updateToDo = toDoItemId => {
    return {
        type: UPDATE_STATUS, 
        payload: toDoItemId
    };
}

export const deleteToDo = toDoItemId => {
    return {
        type: REMOVE_TODO, 
        payload: toDoItemId
    };
}

export const initToDo = todoList => {
    return {
        type: INIT_TODO, 
        payload: todoList
    };
}


