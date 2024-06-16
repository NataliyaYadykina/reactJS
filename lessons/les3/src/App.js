import logo from './logo.svg';
import './App.css';
import ParentCounter from './components/Parent';
import InputForm from './components/Form';
import Student from './components/PropType';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ParentCounter />
        <InputForm />
        <Student name="Ivan" age={30} isStudent={true}/>
      </header>
    </div>
  );
}

export default App;
