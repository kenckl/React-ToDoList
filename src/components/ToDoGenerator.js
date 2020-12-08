import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

export default class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    createNewToDo = () => {
        let newToDo = { id: uuidv4(), text: this.state.text, done: false }
        this.props.addToDo(newToDo);
    }

    updateText = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div>
                <input id="text" type="text" placeholder="Input a new todo here..." onChange={this.updateText} />
                <input type="button" value="add" onClick={this.createNewToDo} />
            </div>
        );
    }
}