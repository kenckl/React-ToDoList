import ToDoGenerator from "../components/ToDoGenerator"
import {addToDo} from "../actions"
import {connect} from "react-redux"

const mapDispatchToProps = dispatch => ({
    addToDo: (todo) => dispatch(addToDo(todo))
})

const ToDoGeneratorContainer = connect(null , mapDispatchToProps)(ToDoGenerator)

export default ToDoGeneratorContainer;