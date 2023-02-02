import React from "react";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chatty Peeps</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign up</button>
                </form>
                <p>Have an account already? Login</p>
            </div>
        </div>
    )
}

export default Register;