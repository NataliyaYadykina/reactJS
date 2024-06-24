/*
Задание 4 (тайминг 25 минут)
● Создайте маленькое приложение со страницей списка
(ListPage) и страницей деталей (DetailPage).
● На ListPage отобразите список элементов (например, статей или
продуктов), где каждый элемент является ссылкой на
DetailPage, содержащую детальную информацию об элементе.
Используйте react-router-dom для настройки маршрутизации.
● На DetailPage используйте useParams для извлечения
параметра из URL (например, ID элемента) и отобразите
детальную информацию об элементе.
*/

// npm install react-router-dom
import React from 'react';
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => (
    <div>
        <h3>ArticleList</h3>
        <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <Link to={`/articles/${article.id}`}>
                        {article.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default ArticleList;
