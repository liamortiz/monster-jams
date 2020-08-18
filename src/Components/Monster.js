import React from 'react';

const monsterImages = require.context('../images/');

class Monster extends React.Component {

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
                  <h1>{this.props.band.name}</h1>
                </div>
                <div class="content">
                  <div class="header">{this.props.name}</div>
                  <div class="meta">
                    <a class="group">Band ID: {this.props.band.id}</a>
                  </div>
                  <div class="description">Hi, we're "{`${this.props.band.name}`}".</div>
                </div>
                <div class="extra content">
                  <button style={{width: "90px"}} class="ui left floated mini green button" onClick={() => this.props.editBand(this.props.band.id)}>Edit</button>
                  <button style={{width: "90px"}} class="ui right floated mini red button" onClick={() => this.props.handleDelete(this.props.band.id)}>Delete</button>
                </div>
              </div>
            </div>
          </>
        );
    };
};

export default Monster;