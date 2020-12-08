import React, { Component } from 'react';

export default class ToDoItem extends Component {
    updateStatus = () => {
        this.props.updateStatus(this.props.id);
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.id);
    }
    
    render() {
        return (
            <div>
                <input style={{
                    textDecoration: this.props.done ? 'line-through' : 'none',
                }}  type="button" value={this.props.text} id={this.props.id} onClick={this.updateStatus} />
                <input type="button"  value="x" onClick={this.deleteItem} />
            </div>
        );
    }
}

