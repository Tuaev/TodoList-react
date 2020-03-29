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
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdateForm}>
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
      result = (
        <div className="Todo">
          <li
            className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleEditForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
