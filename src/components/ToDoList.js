import React, { Component } from 'react';
import ToDoGroupContainer from '../containers/ToDoGroupContainer';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';

export default class ToDoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer />
            </div>
        );
    }
}


