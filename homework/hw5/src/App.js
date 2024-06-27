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
import { Provider, useSelector } from 'react-redux';
import store from './store';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './App.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const App = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  const appClasses = cx({
    'App': true,
    'light': !isDarkMode,
    'dark': isDarkMode
  });

  return (
    <Provider store={store}>
      <div className={appClasses}>
        <h1>Сайт с темной и светлой темой</h1>
        <ThemeSwitcher />
        {/* Другие компоненты вашего сайта */}
      </div>
    </Provider>
  );
};

export default App;
