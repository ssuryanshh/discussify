import React from "react";
import "./User.css"
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
function user() {
  return (
    <div className="user-container">
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
        <NavLink to="/user" className="dash-link">
          Account
        </NavLink>
        </div>
      <div className="dashboard">
        <NavLink to="/" className="dash-link">
          Logout
        </NavLink>
        </div>
    </div>
    <section>
        <div className="user-details">
            <div className="user-details-container">
                <div className="profile">
                    <div className="profile-details">
                        <center><Avatar sx={{ width: 150, height: 150, fontSize:100}}>S</Avatar></center>
                        <h2>suryansh</h2>
                    </div>
                    <div className="delete-user">
                        <center><Button color="error" variant="contained">Delete Account</Button></center>
                    </div>
                </div>
                <div className="account-details">
                    <h1 className="user">Welcome, Suryansh</h1>
                    <p className="user">Email : suryanshnextgen@gmail.com</p>
                    <div className="change password">
                    <p className="user">Change password</p>
                    <input type="password" placeholder="Current Password"></input><br/>
                    <input type="password" id="newpass" placeholder="New Password"></input><br/><br/>
                    <Button color="success" variant="contained">Submit</Button>
                    </div>
                    <p className="user"><strong><em>Credits</em>:100</strong></p>
                    <div  class="recent-activity">
                        <h4 className="user">Recent Activity</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default user;
