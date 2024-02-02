import React from 'react'
import { Link } from 'react-router-dom'
import ClarityHub from './pages/ClarityHub/ClarityHub'
import LearnLab from './pages/LearnLab/Learnlab'
import JoyJunction from './pages/JoyJunction/JoyJunction'
import MentorMagic from './pages/MentorMagic/MentorMagic'
import MindEase from './pages/MindEase/MindEase'
import TalkSphere from './pages/TalkSphere/TalkSphere'
import Account from './pages/Account/Account'

function dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-logo">LOGO</div>
      <div className="dashboard-nav">
        <Link to="/clarity_hub" className={`dashboard-item ${window.location.pathname === '/clarity_hub' && 'dashboard-item-active'}`}>
          ClarityHub
        </Link>
        <Link to="/learn_lab" className={`dashboard-item ${window.location.pathname === '/learn_lab' && 'dashboard-item-active'}`}>
          LearnLab
        </Link>
        <Link to="/joy_junction" className={`dashboard-item ${window.location.pathname === '/joy_junction' && 'dashboard-item-active'}`}>
          JoyJunction
        </Link>
        <Link to="/mentor_magic" className={`dashboard-item ${window.location.pathname === '/mentor_magic' && 'dashboard-item-active'}`}>
          MentorMagic
        </Link>
        <Link to="/mind_ease" className={`dashboard-item ${window.location.pathname === '/mind_ease' && 'dashboard-item-active'}`}>
          MindEase
        </Link>
        <Link to="/talk_sphere" className={`dashboard-item ${window.location.pathname === '/talk_sphere' && 'dashboard-item-active'}`}>
          TalkSphere
        </Link>
        <Link to="/Account" className={`dashboard-item ${window.location.pathname === '/profile' && 'dashboard-item-active'}`}>
          Account
        </Link>
      </div>
      <div className="dashboard-body">
        <Routes>
          <Route path="/clarity_hub" element={<ClarityHub/>}/>
          <Route path="/learn_lab" element={<LearnLab/>}/>
          <Route path="/joy_junction" element={<JoyJunction/>}/>
          <Route path="/mentor_magic" element={<MentorMagic/>}/>
          <Route path="/mind_ease" element={<MindEase/>}/>
          <Route path="/talk_sphere" element={<TalkSphere/>}/>
          <Route path="/Account" element={<Account/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default dashboard