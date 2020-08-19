import React from 'react';
const monsterImages = require.context('../images/');

class MonsterViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonsters: [],
            bandName: ""
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
            .map((monsterName) => {
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

    handleSaveClick = () => {
        if (this.props.logged_in) {
            const nodes = []
            for (const nodeArr of this.props.nodes) {
                for (const node of nodeArr) {
                    if (node.active) {
                        nodes.push(node.col)
                        nodes.push(node.row)
                    }
                }
            }
            const bandName = this.state.bandName
            const userId = localStorage.getItem('user')
            const monsters = this.monsters.slice(this.currentSet * 2, (this.currentSet * 2) + 2)
            const sounds = this.sounds[this.currentSet]

            fetch('http://localhost:8080/playlists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    user_id: userId,
                    band_name: bandName,
                    pattern: nodes,
                    monsters: monsters,
                    sounds: sounds
                })
            }).then(() => {
                console.log("Success.");
            })

        } else {
            window.location = "/login"
        }
        
    }

    handleBandNameChange = (event) => {
        this.setState({
            bandName: event.target.value
        })
    }

    render() {
        return (
            <div id = "monster-wrapper">
                <div>
                    <h1><input placeholder = "Sample Band" onChange = {this.handleBandNameChange} value = {this.state.bandName}/></h1>
                    <button className = "save-btn ui orange button" onClick={this.handleSaveClick}>Save</button>
                </div>
                <button className = "circular ui positive icon basic button" name = "left" onClick = {this.handleClick}><i class="left arrow icon"></i></button>
                    {this.state.currentMonsters}
                <button className = "circular ui positive icon basic button" name = "right" onClick = {this.handleClick}><i class="right arrow icon"></i></button>
            </div>
        );
    };
};

export default MonsterViewer;