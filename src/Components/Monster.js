import React from 'react';

const monsterImages = require.context('../images/');

class Monster extends React.Component {
    render() {
      console.log(this.props.name)
        return (
          <>

<div class="ui segment">

    <div class="ui card">
  <div class="image">
    <div class="ui dimmer">
<div class="content">
  <div class="center">
    <div class="ui inverted button">Add Friend</div>
  </div>
</div>
    </div>
    <img src = {monsterImages(`./${this.props.name}.svg`)} alt = "" />
  </div>
  <div class="content">
    <div class="header">{this.props.name}</div>
    <div class="meta">
<a class="group">BAND NAME</a>
    </div>
    <div class="description">Hi, my name is {`${this.props.name}`}..</div>
  </div>
  <div class="extra content">
    <button style={{width: "90px"}} class="ui left floated mini green button">Edit</button>
    <button style={{width: "90px"}} class="ui right floated mini red button">Delete</button>
  </div>

</div>
</div>


          
          </>
        );
    };
};
export default Monster;