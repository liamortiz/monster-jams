import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return (  
            <div class="navbar">
                <div class="ui inverted borderless large blue menu">
                    <a class="item">
                        <Link to="/" className="link">Home</Link>
                    </a>
                    <a class="item">
                        <Link to="/playlists" className="link">Playlists</Link>
                    </a>
                    <div class="right menu">
                        <a class="item">
                            <Link to="/login" className="link" >Login</Link>
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};
 
export default Navbar;