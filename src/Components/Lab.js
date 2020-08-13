import React from 'react';

class Lab extends React.Component {
    state = {  }
    render() { 
        return(
        <div class="ui form">
        <div class="two fields">
          <div class="field">
            <label>Select Monsters</label>
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
            <label>Select Playlist</label>

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
        );
    }
}
 
export default Lab;