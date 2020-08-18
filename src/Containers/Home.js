import React from 'react';
import MonsterViewer from '../Components/MonsterViewer';
import Playlist from '../Components/Playlist';

class Home extends React.Component {
    state = {
      currentSound: []
    }
  
    changeSounds = (sounds) => {
      this.setState({
        currentSound: sounds
      })
    }

    render() { 
        return ( 
          <div id = "monster-band">
            <MonsterViewer changeSounds = {this.changeSounds} logged_in={this.props.logged_in}/>
            <Playlist sounds={this.state.currentSound} />
          </div>
          
        );
    }
}
 
export default Home;