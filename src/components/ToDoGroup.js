import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'

export default class ToDoGroup extends Component {

    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                return <ToDoItemContainer id={toDoItem.id} text={toDoItem.text} done={toDoItem.done} />
            })
        );
    }
}
