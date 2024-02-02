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
            <NavLink to={'/login'} className="btn">Get Started</NavLink>
          </div></div>
          <center><img src={theme} className='theme'></img></center>
        </div>
      </div>
      </section>
      <section className='services'>
      <center><h1 className='service-head'>Services</h1></center>
      <div className="details">
    <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>ClarityHub</p>
        </div>
        <div class="content">
            <p class="heading">ClarityHub</p>
            <p className='type-text'>Stuck on a challenging problem? Post your academic doubts, whether in text or image format, and receive answers from the community. Earn points, achieve different user tags, and get recognized for your expertise. The best answers come with extra credits, fostering a collaborative learning environment.
</p><br></br>
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
          <p className='type-text'>Need advice beyond academics? Connect with mentors who can guide you in making informed decisions about your future. School students can seek guidance from college mentors, while professionals offer insights to all. Enjoy one-on-one sessions through chat or arrange a virtual meet for personalized mentoring.</p>
          <br></br>
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
          <p className='type-text'>Take care of your mental well-being with our Anxiety Helpdesk. Connect with expert users anonymously to discuss anxiety issues or other challenges. Whether through chat or virtual meet, our platform provides a safe space for seeking support and coping with stress.

</p><br></br>
          
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
          <p className='type-text'>Engage in meaningful discussions with peers from different regions. Share your insights, ask questions, and connect with like-minded individuals. Our forum allows users to exchange ideas through text, stickers, emojis, and even voice messages. Join the conversation and broaden your perspectives.
</p><br></br>
         
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
          <p className='type-text'>Explore a curated collection of the best notes, tutorial videos, and practice questions available on the internet. The Academic Forum is your go-to place for enhancing your knowledge and staying ahead in your academic journey.</p>
          <br></br>
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
          <p className='type-text'>Take a break from studies and relax in our Stress Relief Space. Engage in fun games, quizzes, or read light material available on the website. Recharge your mind and come back to your studies with a fresh perspective.</p>
          <br></br>
        </div>
      </div>
    </div>
    </div>    </section>
    </>
  )
}

export default Home
