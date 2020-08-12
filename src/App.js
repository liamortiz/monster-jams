import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MonstersContainer from './Containers/MonstersContainer';
import AudioPlayerContainer from './Containers/AudioPlayerContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MonstersContainer />
      <AudioPlayerContainer />
    </div>
  );
}

export default App;
