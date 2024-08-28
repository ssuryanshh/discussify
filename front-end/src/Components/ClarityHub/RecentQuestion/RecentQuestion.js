import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import "./RecentQuestion.css";
import { Link } from "react-router-dom";
import config from "./../../../config"
const {BASE_API_URL} = config;

function RecentQuestion({ category, refresh }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_API_URL}/question/category/${category}`);
        const data = await response.json();
        setQuestions(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [category, refresh]); // Re-fetch when category or refresh changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="recent-question-container">
      <h1> Recent Questions</h1>
      {questions.map((question) => (
        <div key={question._id} className="recent-questions">
          <div className="recent-question-header">
            <Avatar sizes="large">{question.user_id.username[0].toUpperCase()}</Avatar>
            <div className="ques-head">
              <p>{question.user_id.username}</p>
              <p>{new Date(question.created_at).toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="question-content">
            <p>{question.question_text}</p>
            <Link to={`/answer/${question._id}`}>
              <button className="answer-button">Give an Answer</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentQuestion;
