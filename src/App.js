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

  componentDidMount() {
    this.setState({
      logged_in: !!localStorage.getItem('token')
    })
  }

  setLogin = (data=false) => {
    if (data) {
      this.setState({
        logged_in: true
      })
      localStorage.setItem('user', data.user.id);
      localStorage.setItem('token', data.jwt);
    
      window.location = "/"
    } else {
      console.log("Test", this.state.logged_in);
      this.setState({
        logged_in: false
      })
      localStorage.clear();
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <div className="App">
              <Navbar logged_in={this.state.logged_in}/>
              <Route exact path = '/' render={(props) => (
                <Home {...props} logged_in={this.state.logged_in} />)}>
              </Route>
              <Route path = '/login' render={(props) => (
                <Login {...props} setLogin={this.setLogin}/>)}>
              </Route>
              <Route path="/playlists">
                {!!localStorage.getItem('token') ? <Band/> : <Redirect to="/login" />}
              </Route>
            </div>
          </Switch>
          <Footer/>
        </React.Fragment>
      </Router>
    );
  };
};

export default App;