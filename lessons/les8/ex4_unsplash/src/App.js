import React, { useState, useEffect } from 'react';
import axios from "axios";
import ImageList from "./components/ImageList";


function App() {
  const [images, setImages] = useState([]); // Создание состояния для хранения списка изображений
  const [query, setQuery] = useState(''); // Создание состояния для хранения строки поиска

  // Обработчик изменения строки поиска
  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Функция для поиска изображения по строке поиска или вывода рандомных, если строка пуста
  const searchImages = async () => {
    const url = query
      ? `https://api.unsplash.com/search/photos?query=${query}`
      : 'https://api.unsplash.com/photos/random?count=10';

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Client-ID YOUR_ACCESS_KEY', // Замените YOUR_ACCESS_KEY на ваш ключ доступа
        }
      });

      const imagesData = query ? response.data.results : response.data;
      setImages(imagesData); // Обновление состояния изображений
    } catch (error) {
      console.error('Query error', error);
    }
  };

  useEffect(() => {
    searchImages(); // Загрузка рандомных изображений при монтировании компонента
  }, []); // Зависимости пусты, так что эффект будет вызван один раз при монтировании

  return (
    <div className="App">
      <h1>Unsplash Image Search</h1>
      <input type="text" placeholder="Search images..." value={query} onChange={onInputChange} />
      <button onClick={searchImages}>Search</button>
      <ImageList images={images} />
    </div>
  );
};

export default App;
