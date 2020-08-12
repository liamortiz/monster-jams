import React from 'react';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (  
            // <div class="ui inverted segment">
                <div class="ui inverted borderless large menu">

                    <a class="active item">
                        Home
                    </a>

                        {/* <Link to="/" className="link">Home</Link> */}
  
                    <a class="item">
                        Lab
                    </a>

                        {/* <Link to="/lab" className="link">Lab</Link> */}

                <div class="right menu">

                    <a class="item">
                        Login
                    </a>

                        {/* <Link to="/login" className="link" >Login</Link> */}
                </div>
                </div>
            // </div>
            );
        }
    }
 
export default Navbar;