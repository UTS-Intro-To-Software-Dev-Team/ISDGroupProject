import React from "react";

function Login (){
    return (
        <div>
            <h1>
                Login Page
            </h1>
            <form>
                <label className="App-form">Username:</label>
                <input className="App-form" id="username"/>
                <br/>
                <label className="App-form">Password:</label>
                <input type="password" className="App-form" id="password"/>
                <br/>
                <input className="App-form-button" type="submit" value="Login"/>
            </form>
        </div>

    )
}

export default Login