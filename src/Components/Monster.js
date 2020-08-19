import React from 'react';
import { MembraneSynth } from "tone";

const monsterImages = require.context('../images/');

class Monster extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      editing: false,
      bandName: ""
    }

    this.synth = new MembraneSynth().toDestination();
    this.musicNodes = [];
  }

  createMusicNodes(pattern) {
    const sounds = this.props.band.sounds
    const copyPattern = [...pattern];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 12; j++) {
            if (!this.musicNodes[i]) {
                this.musicNodes[i] = [];
            }
            let active = false;
            if (pattern.length !== 0) {
              const pi = copyPattern[0];
              const pj = copyPattern[1];

              console.log(pi, pj, i, j);
              if (pi === i && pj == j) {
                active = true;
                copyPattern.splice(0, 2);
              }
            }
            this.musicNodes[i].push({active: active, sound: sounds[i], col: i, row: j})
        }
    }
    this.play()
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async play() {
    for (let i = 0; i < 12; i++) {
        const n1 = this.musicNodes[0][i];
        const n2 = this.musicNodes[1][i];
        const n3 = this.musicNodes[2][i];

        if (n1.active) {
            this.synth.triggerAttackRelease(n1.sound, "80n");
        }
        if (n2.active) {
            this.synth.triggerAttackRelease(n2.sound, "80n");
        }
        if (n3.active) {
            this.synth.triggerAttackRelease(n3.sound, "80n");
        }

        await this.sleep(300)
    }
  }

  componentDidMount() {
    const monsters = this.props.band.monsters.map(monster => <img src = {monsterImages(`./${monster}.svg`)} alt = "" />)
    this.setState({monsters: monsters})
  }

  handleClick = () => {
    this.setState({
      editing: !this.state.editing
    })
    if (this.state.editing) {
      this.props.editBand(this.props.band.id, this.state.bandName)
    }
  }

  handleChange = (event) => {
    this.setState({
      bandName : event.target.value
    })
  }

  handlePreview = () => {
    this.createMusicNodes(this.props.band.pattern)
  }
  
  render() {
    return (
      <>
        <div class="ui segment">
          <div class="ui mini card">
            <div class="image">
              <div class="ui dimmer">
                <div class="content">
                  <div class="center">
                  </div>
                </div>
              </div>
              {this.state.editing ? <input onChange = {this.handleChange} type = "text" placeholder = {this.props.band.band_name} value={this.state.bandName}/> : <h1>{this.props.band.band_name}</h1> }
            </div>
            <div class="content" id = "monster-content">
              <div class="header">{this.props.name}</div>
              <div class="meta">
                <a class="group">Band ID: {this.props.band.id}</a>
              </div>
              <div class="description">Hi, we're "{`${this.props.band.band_name}`}".</div>
              {this.state.monsters}
            </div>
            <div class="extra content">
              <button style={{width: "90px"}} class="ui left floated mini green button" onClick={this.handleClick}> {this.state.editing ? 'Save' : 'Edit'} </button>
              <button style={{width: "90px"}} class="ui right floated mini blue button" onClick={this.handlePreview}>Preview</button>
              <button style={{width: "90px"}} class="ui right floated mini red button" onClick={() => this.props.handleDelete(this.props.band.id)}>Delete</button>
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default Monster;