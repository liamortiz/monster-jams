import React from 'react';  
import Footer from './Footer';

class Login extends React.Component {
    state = {  
        username: "",
        password: "",
        nameNew: "",
        usernameNew: "",
        passwordNew: "",
        confirmpasswordNew: ""
    }

    handleChange = e => {
        this.setState(
            {[e.target.name] : e.target.value}
        )
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {accepts: 'application/json', 'Content-Type' : 'application/json'},
            body: JSON.stringify({user: {username: this.state.username, password: this.state.password}})

        }).then(resp => 
            resp.json()
            ).then(data => {
            console.log(data);
        })
    }

    handleSignUpSubmit = e => {
        e.preventDefault()
        console.log("User signs up and should be directed back to homepage")
        // this.props.changeView("home")
    }

    render() { 
        return (  
            <>
<div class="ui segment">
<div class="ui two column very relaxed grid">
<div class="column">




                <div class="ui form" onSubmit={this.handleLoginSubmit}>
                    <form action="#">
                    <h2 style={{ color: 'green' }}>Login</h2>
                <div class="text-input">
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="username" placeholder="Username" style={{width: "250px"}}/>
                    <span class="separator"> </span><br></br><br></br>
                </div>   
                <div class="text-input">
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" placeholder="Password" style={{width: "250px"}}/>
                    <span class="separator"> </span><br></br><br></br>
                </div>  
                <div class="form-bottom">
                    <input type="submit" id="submit" value="Login" class="ui green button" style={{width: "150px"}}/><p></p>
                </div>
                </form>  
            </div>
        {/* </div> */}

</div>

<div class="column">


{/* <div class="ui centered row">
<div class="ui centered column"> */}

  {/* <div class="ui floated segment"> */}

  <div class="ui form" onSubmit={this.handleSignUpSubmit}>
                    <form action="#">
                    <h2 style={{ color: 'green' }}>Sign Up</h2>
                    {/* <div class="text-input"> */}
                    {/* <input type="text" name="nameNew" value={this.state.nameNew} onChange={this.handleChange} id="name" placeholder="Name" style={{width: "250px"}}/> */}
                    {/* <span class="separator"> </span><br></br><br></br> */}
                {/* </div> */}
                
                <div class="text-input">
                    <input type="text" name="usernameNew" value={this.state.usernameNew} onChange={this.handleChange} id="username" placeholder="Username" style={{width: "250px"}}/>
                    <span class="separator"> </span><br></br><br></br>
                </div>   
                <div class="text-input">
                    <input type="password" name="passwordNew" value={this.state.passwordNew} onChange={this.handleChange} id="password" placeholder="Password" style={{width: "250px"}}/>
                    <span class="separator"> </span><br></br><br></br>
                </div>
                <div class="text-input">
                    <input type="password" name="confirmpasswordNew" value={this.state.confirmpasswordNew} onChange={this.handleChange} id="confirmpassword" placeholder="Confirm Password" style={{width: "250px"}}/>
                    <span class="separator"> </span><br></br><br></br>
                </div>  
                <div class="form-bottom">
                    <input type="submit" id="submit" value="Create Account" class="ui green button" style={{width: "150px"}}/><p></p>
                </div>
                </form>  
  </div>

{/* </div> */}


</div>


<div class="ui vertical divider">
    <h3>or</h3>
  </div>

</div>
<Footer />
</div>


{/* </div> */}

</>



            
        );
    }
}
 
export default Login;