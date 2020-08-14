import React from 'react';
import Monster from './Monster';

class Lab extends React.Component {
    state = {  }
    render() { 
      console.log(this.props.monsters)
        return(
<>
          


          
          

<div class="ui segment">
  <div class="ui three row very relaxed grid">
    <div class="row"></div>
    <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="row">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="row">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div class="ui horizontal divider">
    and
  </div>



<div class="ui grid container">
            
          <div class="ui form">
          {this.props.monsters.map(monster => <Monster key={monster.id} monster={monster}/>)}
        <div class="two fields">
          </div>



















<h3>Step 1: Build a Band</h3>

  <div class="field">
            <label>Select First Monster By ID</label>
            <div class="ui selection dropdown">
        <div class="default text">Monsters</div>
        <i class="dropdown icon"></i>
        <input name="hidden-field" type="hidden"/>
        <div class="menu">
          <div class="item" data-value="1">Choice 1</div>
          <div class="item" data-value="2">Choice 2</div>
        </div>
      </div>
      </div>

      <div class="field">
            <label>Select Second Monster By ID</label>
            <div class="ui selection dropdown">
        <div class="default text">Monsters</div>
        <i class="dropdown icon"></i>
        <input name="hidden-field" type="hidden"/>
        <div class="menu">
          <div class="item" data-value="1">Choice 1</div>
          <div class="item" data-value="2">Choice 2</div>
        </div>
      </div>
      </div>



      <h3>Step 2: Pick a Playlist</h3>


          <div class="field">
            <label>Select a Playlist By ID</label>

        <div class="ui selection dropdown">
        <div class="default text">Playlists</div>
        <i class="dropdown icon"></i>
        <input name="hidden-field" type="hidden"/>
        <div class="menu">
        <div class="item" data-value="1">Choice 1</div>
          <div class="item" data-value="2">Choice 2</div>
        </div>
</div>
<p></p><br></br><p></p><br></br><p></p><br></br>

          </div>
        </div>  
    </div>



















</> 








        );
    }
}
 
export default Lab;