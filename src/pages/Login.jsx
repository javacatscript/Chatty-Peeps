import React from "react";

const Login = () => {
    return (
        <div className="div--formContainer">
            <div className="div--formWrapper">
                <span className="span--logo">Chatty Peeps</span>
                <span className="span--title">Login</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Log In</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;