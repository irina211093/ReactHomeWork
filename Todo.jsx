import React from 'react';

const Todo = ({ todo, handleRemoveTodo }) => {
  return (
    <li className='todo-item'>
      <span>{todo.title}</span>
      <button className='todo-button' onClick={() => handleRemoveTodo(todo.id)} >Remove</button></li>
  );
};

export default Todo;