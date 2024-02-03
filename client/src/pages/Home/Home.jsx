import React from 'react'
import "./Home.css"
import theme from "./theme.jpg"
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <>
    <section className='main'>
      <div className='main-container container'>
        <centre>
          <div className='main-data'>
          <div className='text'>
          <div className='main-head'>
            <h1>Empower your Education with edUnity</h1>
          </div>
          <div className='main-content'>
            <p>edUnity is comprehensive education platform for students providing them all the services they require. </p>
            <p>edUnity is a platform that allows students to learn and  grow through immersive, interactive educational experiences. Our mission is to provide an environment where individuals can interact with each other and grow together</p>
            <p>We try to justify our motto <em>Collaborate. Learn. Grow.</em> by helping students in all the possible way </p>
            <NavLink to={'/login'} className="btn">Get Started</NavLink>
          </div></div>
          <center><img src={theme} className='theme'></img></center>
        </div></centre>
      </div>
      </section>
      <section>
      <div className="home-service-container">
      <div className="service-home">
        <div>
          <center><h1 className="type">SERVICES</h1></center>
        </div>
        <div className="type-box">
        <div className="type1">
          <div></div>
          <div>
            <div className="type-container">
              <div className="type-card">
                <div className="type-cover">
                  <p className="type-head">ClarityHub</p>
                </div>
                <div className="type-content">
                  <h2 className="type">ClarityHub</h2>
                  <p className="type-des">Stuck on a challenging problem? Post your academic doubts, whether in text or image format, and receive answers from the community.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div className="type-container">
              <div className="type-card">
                <div className="type-cover">
                  <p className="type-head">MentorMagic</p>
                </div>
                <div className="type-content">
                  <h2 className="type">MentorMagic</h2>
                  <p className="type-des">Need advice beyond academics? Connect with mentors who can guide you in making informed decisions about your future.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div className="type-container">
              <div className="type-card">
                <div className="type-cover">
                  <p className="type-head">MindEase</p>
                </div>
                <div className="type-content">
                  <h2 className="type">MindEase</h2>
                  <p className="type-des">Take care of your mental well-being with our Anxiety Helpdesk. Connect with expert users anonymously to discuss anxiety issues or other challenges.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="type1">
          <div></div>
          <div>
            <div className="type-container">
              <div className="type-card">
                <div className="type-cover">
                  <p className="type-head">TalkSphere</p>
                </div>
                <div className="type-content">
                  <h2 className="type">TalkSphere</h2>
                  <p className="type-des">Engage in meaningful discussions with peers from different regions. Share your insights, ask questions, and connect with like-minded individuals.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div className="type-container">
              <div className="type-card">
                <div className="type-cover">
                  <p className="type-head">LearnLab</p>
                </div>
                <div className="type-content">
                  <h2 className="type">LearnLab</h2>
                  <p className="type-des">Explore a curated collection of the best notes, tutorial videos, and practice questions available on the internet.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div className="type-container">
              <div className="type-card">
                <div className="type-cover">
                  <p className="type-head">JoyJunction</p>
                </div>
                <div className="type-content">
                  <h2 className="type">JoyJunction</h2>
                  <p className="type-des">Take a break from studies and relax in our Stress Relief Space. Engage in fun games, quizzes, or read light material available on the website.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Home
