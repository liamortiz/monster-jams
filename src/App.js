import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AudioPlayerContainer from './Containers/AudioPlayerContainer';
import Lab from './Components/Lab';
import Login from './Components/Login';
import MonstersContainer from './Containers/MonstersContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={AudioPlayerContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/lab" component={Lab} />
        </div>
        <div className="ui footer">
          Copyright © {new Date().toISOString().substring(0, 4)} | Liam & Julian Co.
        </div>
      </Switch>
    </React.Fragment>
    </Router>
  );
};

export default App;

// <div className="footer">
// <p></p><br></br><p></p><br></br>
// </div>


    // <div className="App">
    //   <Navbar />
    //   <div class="ui middle vertically divided aligned centered grid">
    //     <div class="row"><br></br><br></br>
    //     <MonstersContainer />
    //     </div>
    //     <div class="row">
    //     <AudioPlayerContainer />
    //     </div>
    //     <div class="row">
    //       <h5>Test Space: Login.js</h5><br></br><br></br>
        {/* </div>
        <div>
          <Login />
        </div>
        <div class="row">
          <h5>Test Space: Lab.js</h5><br></br><br></br>
        </div>
        <div>
          <Lab />
        </div> */}


        {/* <Route exact path="/" component= {AudioPlayerContainer} />
        <Route exact path="/login" component= {Login} />
        <Route exact path="/:id" component= {Lab} /> */}

        
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
      
      
      

      // </div>
//       <div className="footer">
//          Copyright © {new Date().toISOString().substring(0, 4)} | Liam & Julian Co.
//          <p></p><br></br><p></p><br></br>
//       </div>
//       </div>
//       </Switch>
//       </React.Fragment>
//       </Router>
      
//   );
// }

// export default App;
