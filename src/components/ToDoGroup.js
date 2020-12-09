import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { List, Card, Divider } from 'antd';

class ToDoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ""}
    }
    
    render() {
        const todos = this.props.todoItems.map((todo) => // 
        <ToDoItemContainer key={todo.id} todo={todo} />);
        return (
            <div>

            <Divider orientation="middle">To do List</Divider>
            <List
            grid={{ gutter: 16, column: 4 }}
            size="small"
            bordered
            dataSource={todos}
            renderItem={item => <List.Item><Card>{item}</Card></List.Item>}
            />
            </div>
        );
    }
}

export default ToDoGroup;