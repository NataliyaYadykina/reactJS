/*
Приложение для переключения темы сайта
Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.
Функционал:
Action types: TOGGLE_THEME.
Actions: Создайте действие для переключения темы.
Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
Component: Создайте компонент, который отображает переключатель для изменения темы сайта.
Описание:
Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").
Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.
*/

import React from 'react';
import './App.css';
import ToggleTheme from './ToggleTheme';

const App = () => {
  return (
    <div className={`app ${document.body.classList.contains('dark-mode') ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Theme Switcher</h1>
        <ToggleTheme />
      </header>
      <div className="app-content">
        <p>This is some sample content.</p>
      </div>
    </div>
  );
};

export default App;
