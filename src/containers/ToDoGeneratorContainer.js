import { connect } from 'react-redux';
import ToDoGenerator from '../components/ToDoGenerator';
import { addToDoItem } from '../actions';


const mapDispatchToProps = dispatch => ({
    addToDo: (toDoItem) => dispatch(addToDoItem(toDoItem))
})

const ToDoGeneratorContainer = connect(null, mapDispatchToProps)(ToDoGenerator);

export default ToDoGeneratorContainer