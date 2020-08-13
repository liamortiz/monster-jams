import React from 'react';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (  
            // <div class="ui inverted segment">
                // <div class="ui inverted borderless large menu">
                <div class="ui inverted borderless large blue menu">

                    <a class="active item">
                        <h3>Home</h3>
                    </a>

                        {/* <Link to="/" className="link">Home</Link> */}
  
                    <a class="item">
                        <h3>Lab</h3>
                    </a>

                        {/* <Link to="/lab" className="link">Lab</Link> */}

                <div class="right menu">

                    <a class="item">
                        <h3>Login</h3>
                    </a>

                        {/* <Link to="/login" className="link" >Login</Link> */}
                </div>
                </div>
            // </div>
            );
        }
    }
 
export default Navbar;