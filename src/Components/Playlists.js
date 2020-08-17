import React from 'react';
import Monster from './Monster';
import { Link } from 'react-router-dom';

class Playlists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentMonsters: []}

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

    render() {
      console.log(this.monsters)
        return (
<div>
<div class="ui horizontal segments">
                {this.monsters.map((monsterName, index) => <Monster key={index} name={monsterName}/>)}
                </div>
</div>



        )
    }
}

export default Playlists;