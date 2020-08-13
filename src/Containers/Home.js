import React from 'react';

class Home extends React.Component {
    state = {  }
    render() { 
        return (  
<React.Fragment>


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




<div class="ui segment">
                <h3>AudioPlayer Container</h3>
                <button class="circular ui icon button">
                    <i class="play icon"></i>
                </button>
                <p></p><br></br>
                <p></p><br></br>
                <p>_________________________________</p>
            </div>
            </React.Fragment>
        );
    }
}

export default Home;