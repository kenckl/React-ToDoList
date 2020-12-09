import api from './api'

export const getTodos = () => {
    return api.get('/todos')
}

export const addTodo = (text) => {
    return api.post('/todos', {text})
}

export const updateTodo = (id,done) => {
    return api.put(`/todos/${id}`, {done: !done})
}

export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`)
}