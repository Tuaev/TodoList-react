import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  state = { isEditing: false, task: this.props.task };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleEditForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdateForm = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleEditForm();
  };

  handleToggle = e => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let results;
    if (this.state.isEditing) {
      results = (
        <div>
          <form onSubmit={this.handleUpdateForm}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              id="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      results = (
        <div>
          <button onClick={this.toggleEditForm}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
          <li className={this.props.completed && 'completed'} onClick={this.handleToggle}>
            {this.props.task}
          </li>
        </div>
      );
    }

    return results;
  }
}

export default Todo;
