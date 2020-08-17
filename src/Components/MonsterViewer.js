import React from 'react';
import Monster from './Monster';

class MonsterViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentMonsters: []}

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

    handleSaveClick = e => {
        this.props.changeHomeView(e)
    }

    render() {
        return (
            <div id = "monster-wrapper">
                <h1>Sample Band <button className = "save-btn positive ui button" onClick={this.handleSaveClick}>Save</button></h1>
                <button className = "circular ui positive icon basic button" name = "left" onClick = {this.handleClick}><i class="left arrow icon"></i></button>
                {this.state.currentMonsters}
                <button className = "circular ui positive icon basic button" name = "right" onClick = {this.handleClick}><i class="right arrow icon"></i></button>
            </div>
        )
    }
}
export default MonsterViewer;