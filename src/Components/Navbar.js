import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return (  
            // <div class="ui inverted segment">
                // <div class="ui inverted borderless large menu">
                <div class="navbar">
                <div class="ui inverted borderless large blue menu">

                    <a class="item">
                    <Link to="/" className="link">Home</Link>
                        {/* <h3>Home</h3> */}
                    </a>

                    <a class="item">
                    <Link to="/lab" className="link">Lab</Link>

                        {/* <h3>Lab</h3> */}
                    </a>

                <div class="right menu">

                    <a class="item">
                    <Link to="/login" className="link" >Login</Link>

                        {/* <h3>Login</h3> */}
                    </a>

                </div>
                </div>
                </div>
            // </div>
            );
        }
    }
 
export default Navbar;