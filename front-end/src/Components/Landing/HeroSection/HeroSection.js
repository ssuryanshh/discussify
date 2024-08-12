import React from 'react'
import "./HeroSection.css"
import { Link } from 'react-router-dom'
function HeroSection() {
  return (
    <div className='hero-section-container'>
        <div className='hero-section-content'>
        <h1>Empower your Education with edUnity</h1>
        <p>edUnity is comprehensive education platform for students providing them all the services they require. </p>
            <p>edUnity is a platform that allows students to learn and  grow through immersive, interactive educational experiences. Our mission is to provide an environment where individuals can interact with each other and grow together</p>
            <p>We try to justify our motto <em>Collaborate. Learn. Grow.</em> by helping students in all the possible way </p>
            <Link to={"/user"} ><button className='hero-section-button'>Get Started</button></Link>
            </div>
        <div className='hero-section-image'>
            <img src='https://res.cloudinary.com/dg6yoc2r4/image/upload/v1722782109/edUnity/home/kcrpxnaymlh1rlgwwufl.jpg'></img>
        </div>      
    </div>
  )
}

export default HeroSection
