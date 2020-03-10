import React, { useState } from 'react';
import './Homepage.css';
import logo from '../assets/UI_logo.png';
import reactlogo from '../assets/logo.svg';
import Login from '../components/logincomponent.jsx';
import Signup from '../components/signupcomponent.jsx';

function Home() {
  const [state, setState] = useState({ login: true, signup: false });
  return (
    <div class="home_layout">
      <div class="home_navbar">
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
             <span id="login" onClick={()=> setState({ login: true, signup: false })}
              className={state.login ? "ncolor":"ocolor"}>Login</span>
             <span id="signup" onClick={()=> setState({ login: false, signup: true })}
              className={state.signup ? "ncolor":"ocolor"}>Signup</span>
            </div>
            <div class="card_render">
              { state.login ? <Login/> : null }
              { state.signup ? <Signup/> : null }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
