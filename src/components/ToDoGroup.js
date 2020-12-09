import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'

export default class ToDoGroup extends Component {
    // pass toDoItem object instead of seperate attribute
    // pass the key={toDoItem.id} as well
    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                <ToDoItemContainer id={toDoItem.id} text={toDoItem.text} done={toDoItem.done} />
            })
        );
    }
}
