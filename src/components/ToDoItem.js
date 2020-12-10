import React, { Component } from 'react';
import {updateTodo, deleteTodo} from '../apis/todos'
import ContextMenu from 'react-context-menu';
import { Button, Tag } from 'antd';
import AddLabel from './AddLabel';


class ToDoItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            done: this.props.todo.done,
            label: ''
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

    onChange = (event) => {
        this.setState({ label: event.target.value });
    }

    onClickLabel = (event) => {
        updateTodo(this.props.todo.id, { ...this.props.todo, labels: this.props.todo.labels.filter(label=>label!==event.target.innerText) }).then(response => {
            this.props.updateLabel(response.data);
        })
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
                    {/* <p flex="auto" style={{textAlign:'right'}}>{this.props.todo.labels.map((label)=><Tag key={label} onClick={this.onClickLabel}>{label}</Tag>)}</p> */}
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