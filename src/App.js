import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MonstersContainer from './Containers/MonstersContainer';
import AudioPlayerContainer from './Containers/AudioPlayerContainer';
import Login from './Components/Login';
import Lab from './Components/Lab';

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
        <div class="row">
          <h5>Test Space: Login.js</h5><br></br><br></br>
        </div>
        <div>
          <Login />
        </div>
        <div class="row">
          <h5>Test Space: Lab.js</h5><br></br><br></br>
        </div>
        <div>
          <Lab />
        </div>




        
        {/* <div class="row">
          <h5>Test Space: Addt'l / Misc</h5><br></br><br></br>
        </div>
        <div>
        <div class="ui segment">
          <div class="ui left rail">
            <button class="circular ui icon green button">
              <i class="left arrow icon"></i>
            </button>
          </div>
          <div class="ui right rail">
            <button class="circular ui icon green button">
              <i class="right arrow icon"></i>
            </button>
          </div>
            <p></p>
            <p></p>
          </div>
        </div> */}
      
      
      
      
      
      
      
      </div>
    </div>
  );
}

export default App;
