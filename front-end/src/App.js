import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Common/Navbar/Navbar';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import LandingScreen from './Screens/LandingScreen/LandingScreen';
import AboutScreen from './Screens/AboutScreen/AboutScreen';
import ClarityHubScreen from './Screens/ClarityHubScreen/ClarityHubScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import JoyJunctionScreen from './Screens/JoyJunctionScreen/JoyJunctionScreen';
import LearnLabScreen from './Screens/LearnLabScreen/LearnLabScreen';
import MentorMagicScreen from './Screens/MentorMagicScreen/MentorMagicScreen';
import ServicesScreen from './Screens/ServicesScreen/ServicesScreen';
import TalkSphereScreen from './Screens/TalkSphereScreen/TalkSphereScreen';
import DashboardScreen from './Screens/DashboardScreen/DashboardScreen';
import AnswersScreen from './Screens/AnswersScreen/AnswersScreen';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    isSignin: false,
    userId: '',
    username:'',
    category:'',
    token: ''
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className='app-content'>
          <Routes>
            <Route path="/user" element={<LoginScreen userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route path="/" element={<LandingScreen userInfo = {userInfo} />} />
            <Route path="/about" element={<AboutScreen userInfo = {userInfo} />} />
            <Route path="/clarityhub" element={<ClarityHubScreen userInfo={userInfo} />} />
            <Route path="/contact" element={<ContactScreen userInfo = {userInfo} />} />
            <Route path="/joyjunction" element={<JoyJunctionScreen userInfo = {userInfo} />} />
            <Route path="/learnlab" element={<LearnLabScreen userInfo = {userInfo} />} />
            <Route path="/mentormagic" element={<MentorMagicScreen userInfo = {userInfo} />} />
            <Route path="/services" element={<ServicesScreen userInfo = {userInfo} />} />
            <Route path="/talksphere" element={<TalkSphereScreen userInfo = {userInfo} />} />
            <Route path="/dashboard" element={<DashboardScreen userInfo = {userInfo} />} />
            <Route path='/answer/:id' element={<AnswersScreen userInfo={userInfo}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;