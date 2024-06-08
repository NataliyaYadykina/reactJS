import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first react project.
        </p>
        <Greeting />
        <CurrentTime />
        <div className='events'>
          <EventCard title='title1' date='07-06-2024' place='place1' />
          <EventCard title='title2' date='17-06-2024' place='place2' />
          <EventCard title='title3' date='27-06-2024' place='place3' />
        </div>
      </header>
    </div>
  );
}

export default App;
