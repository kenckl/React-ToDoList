import { ADD_TODO, UPDATE_STATUS, REMOVE_TODO } from './actionTypes'
export const addToDoItem = (toDoItem) => {
    return {
        type: ADD_TODO,
        payload: toDoItem
    }
}

export const deleteItem = (id) => {
    return { 
        type: REMOVE_TODO, 
        payload: id 
    }
}

export const updateItemStatus = (id) => {
    return { 
        type: UPDATE_STATUS, 
        payload: id 
    }
}

