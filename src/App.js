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
      <div class="ui middle vertically divided aligned centered grid">
        <div class="row">
        <MonstersContainer />
        </div>
        <div class="row">
        <AudioPlayerContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
