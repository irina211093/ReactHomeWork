import React, { useState, useEffect } from 'react';
import Todo from './components/Todo/Todo';

const App = () => {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 10))) 
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);

  
  const handleRemove = (id) => { 
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 className='todo-title'>TODO List</h1>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} handleRemoveTodo={handleRemove} /> 
        ))}
      </ul>
    </div>
  );
};

export default App;

