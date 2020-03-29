import React, { Component } from 'react';

class Todo extends Component {
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };
  render() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
