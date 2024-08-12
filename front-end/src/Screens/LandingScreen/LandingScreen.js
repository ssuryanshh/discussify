import React from 'react'
import HeroSection from '../../Components/Landing/HeroSection/HeroSection'
import Services from '../../Components/Landing/Services/Services'
import "./LandingScreen.css"
function LandingScreen() {
  return (
    <div className='landing-screen-container'>
        <HeroSection/>     
        <Services/>
    </div>
  )
}

export default LandingScreen
