import React from 'react';
import Monster from './Monster';

class Lab extends React.Component {
    // state = {  
    //   homeView: false
    // }


    handleClick = (e) => {
      // this.setState({homeView: !this.state.homeView})
      console.log("User clicks 'Monster Jam!' button and should be redirected to homepage.")
    }

    render() { 
      // console.log(this.props.monsters)
        return(
<>
          


          
{/*           

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
  </div> */}
  {/* <div class="ui horizontal divider">
    and
  </div> */}



<div class="ui grid container">
            
          <div class="ui form">
          {/* {this.props.monsters.map(monster => <Monster key={monster.id} monster={monster}/>)} */}
        <div class="two fields">
          </div>



















<h2 style={{ color: 'blue' }}>Step 1: Build a Band</h2>

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



      <h2 style={{ color: 'blue' }}>Step 2: Pick a Playlist</h2>


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


    <h2 style={{ color: 'blue' }}>Step 3: </h2> 

<button onclick={this.handleClick} class="ui orange large button">Monster Jam!</button>
<h3> After clicking "Monster Jam!" button, user will be directed back to homepage with updated/selected band & playlist. </h3>

{/* toggleView */}















</> 








        );
    }
}
 
export default Lab;