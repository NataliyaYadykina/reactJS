/*
Задание 5* (тайминг 20 минут)
Создайте компонент ThemeSwitcher. Этот компонент будет содержать кнопку, при нажатии на которую будет меняться тема интерфейса (светлая/темная).
Используйте useState для управления текущей темой. Храните состояние текущей темы в компоненте ThemeSwitcher. 
Состояние может быть простой строкой, например, "light" или 
"dark".
Передайте текущую тему в виде пропса в другой компонент, который изменит свой стиль в зависимости от полученной темы. Например, создайте компонент Content, который изменяет свой фоновый цвет в зависимости от темы.
Добавьте логику для переключения темы в ThemeSwitcher. При нажатии на кнопку должно происходить переключение между "light" и "dark" состояниями, и это изменение должно отражаться в компоненте Content.
*/

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Button variant="contained" onClick={handleThemeChange}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
