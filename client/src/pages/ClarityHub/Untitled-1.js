import React from "react";
import "./ClarityHub.css";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { Navigate, NavLink } from "react-router-dom";


function ClarityHub() {
  const history = useHistory();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      userInitials: "RG",
      username: "Rituraj Goswami",
      timestamp: "2 hours ago",
      text: "What is the difference between == and === in JavaScript?",
    },
    {
      id: 2,
      userInitials: "MR",
      username: "Mayur Rai",
      timestamp: "3 hours ago",
      text: "How to use async/await in JavaScript?",
    },
    
  ]);

  const handleRespondClick = (questionId) => {
    // Use history.push to navigate to the ClarityHub_Answers page with questionId
    history.push({
      pathname: "/clarity_hub_answers",
      state: { questionId },
    });
  };

  return (
    <div className="clarity-hub-container">
      {/* ... (other parts of the component) */}
      <section className="recent-question">
        <h2 className="clarity">Recent Questions</h2>
        <div className="gap-question">
          {questions.map((question) => (
            <div className="question-container" key={question.id}>
              <div className="question">
                <Avatar>{question.userInitials}</Avatar>
                <div>
                  <h3 className="clarity">{question.username}</h3>
                  <p className="time">{question.timestamp}</p>
                </div>
              </div>
              <p className="question">{question.text}</p>
              <Button
                className="ask"
                variant="contained"
                onClick={() => handleRespondClick(question.id)}
              >
                Respond
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ClarityHub;
