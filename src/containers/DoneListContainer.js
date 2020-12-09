import DoneList from "../components/DoneList"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    todoItems: state.todoList.filter(todo => todo.done),
})

const DoneListContainer = connect(mapStateToProps)(DoneList)

export default DoneListContainer;