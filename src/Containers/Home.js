import React from 'react';
import MonsterViewer from '../Components/MonsterViewer';
import Playlist from '../Components/Playlist';

class Home extends React.Component {
  state = {
    currentSound: [],
    currentNodes: []
  }

  changeSounds = (sounds) => {
    this.setState({
      currentSound: sounds
    })
  }

  updateNodes = (nodes) => {
    this.setState({
      currentNodes: nodes
    })
  }

  render() { 
    return ( 
      <div id = "monster-band">
        <MonsterViewer changeSounds = {this.changeSounds} logged_in={this.props.logged_in} nodes={this.state.currentNodes}/>
        <Playlist sounds={this.state.currentSound} updateNodes={this.updateNodes} />
      </div>
    );
  };
};
 
export default Home;