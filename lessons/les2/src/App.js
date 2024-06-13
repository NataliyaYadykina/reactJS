import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js';
import Visible from './components/Visible.js';
import Timer from './components/Timer.js';
import RefExample from './components/RefExample.js';
import List from './components/List.js';
  
function App() {
  const username = 'Nataliya';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {username}!!!
        </p>
        <Timer />
        <Counter />
        <Visible data="some text 1"/>
        <Visible data="some text 2"/>
        <RefExample />
        <List />
      </header>
    </div>
  );
}

export default App;
