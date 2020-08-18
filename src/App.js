import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Band from './Components/Band';
import Login from './Components/Login';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    logged_in: false
  }

  setLogin = (data) => {
    console.log(data);
    this.setState({
      logged_in: !this.state.logged_in
    })
    //window.location = "/";
  }

  render(){
    return (
      <Router>
      <React.Fragment>
        <Switch>
          <div className="App">
            <Navbar logged_in={this.state.logged_in}/>
            <Route exact path = '/' render={(props) => (
              <Home {...props} logged_in={this.state.logged_in} />
            )}
            />

            <Route path = '/login' render={(props) => (
              <Login {...props} setLogin={this.setLogin}/>
            )}
            />

            <Route path="/playlists">
              {this.state.logged_in ? <Band/> : <Redirect to="/login" />}
            </Route>
          </div>
        </Switch>
        <Footer/>
      </React.Fragment>
      </Router>
    );
};
}

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
          <h5>Test Space: Playlists.js</h5><br></br><br></br>
        </div>
        <div>
          <Playlists />
        </div> */}


        {/* <Route exact path="/" component= {Home} />
        <Route exact path="/login" component= {Login} />
        <Route exact path="/:id" component= {Playlists} /> */}

        
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
