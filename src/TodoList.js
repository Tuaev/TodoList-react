import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
class TodoList extends Component {
  state = { todos: [{ task: 'Buy Milk' }, { task: 'Buy Eggs' }] };

  create = newTodo => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo list</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
