import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">go to todo list page</Link></li>
                <li><Link to="/donelist">go to done list page</Link></li>
            </ul>
        )
    }
}
