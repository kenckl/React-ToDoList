import './App.css';
import ToDoList from './components/ToDoList';
import NotFound from './components/NotFound';
import DoneListContainer from './containers/DoneListContainer';
import {HashRouter, BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import {connect} from "react-redux";
import {getTodos} from './apis/todos';
import {initToDo} from './actions';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

class App extends Component {
  componentDidMount(){
    getTodos().then(response =>{
      console.log(response);
      this.props.initToDo(response.data);
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<MailOutlined />}><Link to="/">Home Page</Link></Menu.Item>
            <Menu.Item key="done" icon={<AppstoreOutlined />}><Link to="/donepage">Done List</Link></Menu.Item>
          </Menu>
          
          <Switch>
            <Route exact path="/donepage" component={DoneListContainer}></Route>
            <Route exact path="/" component={ToDoList}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initToDo : (todos) => {dispatch(initToDo(todos))},
})

export default connect(null, mapDispatchToProps)(App);