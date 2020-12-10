import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import {updateTodo} from '../apis/todos'

export default class  extends Component {
    constructor(props){
        super(props);
        this.state = {showTag: false, text: "", color: null}
    }

    showModal = () => {
        this.setState({showTag: True})
        
    };
    
    handleOk = () => {
        const {text, colour} = this.state;
        const labels = this.props.item.labels;
        const toDoItem = { ...this.props.item, labels: [...labels, { description: text, color: color }] };
        
        updateTodo(toDoItem).then((response) => {
            this.props.addLabel(response.data)
        })
        this.setState({showTag: false, text: ""})
    };
    
    handleCancel = () => {
        this.setState({showTag: false, text: ""});
    };

    changeText = (event) => {
        this.setState({ text: event.target.value });
    }
    chanegColor = (event) => {
        this.setState({ color: event.target.value });
    }
    
    render() {
        return (
            <div>
                <Button type="primary" onClick={showTag}>
                    Add New Label
                </Button>
                <Modal
                    title="New Label"
                    visible={this.state.isModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <label>Description: </label>
                    <input type="text" placeholder="Description" value={this.state.text} onChange={this.changeText} />
                    <br />
                    <br />
                    <label>Color: </label>
                    <input type="color" onChange={this.chanegColor} />
                </Modal>
            </div>
        )
    }
}
