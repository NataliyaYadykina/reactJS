import React from 'react';
import './App.css';
import GistList from './GistListEx2';
import PublicGists from './PublicGistsEx2';

function App() {
  return (
    <div className="App">
      <GistList />
      <PublicGists />
    </div>
  );
}

export default App;
