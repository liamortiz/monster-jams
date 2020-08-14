import React from 'react';
import soundData from '../sounds.json';
import { MonoSynth } from "tone";

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.sounds = soundData["tropical"]
        this.synth = new MonoSynth().toDestination();
        this.musicNodes = [];
        this.activeNodes = [];

        this.createMusicNodes();
        this.getMusicNodes();

        this.play = this.play.bind(this);
    }
    createMusicNodes() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 12; j++) {
                if (!this.musicNodes[i]) {
                    this.musicNodes[i] = [];
                }
                this.musicNodes[i].push({active: false, sound: this.sounds[i], pos: j})
            }
        }
    }

    getMusicNodes() {
        let nodes = []
        for (const nodeArr of this.musicNodes) {
            for (const node of nodeArr) {
                nodes.push(<div className = {`node ${node.active ? " active" : ""}`} onClick={() => {this.handleClick(node)}} ></div>)
            }
        }
        return nodes;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    handleClick = (node) => {
        node.active = !node.active
        if (node.active) {
            this.synth.triggerAttackRelease(node.sound, "50n");
        }

        this.forceUpdate();
    }

    async play() {
        for (let i = 0; i < 12; i++) {
            const n1 = this.musicNodes[0][i];
            const n2 = this.musicNodes[1][i];
            const n3 = this.musicNodes[2][i];

            if (n1.active) {
                this.synth.triggerAttackRelease(n1.sound, "50n");
            }
            if (n2.active) {
                this.synth.triggerAttackRelease(n2.sound, "50n");
            }
            if (n3.active) {
                this.synth.triggerAttackRelease(n3.sound, "50n");
            }

            await this.sleep(300)
        }
    }

    render() {
        return (
            <React.Fragment>
                <button onClick = {this.play}>Play</button>
                <div id = "playlist">
                {this.getMusicNodes()}
                </div>
            </React.Fragment>
        )
    }
}

export default Playlist;