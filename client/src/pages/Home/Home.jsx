import React from 'react'
import "./Home.css"
import theme from "./theme.jpg"
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <>
    <section className='main'>
      <div className='main-container container'>
        <div className='main-data'>
          <div className='text'>
          <div className='main-head'>
            <h1>Empower your Education with edUnity</h1>
          </div>
          <div className='main-content'>
            <p>edUnity is comprehensive education platform for students providing them all the services they require. </p>
            <p>edUnity is a platform that allows students to learn and  grow through immersive, interactive educational experiences. Our mission is to provide an environment where individuals can interact with each other and grow together</p>
            <p>We try to justify our motto <em>Collaborate. Learn. Grow</em> by helping students in all the possible way </p>
            <NavLink to={'/register'} className="btn">Get Started</NavLink>
          </div></div>
          <center><img src={theme} className='theme'></img></center>
        </div>
      </div>
      </section>
      <section className='services'>
      <h1 className='heading'>Services</h1>
      <div className="details">
    <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>ClarityHub</p>
        </div>
        <div class="content">
          <p class="heading">ClarityHub</p>
          <p>ClarityHub is a service where users can ask their questions to each other and anyone on the platform can answer these questions.</p>
          <NavLink to={'/mind_ease'} className="pages">View More</NavLink>
        </div>
      </div>
      </div>
      <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>MentorMagic</p>
        </div>
        <div class="content">
          <p class="heading">MentorMagic</p>
          <p>MentorMagic is a service where users can seek guidance from their seniors regarding different topics and problems. </p>
          <NavLink to={'/mind_ease'} className="pages">View More</NavLink>
        </div>
      </div>
      </div>
      <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>MindEase</p>
        </div>
        <div class="content">
          <p class="heading">MindEase</p>
          <p>MindEase is a unique ervice of this platform. By availing these service, users can talk to experts during their time of anxiety and low points.</p>
          <NavLink to={'/mind_ease'} className="pages">View More</NavLink>
        </div>
      </div>
      </div>
      <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>TalkSphere</p>
        </div>
        <div class="content">
          <p class="heading">TalkSphere</p>
          <p>TalkSphere is a discussion forum of the platform, where users from all accross the globe can communicate and connect with each other.</p>
          <NavLink to={'/mind_ease'} className="pages">View More</NavLink>
        </div>
      </div>
      </div>
      <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>LearnLab</p>
        </div>
        <div class="content">
          <p class="heading">LearnLab</p>
          <p>This service provides the link to best study resources accross the internet you require during your learning time. </p>
          <NavLink to={'/mind_ease'} className="pages">View More</NavLink>
        </div>
      </div>
      </div>
      <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>JoyJunction</p>
        </div>
        <div class="content">
          <p class="heading">JoyJunction</p>
          <p>If you are having stress, worry not, head to this platform and do some mind relaxing activites or play games to reduce your stress.</p>
          <NavLink to={'/mind_ease'} className="pages">View More</NavLink>
        </div>
      </div>
    </div>
    </div>    </section>
    </>
  )
}

export default Home
