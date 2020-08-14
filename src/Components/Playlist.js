import React from 'react';
import soundData from '../sounds.json';
import { Synth } from "tone";

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.sounds = soundData["tropical"]
        this.synth = new Synth().toDestination();
        this.musicNodes = [];
        this.activeNodes = [];

        this.createMusicNodes();
        this.getMusicNodes();

        this.play = this.play.bind(this);
    }
    createMusicNodes() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 6; j++) {
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

    handleClick = (node) => {
        node.active = !node.active
        if (node.active) {
            this.synth.triggerAttackRelease(node.sound, "8n");
        }

        this.forceUpdate();
    }

    play() {
        for (const nodeArr of this.musicNodes) {
            for (const node of nodeArr) {
                if (node.active) {
                    //console.log(node.pos);
                    //this.synth.triggerAttackRelease(node.sound, "8n", node.pos * 2); This explodes.
                }
            }
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