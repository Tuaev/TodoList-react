import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
  state = { task: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Submitting new task to parent state
  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="New Task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
