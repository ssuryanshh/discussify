import "./ClarityHub.css";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import axios from 'axios';


function ClarityHub() {
  const [question, setQuestion] = useState('');
  const [recentQuestions, setRecentQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recent questions when the component mounts
    fetchRecentQuestions();
  }, []);

  const fetchRecentQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/clarityhub/getQuestions');
      setRecentQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching recent questions:', error);
    }
  };

  const handleQuestionSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/clarityhub/postQuestion', {
        question,
      });
      // Fetch the updated questions after posting
      fetchRecentQuestions();
      // Clear the textarea
      setQuestion('');
    } catch (error) {
      console.error('Error posting question:', error);
    }
  };
  const handleRespond = (questionId) => {
    // Navigate to ClarityHub_Answers page with the questionId as a parameter
    navigate(`/clarity_hub_answers/${questionId}`);
  };

  return (
    <div className="clarity-hub-container">
      <div className="clarity-head">
        <h1 className="clarity">ClarityHub</h1>
        <div className="clarity-search">
          <input
            className="clarity"
            type="text"
            placeholder="Search Questions...."
          ></input>
        </div>
        <div className="avatars">
          <Avatar>SS</Avatar>
        </div>
      </div>
      <div className="clarity-main-container">
        <div className="clarity-main">
          <div className="gap">
            <section>
              <h2 className="clarity">Categories</h2>
              <div className="categories">
                <Chip label="HTML" />
                <Chip label="JavaScript" />
                <Chip label="React" />
                <Chip label="Node" />
                <Chip label="C++" />
                <Chip label="Java" />
                <Chip label="DSA" />
                <Chip label="Automata" />
              </div>
            </section>
            <section>
              <h2 className="clarity">Ask a Question</h2>
              <div className="doubt">
                <textarea
                  className="clarity"
                  placeholder="Type your question here"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <Button className="ask" variant="contained" onClick={handleQuestionSubmit}>
                Submit
              </Button>
            </section>
            <section className="recent-question">
              <h2 className="clarity">Recent Questions</h2>
              <div className="gap-question">
                {recentQuestions.map((q) => (
                  <div className="question-container" key={q._id}>
                    <div className="question">
                      <Avatar>{q.username.charAt(0).toUpperCase()}</Avatar>
                      <div>
                        <h3 className="clarity">{q.username}</h3>
                        <p className="time">{new Date(q.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="question">{q.question}</p>
                    <Button
                      className="ask"
                      variant="contained"
                      onClick={() => handleRespond(q._id)}
                    >
                      Respond
                    </Button>
                  </div>
                ))}
              </div>
            </section></div>
        </div>
        <aside>
          <section>
            <h2 className="clarity">Prevoius Question</h2>
            <div className="gap">
              <p className="question">How to use hooks in React?</p>
              <p className="question"> What is context in JavaScript?</p>
              <p className="question">How to handle state in Vue?</p>
              <p className="question">What is polymorphism in Java?</p>
            </div>
          </section>
          <section>
            <h2 className="clarity">Updates</h2>
            <div className="gap">
              <p className="question">John Doe liked your answer</p>
              <p className="question">Your question got 3 new answers</p>
              <p className="question">Jane Doe started following you</p>
              <p className="question">
                Your answer was marked as the best answer
              </p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
export default ClarityHub;
