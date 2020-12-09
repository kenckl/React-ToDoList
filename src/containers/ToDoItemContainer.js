import ToDoItem from "../components/ToDoItem"
import {connect} from "react-redux"
import {updateToDo, deleteToDo} from "../actions"

const mapDispatchToProps = dispatch => ({
    updateToDo : (id) => {dispatch(updateToDo(id))},
    deleteToDo : (id) => {dispatch(deleteToDo(id))}
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem)

export default ToDoItemContainer;