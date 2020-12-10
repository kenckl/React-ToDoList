import ToDoItem from "../components/ToDoItem"
import {connect} from "react-redux"
import {updateToDo, deleteToDo, updateLabel} from "../actions"

const mapDispatchToProps = dispatch => ({
    updateToDo : (id) => {dispatch(updateToDo(id))},
    deleteToDo : (id) => {dispatch(deleteToDo(id))},
    updateLabel: (todo) => {dispach(updateLabel(todo))}
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem)

export default ToDoItemContainer;