import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { getTodos } from '../apis/todos'
import { List, Card, Divider } from 'antd';
import { v4 as uuidv4 } from 'uuid'

class ToDoGroup extends Component {
    
    // componentDidMount() {
    //     getTodos().then((response) => {
    //         console.log(response.data);
    //         this.props.initToDo(response.data)
    //     }
            
    //     )
    // }
    
    render() {
        const todos = this.props.todoItems.map((todo) => 
        <ToDoItemContainer key={todo.id} todo={todo} />);
        return (
            <div>
            <Divider orientation="middle">To do List</Divider>
            <List
            grid={{ gutter: 16, column: 4 }}
            size="small"
            bordered
            dataSource={this.props.todoItems}
            renderItem={item => <List.Item><Card>  <ToDoItemContainer key={item.id} todo={item} /></Card></List.Item>}
            />
            </div>
        );
    }
}

export default ToDoGroup;