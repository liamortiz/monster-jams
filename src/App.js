import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Lab from './Components/Lab';
import Playlist from './Components/Playlist';
import Login from './Components/Login';
import MonstersContainer from './Containers/MonstersContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
const API_Monsters = [
  {
    id: 1,
    name: "Monster 1"
  },
  {
    id: 2,
    name: "Monster 2"
  },
  {
    id: 3,
    name: "Monster 3"
  }
]

const API_Playlists = [
  {
    id: 1,
    title: "Playlist 1"
  },
  {
    id: 2,
    title: "Playlist 2"
  },
  {
    id: 3,
    title: "Playlist 3"
  }
]

class App extends React.Component {
  state = {
    monsters: API_Monsters,
    playlists: API_Playlists
  }

  // componentDidMount(){
  //   fetch(API_Monsters)
  //       .then(res => res.json())
  //       .then(monsters => this.setState({ monsters }))
  // }

  render() {
    console.log(this.state.monsters)
    return (
      <Router>
      <React.Fragment>
        <Switch>
          <div className="App">
            <Navbar />
            <Route exact path="/" render={() => Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/lab" render={() => <Lab monsters={this.state.monsters}/>}/>
          <div className="ui footer">
              Copyright © {new Date().toISOString().substring(0, 4)} | Liam & Julian Co.
          </div>
          </div>
        </Switch>
      </React.Fragment>
      </Router>
  ); 
  };
}; 
=======
const App = () => {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Playlist} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/lab" component={Lab} />
        <div className="ui footer">
            Copyright © {new Date().toISOString().substring(0, 4)} | Liam & Julian Co.
        </div>
        </div>
      </Switch>
    </React.Fragment>
    </Router>
  );
};
>>>>>>> 69ec198534adc8a6db8f12ed819b11e9118869e8

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
    //     <Home />
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


        {/* <Route exact path="/" component= {Home} />
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
