/*
Создать приложение с двумя страницами: "Главная страница" и "О нас".
На каждой странице должна быть навигационная ссылка для перехода на другую страницу.
Шаги выполнения:
Установка react-router-dom:
Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.
Создание компонентов:
— Создайте два компонента: HomePage.jsx и AboutPage.jsx.
— В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
— Реализовать переходы.
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
