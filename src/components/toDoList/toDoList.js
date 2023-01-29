import React from 'react';

import { useState } from 'react';
import { Battle } from 'components';

export const ToDoList = () => {
  const [mode, setMode] = useState('start');
  const [winner, setWinner] = useState();
  function Todo({ todo, index, completeTodo, removeTodo, remClick }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button
            onClick={() => {
              removeTodo(index);
            }}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  function App() {
    const [todos, setTodos] = React.useState('');

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const removeTodo = index => {
      //const rem = false;
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
};
