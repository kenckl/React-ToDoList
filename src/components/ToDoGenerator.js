import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {addTodo} from '../apis/todos'
import { Input } from 'antd';

const { Search } = Input;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    addToList = (event) => {
        let todoItem = {text: this.state.text, done: false, label: []}
        addTodo(todoItem).then((response) => {
            this.props.addToDo(response.data);
        });
    }

    render() {
        return (
            <div>
                <Search 
                        placeholder="Please enter your todo item"
                        enterButton="Submit"
                        value={this.state.text}
                        // size="large"
                        onSearch={this.addToList}
                        style={{ width: 500, margin: '0 10px' }}
                />
        
            </div>
        );
    }
}

export default ToDoGenerator;