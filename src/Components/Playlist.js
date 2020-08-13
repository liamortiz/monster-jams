import React from 'react';
import MusicNode from './MusicNode';
import soundData from '../sounds.json';
import { MetalSynth } from "tone";


class Playlist extends React.Component {

    constructor(props) {
        super(props);
        //this.props.genre
        this.sounds = soundData["tropical"]
        this.synth = new MetalSynth().toDestination();
    }

    createGrid() {
        const grid = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 6; j++) {
                grid.push(<MusicNode handleClick = { this.handleClick } sound = {this.sounds[i]}/>)
            }
        }
        return grid;
    }

    handleClick = (sound) => {
        this.synth.triggerAttackRelease(sound, "100n");
    }
    render() {
        return (
            <div id = "playlist">
                {this.createGrid()}
            </div>
        )
    }
}

export default Playlist;