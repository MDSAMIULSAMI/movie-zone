import React from 'react';
import './Styles/signlog.css';

const SignLog = () => {
    const handleSlideChange = (event) => {
        const loginForm = document.querySelector("form.login");
        const loginText = document.querySelector(".title-text .login");

        if (event.target.id === "login") {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        } else if (event.target.id === "signup") {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        }
    };

    const handleSignupLinkClick = () => {
        const signupbtn1 = document.querySelector("label.signup");
        signupbtn1.click();
    };

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">Login</div>
                    <div className="title signup">Sign Up</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            defaultChecked
                            onChange={handleSlideChange}
                        />
                        <input
                            type="radio"
                            name="slide"
                            id="signup"
                            onChange={handleSlideChange}
                        />
                        <label htmlFor="login" className="slide login">
                            Login
                        </label>
                        <label htmlFor="signup" className="slide signup">
                            Sign Up
                        </label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form action="#" className="login">
                            <div className="field">
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link">
                                <a href="/">Forgot password?</a>
                            </div>
                            <div className="field btn1">
                                <div className="btn1-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">
                                Not a member? <a href="/" onClick={handleSignupLinkClick}>Signup now</a>
                            </div>
                        </form>
                        <form action="#" className="signup">
                            <div className="field">
                                <input type="text" placeholder="User Name" required />
                            </div>
                            <div className="field">
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className="field btn1">
                                <div className="btn1-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignLog;
