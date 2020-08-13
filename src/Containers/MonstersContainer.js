import React from 'react';

class MonstersContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div class="ui segment">

                <h3>Monsters Container</h3>
                <p></p><br></br>
                <p></p><br></br>
                <p></p><br></br>
                <p></p><br></br>
                <p>_________________________________</p>
                <div class="ui left rail">
            <button class="circular ui positive icon basic button">
              <i class="left arrow icon"></i>
            </button>
            
          </div>
          <div class="ui right rail">
            <button class="circular ui positive icon basic button">
              <i class="right arrow icon"></i>
            </button>
          </div>
            </div>
        );
    }
}
 
export default MonstersContainer;