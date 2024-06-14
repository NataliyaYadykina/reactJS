/*
Задание 1 (тайминг 25 минут)
Создать компонент Counter, который отображает кнопку и число. 
Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.
Нужно использовать useState.
*/

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Task 1. Counter</h2>
      <p>Счетчик: {count}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
};

export default Counter;
