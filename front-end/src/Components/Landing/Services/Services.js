import React from "react";
import "./Services.css"

const data = [
    {
        first: "ClarityHub",
        second: "Stuck on a challenging problem? Post your academic doubts, whether in text or image format, and receive answers from the community."
    },
    {
        first: "MentorMagic",
        second: "Need advice beyond academics? Connect with mentors who can guide you in making informed decisions about your future."
    },
    {
        first: "TalkSphere",
        second: "Engage in meaningful discussions with peers from different regions. Share your insights, ask questions, and connect with like-minded individuals."
    },
    {
        first: "LearnLab",
        second: "Explore a curated collection of the best notes, tutorial videos, and practice questions available on the internet."
    },
    {
        first: "JoyJunction",
        second: "Take a break from studies and relax in our Stress Relief Space. Engage in fun games, quizzes, or read light material available on the website."
    },
]
function Services() {
  return (
    <div className="home-service-container">
      <div className="home-service-header">
        <h2>Our Services</h2>
      </div>
      <div className="home-service-body">
        {data.map((item,key)=>(
            <div key = {key} class="home-service-card">
            <div class="first-content">
              <span>{item.first}</span>
            </div>
            <div class="second-content">
              <span>{item.second}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
