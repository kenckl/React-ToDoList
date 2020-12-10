import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {addTodo} from '../apis/todos'
import { Input } from 'antd';
import { Button} from 'antd';

const { Search } = Input;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    addToList = (value) => {
    
        this.setState(
            () => {
              return { text: value };
            },
            () => {
              console.log(this.state.text);
              let todoItem = { text: this.state.text, done: false, label: [] };
              addTodo(todoItem).then((response) => {
                this.props.addToDo(response.data);
              });
            })
      
        
        }

    onChange = (event) => {
        this.setState({text: event.target.value})
    }

    // onClick = () => {
    //     addTodo(this.state.text).then(response => {
    //         this.props.addToList(response.data);
    //     })
    // }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onChange} />
                <Button type="primary" onClick={this.addToList}>Submit</Button>
                {/* <Search 
                        placeholder="Please enter your todo item"
                        enterButton="Submit"
                        //value={this.state.text}
                        // size="large"
                        onSearch={this.addToList}
                        style={{ width: 500, margin: '0 10px' }}
                /> */}
            </div>
        );
    }
}

export default ToDoGenerator;