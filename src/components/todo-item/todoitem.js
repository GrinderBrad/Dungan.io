import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        return (
            <div>{this.props.text}</div>
        )
    }
}

export default TodoItem;