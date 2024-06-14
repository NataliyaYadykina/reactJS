/*
Задание 2 (тайминг 20 минут)
Создать компонент TextInput, который содержит текстовое поле ввода и отображает введённый текст под ним в реальном времени.
Использовать useState и useEffect.
*/

import React, { useState, useEffect } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Text changed:', text);
  }, [text]);

  return (
    <div>
      <h2>Task 2. TextInput</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};

export default TextInput;
