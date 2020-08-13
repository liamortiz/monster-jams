import React, { useState } from 'react';

class MusicNode extends React.Component {
    state = {
        active: false
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
        if (!this.state.active) {
            this.props.handleClick(this.props.sound)
        }
    }

    render() {
        return (
            
            <div 
            className = {`node ${this.state.active ? " active" : ""}`} 
            onClick = { this.handleClick }
            >

            </div>
        )
    }
}

export default MusicNode;