import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    toast.success(`${isLogin ? "Switched to Sign Up" : "Switched to Login"}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info(`${isLogin ? "Logging in" : "Signing up"}...`);
  };

  return (
    <div className="form-container-login-signin">
      <div className="form-card">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <div className="separator">--------------------------- OR ----------------------------</div>

        <div className="social-login">
          <button className="social-btn google-btn" onClick={() => toast.success("Google login")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.4 0 6.4 1.2 8.8 3.2l6.6-6.6C34.6 2.2 29.6 0 24 0 14.4 0 6.4 5.8 2.6 14.2l7.8 6.1C12.4 14 17.6 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.6c-.6 3.2-2.5 5.8-5.4 7.6l8 6.1c4.7-4.3 7.4-10.6 7.4-17.9z"/>
              <path fill="#FBBC05" d="M10.4 28.6c-1.1-3.2-1.1-6.8 0-9.9l-7.8-6.1c-3.4 6.6-3.4 14.5 0 21.1l7.8-6.1z"/>
              <path fill="#EA4335" d="M24 48c6.4 0 12.1-2.1 16.1-5.8l-8-6.1c-2.2 1.5-5 2.4-8.1 2.4-6.4 0-11.9-4.3-13.8-10.1l-7.8 6.1C7.9 42.2 15.3 48 24 48z"/>
            </svg>
            Continue with Google
          </button>

          <button className="social-btn apple-btn" onClick={() => toast.success("Apple login")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="white" d="M19.7 12.6c-.1-2.1 1.8-3.2 1.9-3.3-1.1-1.5-2.8-1.7-3.4-1.7-1.5-.2-3 .9-3.8.9s-2-.8-3.3-.8c-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.6 1.2 10 .8 1.2 1.7 2.5 2.9 2.5 1.2 0 1.6-.8 3.3-.8s2 .8 3.3.8c1.3 0 2.1-1.2 2.9-2.4.9-1.2 1.2-2.3 1.2-2.3-.1 0-2.3-.9-2.3-3.4z"/>
              <path fill="white" d="M16.5 2.7c.7-.8 1.2-1.8 1-2.7-1 .1-2.2.7-2.9 1.5-.7.8-1.3 1.8-1.1 2.7 1.1 0 2.2-.6 3-1.5z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        <p className="switch-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</span>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginSignup;
