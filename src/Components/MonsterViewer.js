import React from 'react';
import Monster from './Monster';

class MonsterViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentMonsters: []}

        this.currentSet = 0;
        this.monsters = ['beans', 'potato', 'squids', 'bubble']
        this.sounds = [['C1', 'A1', 'B2'], ['A4', 'C4', 'B5']]
    }
    componentDidMount() {
        this.setMonsters();
    }

    setMonsters() {
        const newMonsters = [];
        this.props.changeSounds(this.sounds[this.currentSet]);
        
        this.monsters.slice(this.currentSet * 2, (this.currentSet * 2) + 2)
            .map((monsterName, index) => {
                newMonsters.push(<Monster key = {index} name = {monsterName} />)
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
        return (
            <div id = "monster-wrapper">
                <h1>Sample Band</h1>
                <button name = "left" onClick = {this.handleClick}>Left</button>
                {this.state.currentMonsters}
                <button name = "right" onClick = {this.handleClick}>Right</button>
            </div>
        )
    }
}
export default MonsterViewer;