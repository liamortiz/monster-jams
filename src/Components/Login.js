import React from 'react';  

class Login extends React.Component {
    state = {  }
    render() { 
        return (  
            <div class="ui form">
                <form action="#">
                <div class="text-input">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="" />
                    <span class="separator"> </span>
                </div>   
                <div class="text-input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="" />
                    <span class="separator"> </span>
                </div>  
                <div class="form-bottom">
                    <input type="submit" id="submit" value="Submit"  />  
                <a href="https://hub.docker.com/login/" class="original-src">Original Source</a>
                </div>
                </form>  
            </div>
        );
    }
}
 
export default Login;