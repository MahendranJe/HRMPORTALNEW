import React from "react";
import '../Styles.css'
import componentImage from '../Images/Component.png'
import logo from '../Images/Frame 9919.png'
import { useNavigate } from "react-router-dom"; 

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className="signin-container">
      <div className="signin-row">
        <div className="signin-form-container">
          <div className="signin-logo">
            <img src={logo} alt="Your Logo" className="logo-img" />
          </div>
          <h1>Sign Into</h1>
          <h4>Your Account</h4>
          <form className="signin-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Company ID" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="btn-signin" onClick={handleSignIn}>Sign in</button>
          </form>
        </div>
        <div className="signin-image-container">
          <img src={componentImage} alt="Decorative" className="decorative-img" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
