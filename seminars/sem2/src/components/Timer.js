/*
Задание 4* (тайминг 20 минут)
Создать компонент Timer, который отображает таймер, увеличивающийся на 1 каждую секунду. Использовать useEffect для установки и очистки интервала.
*/

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Task 4. Timer: {seconds}</h2>
    </div>
  );
};

export default Timer;
