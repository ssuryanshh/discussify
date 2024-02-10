import { Button } from "@mui/material";
import React from "react";
import "./ClarityHub_Answers.css";

function ClarityHub_Answers() {
  return (
    <div className="answers-hub-container">
      <div className="answers-hub-head">
        <h1 className="hub-head">ClarityHub</h1>
      </div>
      <div className="answers-hub-main">
        <div className="question-container">
          <h2>Question</h2>
          <p className="clarity-question">Explain the difference between findOne and findMany in MongoDB.</p>
          <p>
            <strong>Posted by : </strong>suryansh
          </p>
        </div>
        <div className="previous-answers">
          <h2>Answers</h2>
          <div className="answer-container">
            <div className="answers-hub">
              <h3>suryansh</h3>
              <p className="answer">findOne: Returns the first document matching your query, or null if none exist. Think of it as finding a single specific item.
findMany: Returns a cursor (like a list) containing all documents matching your query, even if multiple exist. Think of it as searching for and fetching a group of items.</p>
              <p>
                <strong>Posted on : </strong>2/10/2024, 4:57:17 AM
              </p>
            </div>
            <br></br>
            <div className="answers-hub">
              <p className="answer">No more answers to show.....</p>
            </div>
          </div>
          </div>

          <section className="answer">
        <h2 className='clarity'>Post Your Answer</h2>
        <div className='ans'>
          <textarea className= "answer" placeholder='Type your question here'/>
        </div>
        <Button className ="ask" variant='contained'>Submit</Button>
      </section>
            
      

      </div>
    </div>
  );
}

export default ClarityHub_Answers;
