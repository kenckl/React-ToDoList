import api from './api'

export const getTodos = () => {
    return api.get('/todos')
}

export const addTodo = (todoItem) => {
    return api.post('/todos', todoItem)
}

export const updateTodo = (todoItem) => {
    return api.put(`/todos/${todoItem.id}`, {...todoItem, done: !todoItem.done})
}

export const deleteTodo = (todoItemId) => {
    return api.delete(`/todos/${todoItemId}`)
}
