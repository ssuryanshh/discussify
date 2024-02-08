import React from "react";
import "./dashboard.css";
import { NavLink } from "react-router-dom";
function dashboard() {
  return (
    <div className="left-dashboard ">
      <div className="dashboard">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard">
        <NavLink to="/talk_sphere" className="dash-link">
          TalkSphere
        </NavLink>
      </div>
      <div className="dashboard">
        <NavLink to="/clarity_hub" className="dash-link">
          ClarityHub
        </NavLink>
      </div>
      <div className="dashboard">
        <NavLink to="/mentor_magic" className="dash-link">
          MentorMagic
        </NavLink>
      </div>
      <div className="dashboard">
        <NavLink to="/learn_lab" className="dash-link">
          LearnLab
        </NavLink>
      </div>
      <div className="dashboard">
        <NavLink to="/joy_junction" className="dash-link">
          JoyJunction
        </NavLink>
      </div>
      <div></div>
      <div className="dashboard">
        <h3>Account</h3>
      </div>
      <div className="dashboard">
        <h3>Logout</h3>
      </div>
    </div>
  );
}

export default dashboard;
