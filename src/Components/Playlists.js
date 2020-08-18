import React from 'react';
import Monster from './Monster';
import { Link } from 'react-router-dom';
import EditBand from './EditBand'

class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentMonsters: []
        }

        this.currentSet = 0;
        this.monsters = ['beans', 'potato', 'squids', 'bubble']
        this.sounds = [['A1', 'B1', 'C1'], ['A2', 'C2', 'B2']]
    }
    componentDidMount() {
      console.log(this.state)
        this.setMonsters();
    }

    setMonsters() {
        const newMonsters = [];        
        this.monsters.map((monsterName, index) => {
          newMonsters.push(<Monster key = {index} name = {monsterName} />)
        })
        this.setState({ currentMonsters: newMonsters })
    }

    handleDelete = (name) => {
      fetch(// API, 
        { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(r => r.json())
      .then(() => {
        let newArr = this.state.monsters.filter(monster => monster.name !== name)
        this.setState({monsters: newArr})
      })
    }

    render() {
      console.log(this.monsters)
      console.log(this.state.bands)
        return (
<div>
<p></p>
<h2 style={{ color: 'green' }}>My Monsters</h2>

<div class="ui horizontal segments">

                {this.monsters.map((monsterName, index) => <Monster key={index} name={monsterName} handleDelete={this.handleDelete} />)}
                </div>
                <div className="edit-band">
                  <p></p>
    <EditBand />
  </div>
</div>



        )
    }
}

export default Playlists;