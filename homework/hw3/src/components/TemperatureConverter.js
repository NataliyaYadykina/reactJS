/*
Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.
*/

import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue === '') {
      setFahrenheit('');
    } else {
      const fahrenheitValue = (parseFloat(celsiusValue) * 9 / 5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    if (fahrenheitValue === '') {
      setCelsius('');
    } else {
      const celsiusValue = (parseFloat(fahrenheitValue) - 32) * 5 / 9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <h2>Task 1</h2>
        <TextField
          label="Celsius"
          variant="outlined"
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Fahrenheit"
          variant="outlined"
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={() => { setCelsius(''); setFahrenheit(''); }}>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
