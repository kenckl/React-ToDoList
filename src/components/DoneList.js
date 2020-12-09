import React, { Component } from 'react';
import { List, Divider } from 'antd';

class DoneList extends Component {

    render() {
        const todos = this.props.todoItems.map((todo) => 
        <li key={todo.id}> {todo.text} </li>);
        return (
            <div>
            <Divider orientation="middle">Done List</Divider>
            <List
            // size="small"
            bordered
            dataSource={todos}
            renderItem={item => <List.Item><p>Done:</p>{item}</List.Item>}
            style={{ width: 500, margin: '0 10px' }}
            />

            </div>

        );
    }
}

export default DoneList;