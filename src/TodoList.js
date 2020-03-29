import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  state = {
    todos: []
  };

  // newTodo is an object with a task coming from NewTodoForm
  create = newTodo => {
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove} />;
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
