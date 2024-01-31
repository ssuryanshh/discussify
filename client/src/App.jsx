import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Feedback from "./pages/Feedback/Feedback";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import Register from "./pages/Register/Register";
import Footer  from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import ClarityHub from "./pages/ClarityHub/ClarityHub";
import CollabLearn from "./pages/CollabLearn/CollabLearn";
import JoyJunction from "./pages/JoyJunction/JoyJunction";
import LearnLab from "./pages/LearnLab/Learnlab";
import MentorMagic from "./pages/MentorMagic/MentorMagic";
import MindEase from "./pages/MindEase/MindEase";
import TalkSphere from "./pages/TalkSphere/TalkSphere";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact/*" element={<Contact />} />
        <Route path="/Feedback"  element={<Feedback />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/ClarityHub" element={<ClarityHub/>}/>
        <Route path="/CollabLearn" element={<CollabLearn/>}/>
        <Route path="/JoyJunction" element={<JoyJunction/>}/>
        <Route path="/LearnLab" element={<LearnLab/>}/>
        <Route path="/MentorMagic" element={<MentorMagic/>}/>
        <Route path="/MindEase" element={<MindEase/>}/>
        <Route path="/TalkSphere" element={<TalkSphere/>}/>
      </Routes>
      <Footer/> 
    </BrowserRouter>
  )}

export default App
