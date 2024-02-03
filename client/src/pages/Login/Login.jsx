import React from 'react'
import "./Login.css"
import {NavLink} from "react-router-dom";
function Login() {
  return (
    <div  className="login">
    <div class="wrapper">
      <div class="card-switch">
        <label class="switch">
          <input type="checkbox" class="toggle"></input>
           <span class="slider"></span>
           <span class="card-side"></span>
           <div class="flip-card__inner">
              <div class="flip-card__front">
                 <div class="title">Log in</div>
                 <form class="flip-card__form" action="">
                    <input class="flip-card__input" name="email" placeholder="Email" type="email"></input>
                    <input class="flip-card__input" name="password" placeholder="Password" type="password"></input>
                    <button class="flip-card__btn" >Let`s go!</button>
                 </form>
              </div>
              <div class="flip-card__back">
                 <div class="title">Sign up</div>
                 <form class="flip-card__form" action="">
                    <input class="flip-card__input" placeholder="userame" type="username"></input>
                    <input class="flip-card__input" name="email" placeholder="Email" type="email"></input>
                    <input class="flip-card__input" name="password" placeholder="Password" type="password"></input>
                    <NavLink to ="/register"><button class="flip-card__btn">Confirm!</button></NavLink>
                 </form>
              </div>
           </div>
        </label>
    </div>   
</div>
</div>
  )
}
export default Login
