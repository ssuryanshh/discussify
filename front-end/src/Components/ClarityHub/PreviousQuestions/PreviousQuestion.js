import React, { useState, useEffect } from "react";
import "./PreviousQuestion.css";
import { Link } from "react-router-dom";

function PreviousQuestion({ userId, refresh }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/question/user/${userId}`
        );
        const data = await response.json();
        if (data && data.data) {
          setQuestions(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [userId, refresh]); // Re-fetch when userId or refresh changes

  if (loading) {
    return (
      <div className="previous-question-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="previous-question-container">
        <h1>No previous questions</h1>
      </div>
    );
  }

  return (
    <div className="previous-question-container">
      <h1>Previous Questions</h1>
      {questions.map((question, index) => (
        <Link to={`/answer/${question._id}`}>
          <p key={index}>{question.question_text}</p>
        </Link>
      ))}
    </div>
  );
}

export default PreviousQuestion;
