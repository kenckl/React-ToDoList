import ToDoGroup from "../components/ToDoGroup"
import {connect} from "react-redux"
import {initToDo} from '../actions'

const mapStateToProps = state => ({
    todoItems: state.todoList,
})

const mapDispatchToProps = dispatch => ({
    initToDo: (todoItems) => dispatch(initToDo(todoItems))
})

const ToDoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoGroup)

export default ToDoGroupContainer;