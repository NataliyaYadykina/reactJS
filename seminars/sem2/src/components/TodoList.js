/*
Задание 3 (тайминг 40 минут)
Создать компонент React TodoList, который позволяет добавлять элементы в список дел через текстовое поле ввода. Список должен обновляться при добавлении нового дела.
*/

import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>Task 3. TodoList - Список дел</h2>
      <input
        type="text"
        placeholder="Введите новое дело"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
