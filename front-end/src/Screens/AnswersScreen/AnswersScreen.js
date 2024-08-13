import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { Input } from "antd";
import "./AnswersScreen.css";
import { useParams } from "react-router-dom";
import PageHeader from "../../Components/Common/PageHeader/PageHeader";

const { TextArea } = Input;

function AnswersScreen({ userInfo }) {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestion = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/question/${id}`
      );
      const data = response.data;
      setQuestion(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const fetchAnswers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/answers/${id}`
      );
      const data = response.data;
      setAnswers(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  }, [id, fetchQuestion, fetchAnswers]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/api/answers/create`,
        {
          user_id: userInfo.userId,
          question_id: id,
          answer_text: newAnswer,
        }
      );
      const data = response.data;
      setAnswers([...answers, data.data]); // Immediately update the state
      setNewAnswer("");
      fetchAnswers(); // Optionally re-fetch the answers to ensure data consistency
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="answers-screen-container">
      <div className="answers-screen-header">
        <PageHeader
          headerText={"ClarityHub"}
          content={"Ask and solve your doubts among youselves"}
          username={userInfo.username}
        />
      </div>
      <div className="answer-screen-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="question-container">
              <h2>Question</h2>
              {question.question_text ? (
                <>
                  <p className="question">{question.question_text}</p>
                  {question.user_id ? (
                    <p className="ques-by">
                      Posted by {question.user_id.username}
                    </p>
                  ) : (
                    <p className="ques-by">Posted by: Unknown user</p>
                  )}
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <h2>Answers</h2>
            <div className="answers-container">
              {answers.map((answer) => (
                <div key={answer._id} className="answer-content">
                  <div className="ans-head">
                    {answer.user_id ? (
                      <>
                        <Avatar>
                          {answer.user_id.username.charAt(0).toUpperCase()}
                        </Avatar>
                        <p>{answer.user_id.username}</p>
                      </>
                    ) : (
                      <p>Unknown user</p>
                    )}
                  </div>
                  <p className="ans">{answer.answer_text}</p>
                  <p className="ans-on">Posted on: {answer.created_at}</p>
                </div>
              ))}
            </div>
            <div className="answer-post">
              <h2>Post your Answer</h2>
              <TextArea
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={3}
                placeholder="Enter your Answer"
              />
              <button className="ans-sub" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default AnswersScreen;
