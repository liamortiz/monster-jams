import React from 'react';
import EditBand from '../Components/EditBand';
import Band from '../Components/Band';
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
            <Band changeSounds = {this.changeSounds} />
            <Playlist sounds={this.state.currentSound} />
          </div>
          
        );
    }
}
 
export default Home;