/*
Задание 2 (тайминг 25 минут)
Разработайте компонент Counter, который отображает число и 
две кнопки: одна для увеличения значения на 1, а другая для 
уменьшения на 1.
Используйте хук useState для управления состоянием счётчика.
Кнопки можно сделать с помощью material ui
*/

import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Task 2. {count}</h2>
      <Button variant="contained" onClick={handleIncrement}>
        Увеличить
      </Button>
      <Button variant="contained" onClick={handleDecrement}>
        Уменьшить
      </Button>
    </div>
  );
};

export default Counter;
