/*
Задание 3 (тайминг 25 минут)
Создайте компонент MessagesList, который отображает список сообщений. Каждое сообщение должно иметь уникальный id и текст. Добавить также список объектов сообщений.
Используйте проп key при рендеринге списка, чтобы обеспечить оптимальную производительность.
*/

import React from 'react';

const messages = [
  { id: 1, text: 'Привет!' },
  { id: 2, text: 'Как дела?' },
  { id: 3, text: 'Хорошо, спасибо!' },
];

const MessagesList = () => {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};

export default MessagesList;
