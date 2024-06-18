/*
Задание 4 (тайминг 25 минут)
Создать React компонент TextDisplayForm, который позволяет пользователю ввести текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию кнопки.
Создание поля ввода (TextField):
Добавить TextField для ввода текста пользователем.
Установить метку (label) поля ввода на "Введите текст".
Сделать поле ввода на всю ширину (fullWidth).
Разместить кнопку под полем ввода.
Установить текст кнопки на "Отобразить текст".
При нажатии на кнопку введенный текст должен отображаться под кнопкой.
Отображение введенного текста:
Использовать состояние для хранения введенного и отображаемого текста.
При нажатии на кнопку текст из поля ввода должен отображаться в стилизованной карточке (Card) под кнопкой.
Стилизация отображаемого текста:
Для отображения текста использовать компонент Typography с вариантом h5.
*/

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const TextDisplayForm = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleDisplayClick = () => {
    setDisplayText(inputText);
    setInputText('');
  };

  return (
    <div>
      <TextField
        label="Введите текст"
        fullWidth
        value={inputText}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleDisplayClick}>
        Отобразить текст
      </Button>
      {displayText && (
        <Card sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            {displayText}
          </Typography>
        </Card>
      )}
    </div>
  );
};

export default TextDisplayForm;
