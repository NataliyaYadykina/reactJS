import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <>

      <div className="App">
        {
          console.log(
            <DivWithChild>
              <h1>Hello</h1>
              <p>World</p>
              <p>!</p>
            </DivWithChild>
          )
        }
      </div>

      <div className="App">
        <div>
          <h2>Example 2. Children</h2>
          <BorderComp>
            <p>This paragraph is inner border.</p>
            <button>The button is inner border.</button>
          </BorderComp>
          <BorderComp>
            <h2>The new Heading is inner border.</h2>
          </BorderComp>
          <p>This paragraph is outer border.</p>
        </div>
      </div>

      <div className="App">
        {
          <div>
            <h2>Example 3. Props.children</h2>
            <Card title="Card 1">
              <p>Some description for this card #1.</p>
              <button>Action</button>
            </Card>
            <Card title="Card 2">
              <p>Some description for this card #2.</p>
              <a href='#'>Link</a>
            </Card>
          </div>
        }
      </div>

      <div className="App">
        <div>
          <h2>Example 4. Render props</h2>
          <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
        </div>
      </div>

    </>
  );
}

function DivWithChild({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

const BorderComp = ({ children }) => {
  return (
    <div style={{ border: '2px solid #000', padding: '16px' }}>
      {children}
    </div>
  );
}

// Компонент Card принимает заголовок и содержимое в качестве children
const Card = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

///////////// Render props

// Компонент для отслеживания положения курсора мыши
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/* Внутри Render prop используем переданную функцию */}
      {render(position)}
    </div>
  );
}

// Компонент, который использует Render prop для рендеринга информации о положении курсора
const MouseInfo = ({ x, y }) => {
  return (
    <div>
      <h3>MousePosition:</h3>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}

export default App;
