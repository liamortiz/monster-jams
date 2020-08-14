import React from 'react';

class Monster extends React.Component {
    render() { 
        console.log(this.props.monster)
        let { id, name } = this.props.monster
        return (
            <>
            <div class="ui three cards">


          <div class="ui card">
  <div class="image">
    <div class="ui dimmer">
<div class="content">
  <div class="center">
    <div class="ui inverted button">{name}</div>
  </div>
</div>
    </div>
    <img src="https://thumbs.dreamstime.com/b/cute-cartoon-monster-character-cute-cartoon-monster-character-clipart-illustration-126534533.jpg"/>
  </div>
  <div class="content">
    <div class="header">{name}</div>
    <div class="meta">
<a class="group">Monster ID: {id}</a>
    </div>
    <div class="description">World-Famous Professional Triangle Player</div>
  </div>
  <div class="extra content">


    <a class="friends">

    </a>
    <button class="ui mini red button">Delete</button>
    <a>
    <button class="right floated created" class="ui mini green button">Like</button>

    </a>
  </div>
</div>
</div>            

</>
        );
    };
};
 
export default Monster;