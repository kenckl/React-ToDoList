import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {addTodo} from '../apis/todos'
import { Input } from 'antd';

const { Search } = Input;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    addToList = (todoItem) => {
        addTodo(todoItem).then(response => {
            this.props.addToDo(response.data);
            this.setState({
                input:''
            });
        });
    }

    render() {
        return (
            <div>
                <Search 
                        placeholder="Please enter your todo item"
                        enterButton="Submit"
                        // size="large"
                        onSearch={this.addToList}
                        style={{ width: 500, margin: '0 10px' }}
                        />
            </div>
        );
    }
}

export default ToDoGenerator;