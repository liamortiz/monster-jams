import React from 'react';  

class Login extends React.Component {
    state = {  }
    render() { 
        return (  
            <div class="ui form">
                <form action="#">
                <div class="text-input">
                    {/* <label for="username">Username</label> */}
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <span class="separator"> </span><br></br><br></br>
                </div>   
                <div class="text-input">
                    {/* <label for="password">Password</label> */}
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <span class="separator"> </span><br></br><br></br>
                </div>  
                <div class="form-bottom">
                    <input type="submit" id="submit" value="Login" class="ui blue button" /><p></p>
                    <span>New to Monster Jams? </span><a href="https://hub.docker.com/login/" class="original-src">Create an Account</a><br></br><br></br><br></br><br></br>
                </div>
                </form>  
            </div>
        );
    }
}
 
export default Login;