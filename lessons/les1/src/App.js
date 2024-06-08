import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Alex';
  return (
    <div className="App">
      <h1>Hello, {userName}!</h1>
      <Article number="3" name="Info" />
      <Article number="5" name="Blog" />
    </div>
  );
}

function Article({ name, number }) {
  let themeSiteWhite = false;
  return (
    <div>
      <h2 style={{ color: themeSiteWhite ? 'green' : 'red' }} className="heading">Article about {name} #{number}</h2>
      <a href='#'>Read article</a>
    </div>
  );
}

export default App;
