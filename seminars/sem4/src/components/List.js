/*
Задание 2 (тайминг 20 минут)
1. Создайте компонент List, который принимает функцию через
props, и эта функция возвращает элементы списка (<li>). List
должен рендерить эти элементы внутри <ul>.
2. Используйте List для отображения списка пунктов, где каждый
пункт может иметь свой уникальный стиль или содержимое,
определенное функцией render props.
*/

import React from 'react';

const List = ({ renderItems }) => {

    return (
        <ul>
            {renderItems().map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default List;
