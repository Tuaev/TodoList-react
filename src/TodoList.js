import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
  state = { todos: [{ task: 'Buy Milk' }, { task: 'Buy Eggs' }] };

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo list</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
