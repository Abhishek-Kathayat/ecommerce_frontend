import React from 'react';
import './Homepage.css';
import logo from '../assets/UI_logo.png';
import reactlogo from '../assets/logo.svg';

function Home() {
  return (
    <div class="home_header">
      <div class="navbar">
        <img src={logo} height="120" width="120"/>
        <div class="navlinks">
          <ol>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
          </ol>
        </div>
      </div>
      <div class="home_body">
        <div class="hbody_left">
          <div class="hbody_left_logo">
            <img class="react_logo" src={reactlogo}/>
          </div>
        </div>
        <div class="hbody_right">
          <div class="login_signup_card">
            <div class="card_buttons">
              <span id="login_tab" onClick={self.switch.bind(null, "login")} className={self.state.login ? "white" : "green"}> Login </span>
              <span id="signup_tab" onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "white" : "green"}> Signup </span>
            </div>
            { self.state.login ? <Login/> : null }
            { self.state.signup ? <Signup/> : null }
          </div>
        <div>
      </div>
    </div>
  );
}
export default Home;
