import React, { useState } from "react";
import "./ClarityMain.css";
import { Input } from "antd";
import config from "./../../../config"
const { TextArea } = Input;
const {BASE_API_URL} = config;

function ClarityMain({ userId, onQuestionSubmit }) {
  const [questionText, setQuestionText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_API_URL}/question/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, question_text: questionText }),
      });
      const data = await response.json();
      if (data.success) {
        console.log("Question created successfully!");
        onQuestionSubmit(); // Trigger refresh in parent component
      } else {
        console.error("Error creating question:", data.message);
      }
    } catch (error) {
      console.error("Error creating question:", error);
    }
  };

  return (
    <div className="clarity-main-container">
      <div className="new-question">
        <h2>Ask a question</h2>
        <TextArea
          rows={6}
          cols={100}
          value={questionText}
          onChange={(event) => setQuestionText(event.target.value)}
        />
        <button className="pushable" onClick={handleSubmit}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Submit</span>
        </button>
      </div>
    </div>
  );
}

export default ClarityMain;
