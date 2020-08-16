import React from 'react';
import Playlist from '../Components/Playlist';
import MonsterViewer from '../Components/MonsterViewer';

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
            <MonsterViewer changeSounds = {this.changeSounds} />
            <Playlist sounds={this.state.currentSound} />
          </div>
          
        );
    }
}
 
export default Home;