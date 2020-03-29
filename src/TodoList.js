import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

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
      <div className="TodoList">
        <h1>
          Todo List <span>Built in React</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
