import React, { Component } from 'react';
import {updateTodo, deleteTodo} from '../apis/todos'
import { Button } from 'antd';

class ToDoItem extends Component {

    updateStatus = () => {
        updateTodo(this.props.todo.id,this.props.todo.done).then(response => {
            this.props.updateToDo(response.data.id);
        });
        
    };

    removeItem = () => {
        deleteTodo(this.props.todo.id).then(() => {
            this.props.deleteToDo(this.props.todo.id);
        })
    };

    render() {
        const text = this.props.todo.text;
        let todoClass = this.props.todo.done ? "crossed-line" : "";
        
        return (
                <fieldset>
                    <Button type="default" shape='circle'size={'small'} onClick={this.removeItem}>x</Button>
                    <label className={`${todoClass}`} onClick={this.updateStatus}> {text} </label>
                  
                </fieldset>

        );
    }
}

export default ToDoItem;