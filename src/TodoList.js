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

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      // find the task we are updating
      if (todo.id === id) {
        // return a new object with updated the task value
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      // find the task we are updating
      if (todo.id === id) {
        // return a new object with updated the task value
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
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
