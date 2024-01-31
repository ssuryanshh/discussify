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
        <Route path="/about" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/feedback"  element={<Feedback />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/clarity_hub" element={<ClarityHub/>}/>
        <Route path="/collab_learn" element={<CollabLearn/>}/>
        <Route path="/joy_junction" element={<JoyJunction/>}/>
        <Route path="/learn_lab" element={<LearnLab/>}/>
        <Route path="/mentor_magic" element={<MentorMagic/>}/>
        <Route path="/mind_ease" element={<MindEase/>}/>
        <Route path="/talk_sphere" element={<TalkSphere/>}/>
      </Routes>
      <Footer/> 
    </BrowserRouter>
  )}

export default App