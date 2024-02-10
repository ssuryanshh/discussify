import React from "react";
import "./Services.css";
import doubt from "./doubt.png";
import academic from "./academic.jpg";
import anxiety from "./anxiety.jpg";
import discussion from "./discussion.jpg";
import stress from "./stress.jpg";
import mentor from "./mentorship.jpg";
import { NavLink } from "react-router-dom";
function Services() {
  return (
    <div className="service-container">
      <div className="service">
        <div className="service-content-type">
          <h1 className="service">ClarityHub : Doubt Clearing Platform</h1>
          <div className="service-content-container">
            <div className="service-content">
              <p>
                EdUnity's Discussion Forum is the heart of collaborative
                learning. Here, students from different regions come together to
                share their knowledge, ask questions, and engage in discussions.
                Users can express themselves through various mediums, including
                text, stickers, emojis, and even voice messages. The platform
                fosters a sense of community, connecting minds across
                geographical boundaries and promoting a vibrant exchange of
                ideas.
              </p>
              <NavLink to="/clarity_hub">
                <button className="service-btn" type="button">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div>
              <img src={doubt} className="service"></img>
            </div>
          </div>
        </div>
        <div className="service-content-type">
          <h1 className="service">
            MentorMagic : Guidance and Mentoring Space
          </h1>
          <div className="service-content-container">
            <div className="service-content">
              <p>
                EdUnity's Discussion Forum is the heart of collaborative
                learning. Here, students from different regions come together to
                share their knowledge, ask questions, and engage in discussions.
                Users can express themselves through various mediums, including
                text, stickers, emojis, and even voice messages. The platform
                fosters a sense of community, connecting minds across
                geographical boundaries and promoting a vibrant exchange of
                ideas.
              </p>
              <NavLink to="/mentor_magic">
                <button className="service-btn" type="button">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div>
              <img src={mentor} className="service"></img>
            </div>
          </div>
        </div>
        <div className="service-content-type">
          <h1 className="service">MindEase :Find Support Anonymously</h1>
          <div className="service-content-container">
            <div className="service-content">
              <p>
                Recognizing the importance of mental well-being, edUnity
                introduces the Anxiety Helpdesk. Users facing anxiety or other
                challenges can connect with expert users anonymously. Whether
                through confidential chat sessions or virtual meetings, the
                platform provides a safe space for seeking support and coping
                with stress. This service aims to foster a sense of community
                and understanding around mental health.
              </p>
              <NavLink to="/mind_ease">
                <button className="service-btn" type="button">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div>
              <img src={anxiety} className="service"></img>
            </div>
          </div>
        </div>
        <div className="service-content-type">
          <h1 className="service">TalkSphere :Discussion Forum</h1>
          <div className="service-content-container">
            <div className="service-content">
              <p>
                EdUnity's Discussion Forum is the heart of collaborative
                learning. Here, students from different regions come together to
                share their knowledge, ask questions, and engage in discussions.
                Users can express themselves through various mediums, including
                text, stickers, emojis, and even voice messages. The platform
                fosters a sense of community, connecting minds across
                geographical boundaries and promoting a vibrant exchange of
                ideas.
              </p>
              <NavLink to="/talk_sphere">
                <button className="service-btn" type="button">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div>
              <img src={discussion} className="service"></img>
            </div>
          </div>
        </div>
        <div className="service-content-type">
          <h1 className="service">
            LearnLab : Access the Best Educational Resources
          </h1>
          <div className="service-content-container">
            <div className="service-content">
              <p>
                EdUnity's Academic Forum serves as a comprehensive resource hub.
                Users can discover top-notch notes, tutorial videos, and
                practice questions sourced from across the internet. This
                curated collection ensures that students have access to
                high-quality educational materials, aiding them in their studies
                and academic growth.
              </p>
              <NavLink to="/learn_lab">
                <button className="service-btn" type="button">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div>
              <img src={academic} className="service"></img>
            </div>
          </div>
        </div>
        <div className="service-content-type">
          <h1 className="service">JoyJunction : Unwind and Relax</h1>
          <div className="service-content-container">
            <div className="service-content">
              <p>
                Recognizing the importance of relaxation, the Stress Relief
                Space offers a unique opportunity for users to unwind. Engage in
                fun games, quizzes, or enjoy light reading materials available
                on the website. This feature aims to provide a mental break,
                promoting stress relief and creating a balanced and enjoyable
                user experience.
              </p>
              <NavLink to="/joy_junction">
                <button className="service-btn" type="button">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div>
              <img src={stress} className="service"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
