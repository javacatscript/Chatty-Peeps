import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <div className="div--formContainer">
        <div className="div--formWrapper">
          <span className="span--logo">Chatty Peeps</span>
          <span className="span--title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="test--details">
        <ul>
         <p>  Credentials for testing: </p> 
          <li>
            <div>
              <span>user@gmail.com</span>
              <span> | </span>
              <span>user123</span>
            </div>
          </li>

          <li>
            <div>
              <span>test@gmail.com</span>
              <span> | </span>
              <span>Test@123</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Login;
