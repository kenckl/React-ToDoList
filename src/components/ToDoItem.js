import React, { Component } from 'react';
import {updateTodo, deleteTodo} from '../apis/todos'
import ContextMenu from 'react-context-menu';
import { Button } from 'antd';
import AddLabel from './AddLabel';


class ToDoItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            done: this.props.todo.done,
            showAddLabel: false
        }
    }
    updateStatus = () => {
        updateTodo(this.props.todo).then(response => {
            this.props.updateToDo(response.data.id);
        });
        
    };

    removeItem = () => {
        deleteTodo(this.props.todo.id).then(() => {
            this.props.deleteToDo(this.props.todo.id);
        })
    };

    addLabel = () => {
        this.setState({ showAddLabel: true });
    }

    render() {
        console.log(this.props.todo.id);
        const text = this.props.todo.text;
        const todoId = this.props.todo.id;
        const showAddLabel = this.state.showAddLabel;
        let todoClass = this.props.todo.done ? "crossed-line" : "";
        
        return (
            <div>
                {showAddLabel ? <AddLabel />:null}
                <fieldset>
                    <Button type="default" shape='circle'size={'small'} onClick={this.removeItem}>x</Button>
                    <label className={`${todoClass}`} onClick={this.updateStatus}> {text} </label>
                </fieldset>
                <ContextMenu
                    contextId={todoId}
                    items={[
                        {
                            label: 'Add Label',
                            onClick: this.addLabel
                        }
                    ]}/>
            </div>
        );
    }
}

export default ToDoItem;