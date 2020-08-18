import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'tone';
import Monster from './Monster';
import Band from './Band';

const monsterImages = require.context('../images/');
const TEST_API_BANDS = [
    {
      id: 1,
      name: "Band A"
    },
    {
      id: 2,
      name: "Band B"
    },
    {
       id: 3,
       name: "Band C"
    } 
  ]

class MonsterViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMonsters: [], 
            bands: TEST_API_BANDS
        }

        this.currentSet = 0;
        this.monsters = ['beans', 'potato', 'squids', 'bubble']
        this.sounds = [['A1', 'B1', 'C1'], ['A2', 'C2', 'B2']]
    }

    componentDidMount() {
        this.setMonsters();
    }

    setMonsters() {
        const newMonsters = [];
        this.props.changeSounds(this.sounds[this.currentSet]);
        
        this.monsters.slice(this.currentSet * 2, (this.currentSet * 2) + 2)
            .map((monsterName, index) => {
                newMonsters.push(<img src = {monsterImages(`./${monsterName}.svg`)} alt = "" />)
            })
        
        this.setState({ currentMonsters: newMonsters })
    }

    handleClick = (event) => {
        const direction = event.target.name;
        switch (direction) {
            case 'left':
                this.currentSet--;
                if (this.currentSet < 0) {
                    this.currentSet = 0;
                }
                break;
            case 'right':
                this.currentSet++;
                if (this.currentSet > (this.monsters.length / 2) - 1) {
                    this.currentSet = (this.monsters.length / 2) - 1;
                }
                break;
            default:
                break;
        }
        this.setMonsters();
    }

    render() {
        console.log(this.state.bands)
        return (
            <div id = "monster-wrapper">
                <Band bands={this.state.bands} editBand={this.handleEditClick} />
                <div>
                    <h1><input placeholder = "Sample Band"/></h1>
                    <Link to="/playlists"><button className = "save-btn ui orange mini button" onClick={this.handleSaveClick}>Save</button></Link>
                </div>
                <button className = "circular ui positive icon basic button" name = "left" onClick = {this.handleClick}><i class="left arrow icon"></i></button>
                    {this.state.currentMonsters}
                <button className = "circular ui positive icon basic button" name = "right" onClick = {this.handleClick}><i class="right arrow icon"></i></button>
            </div>
        )
    }
}
export default MonsterViewer;