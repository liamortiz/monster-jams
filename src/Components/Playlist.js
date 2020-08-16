import React from 'react';
import { MembraneSynth } from "tone";

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.synth = new MembraneSynth().toDestination();
        this.musicNodes = [];
        this.activeNodes = [];

        this.play = this.play.bind(this);
    }

    componentDidMount() {
        this.createMusicNodes();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sounds !== this.props.sounds) {
            this.createMusicNodes();
        }
    }

    createMusicNodes() {
        if (this.props.sounds.length === 0) return;

        this.musicNodes = []
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 12; j++) {
                if (!this.musicNodes[i]) {
                    this.musicNodes[i] = [];
                }
                this.musicNodes[i].push({active: false, sound: this.props.sounds[i], pos: j})
            }
        }
        this.forceUpdate();
    }

    getMusicNodes() {
        let nodes = []
        for (const nodeArr of this.musicNodes) {
            for (const [index, node] of nodeArr.entries()) {
                nodes.push(<div key = {`${index}:${node.sound}`} className = {`node ${node.active ? " active" : ""}`} onClick={() => {this.handleClick(node)}} ></div>)
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

    render() {
        return (
            <>
                <button className = "ui labeled icon button" onClick = {this.play}>
                    <i className = "play icon"></i>
                    Play
                </button>
                <div id = "playlist">
                    {this.getMusicNodes()}
                </div>
            </>
        )
    }
}

export default Playlist;