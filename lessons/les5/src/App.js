import './App.css';
import React, { createContext, useContext, useState } from 'react';
import { Provider } from "react-redux";
import store from './components/store';
import CounterRedux from './components/CounterRedux';
// Как было раньше с props
// function GrandParent() {
//   return <Parent message="Hello from the top!" />
// };

// function Parent(props) {
//   return <Child message={props.message} />
// };

// function Child(props) {
//   return <GrandChild message={props.message} />
// };

// function GrandGrandGrandChild(props) {
//   return <p>{props.message}</p>
// };

// Создаем контекст
const MessageContext = createContext();

// Компонент GrandGrandGrandChild использует контекст
function GrandGrandGrandChild() {
  // Используем useContext для доступа к контексту
  const message = useContext(MessageContext);
  return <p>{message}</p>
};

// Компонент GrandParent устанавливает контекст
function GrandParent() {
  const [message, setMessage] = useState("Hello from the top!");
  return (
    <MessageContext.Provider value={message}>
      <Parent />
    </MessageContext.Provider>
  );
};

// Компонент Parent передает контекст через пропсы
function Parent() {
  return <Child />
};

// Компонент Child передает контекст дальше
function Child() {
  return <GrandChild />
};

// Компонент GrandChild передает контекст на последний уровень
function GrandChild() {
  return <GrandGrandGrandChild />
};

// // ...

/// EX2
// Шаг 1: Создаем контекст
const ThemeContext = createContext();

// Компонент, использующий контекст
function ThemedButton() {
  // Шаг 2: Используем useContext для доступа к контексту
  const theme = useContext(ThemeContext);
  return (
    <button style={{ backgroundColor: theme.background, color: theme.foreground }}>
      {theme.label}
    </button>
  );
};

/// EX3

// Создаем контексты для темы и заметок
const ThemeNotesContext = createContext();
const NotesContext = createContext();

// Создаем пользовательские хуки для удобства использования контекстов
const useThemeNotes = () => useContext(ThemeNotesContext);
const useNotes = () => useContext(NotesContext);

// Компонент, отображающий список заметок
const NotesList = () => {
  // Используем пользовательские хуки для доступа к контекстам
  const { notes } = useNotes();
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

// Компонент, позволяющий добавлять заметки
const NoteInput = () => {
  // Используем пользовательские хуки для доступа к контекстам
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Добавить заметку</button>
    </div>
  )

};

// Компонент для переключения темы
const ThemeToggle = () => {
  // Используем пользовательские хуки для доступа к контекстам
  const { themeNotes, toggleThemeNotes } = useThemeNotes();
  return (
    <button onClick={toggleThemeNotes}>Переключить на {themeNotes === 'light' ? 'темную' : 'светлую'} тему</button>
  );
};


//// HOC компоненты высшего порядка

// HOC для добавления стилей к компоненту
const withStyles = (WrappedComponent, styles) => {
  return (props) => {
    const newProps = { ...props, styles };
    return <WrappedComponent {...newProps} />;
  };
};

// Компонент, который будет обернут в стили
const Button = ({ styles }) => {
  return (
    <button style={styles}>
      Button
    </button>
  );
};

// Компонент, который будет обернут в стили
const Text = ({ styles }) => {
  return (
    <p style={styles}>
      Some text
    </p>
  );
};

// Используем HOC для добавления стилей к компоненту Button
const StyledButton1 = withStyles(Button, { background: 'red', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });
const StyledButton2 = withStyles(Button, { background: 'orange', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });
const StyledButton3 = withStyles(Button, { background: 'yellow', color: 'red', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });
const StyledButton4 = withStyles(Button, { background: 'green', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });
const StyledButton5 = withStyles(Button, { background: 'aqua', color: 'blue', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });
const StyledButton6 = withStyles(Button, { background: 'blue', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });
const StyledButton7 = withStyles(Button, { background: 'purple', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '5px', fontSize: '18px' });

const StyledText = withStyles(Text, { background: '#ccc', color: 'black', padding: '10px 25px', borderRadius: '5px', fontSize: '18px' });


///// EX 5

// HOC для счетчика

// HOC для добавления счетчика к компоненту
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    const reset = () => setCount(0);
    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  };
};

// Компонент, который будет обернут с счетчиком и другими компонентами
const ClickCounter = ({ count, increment, decrement, reset, message }) => {
  return (
    <div>
      <p>Счетчик: {count}</p>
      <p>{message}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Сброс</button>
    </div>
  );
};

// Используем HOC для добавления счетчика к компоненту ClickCounter и передаем другие пропсы
const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

// Корневой компонент
function App() {
  // Шаг 3: Определяем состояние, которое будет передаваться через контекст
  const [theme, setTheme] = useState({
    background: 'lightgray',
    foreground: 'black',
    label: 'Переключить тему',
  });

  const [themeNotes, setThemeNotes] = useState('light');
  const [notes, setNotes] = useState(['Заметка 1', 'Заметка 2', 'Заметка 3']);

  // Шаг 4: Определяем функцию для изменения состояния
  const toggleTheme = () => {
    setTheme({
      background: theme.background === 'lightgray' ? 'black' : 'lightgray',
      foreground: theme.foreground === 'lightgray' ? 'black' : 'lightgray',
      label: theme.label === 'Переключить тему' ? 'Вернуть тему' : 'Переключить тему',
    });
  };

  const toggleThemeNotes = () => {
    setThemeNotes((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const addNote = (note) => {
    setNotes((currentNotes) => [...currentNotes, note]);
  }

  return (
    <>
      <div className="App">
        <h2>Task 1. Пример использования React.Context</h2>
        <GrandParent />
      </div>

      <div className="App">
        <h2>Task 2. Пример использования React.Context</h2>
        <ThemeContext.Provider value={theme}>
          <ThemedButton />
          <button onClick={toggleTheme}>Переключатель</button>
        </ThemeContext.Provider>
      </div>

      <div className="App">
        <h2>Task 3. Пример использования React.Context</h2>
        <ThemeNotesContext.Provider value={{ themeNotes, toggleThemeNotes }}>
          <NotesContext.Provider value={{ notes, addNote }}>
            <div className='content' style={{ color: themeNotes === 'light' ? 'black' : 'white', background: themeNotes === 'light' ? 'white' : 'black' }}>
              <h3>Список</h3>
              <ThemeToggle />
              <NotesList />
              <NoteInput />
            </div>
          </NotesContext.Provider>
        </ThemeNotesContext.Provider>
      </div>

      <div className="App">
        <h2>Task 4. Пример использования HOC</h2>
        <StyledButton1 />
        <StyledButton2 />
        <StyledButton3 />
        <StyledButton4 />
        <StyledButton5 />
        <StyledButton6 />
        <StyledButton7 />
        <StyledText />
      </div>

      <div className="App">
        <h2>Task 5. Пример использования HOC с другими пропсами</h2>
        <ClickCounterWithCounterAndProps message="Счетчик кнопок" />
        <ClickCounterWithCounterAndProps message="Счетчик новых кликов" />
      </div>

      <div className="App">
        <h2>Task 6. Пример использования redux</h2>
        <Provider store={store}>
          <CounterRedux />
        </Provider>
      </div>

    </>
  );
}

export default App;
