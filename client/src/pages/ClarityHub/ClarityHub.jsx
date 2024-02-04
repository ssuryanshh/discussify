import React from 'react';
import "./ClarityHub.css";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
function ClarityHub() {
  return (
<div className='clarity-hub-container'>
  <div className='clarity-head'>
    <h1 className='clarity'>ClarityHub</h1>
    <div className='clarity-search'>
      <input className="clarity" type='text' placeholder='Search Questions....'></input>
    </div>
    <div  className='avatars'>  
    <Avatar>SS</Avatar>
    </div>
  </div>
  <div className='clarity-main-container'>
  <div className='clarity-main'>
    <div className='gap'>
      <section>
        <h2 className='clarity'>Categories</h2>
        <div className='categories'>
          <Chip label= "HTML"/>
          <Chip label= "JavaScript"/>
          <Chip label= "React"/>
          <Chip label= "Node"/>
          <Chip label= "C++"/>
          <Chip label= "Java"/>
          <Chip label= "DSA"/>
          <Chip label= "Automata"/>
        </div>
      </section>
      <section>
        <h2 className='clarity'>Ask a Question</h2>
        <div className='doubt'>
          <textarea className= "clarity" placeholder='Type your question here'/>
        </div>
        <Button className ="ask" variant='contained'>Submit</Button>
      </section>
      <section>
        <h2 className='clarity'>Recent Questions</h2>
        <div className='gap'>
          <div className='question-container'>
            <div className='question'>
              <Avatar>RG</Avatar>
              <div>
                <h3 className='clarity'>Rituraj Goswami</h3>
                <p className='time'>2 hours ago</p>
              </div>
            </div>
            <p className='question'>What is the difference between == and === in JavaScript?</p>
            <Button className ="ask" variant='contained'>Respond</Button>
          </div>
          <div className='question-container'>
            <div className='question'>
              <Avatar>MR</Avatar>
              <div>
                <h3 className='clarity'>Mayur Rai</h3>
                <p className='time'>3 hours ago</p>
              </div>
            </div>
            <p className='question'>How to use async/await in JavaScript?</p>
            <Button className ="ask" variant='contained'>Respond</Button>
          </div>
        </div>
      </section>
      </div>
      </div>
      <aside>
        <section>
          <h2 className='clarity'>Prevoius Question</h2>
          <div className='gap'>
            <p className='question'>How to use hooks in React?</p>
            <p className='question'> What is context in JavaScript?</p>
            <p className='question'>How to handle state in Vue?</p>
            <p className='question'>What is polymorphism in Java?</p>
          </div>
        </section>
        <section>
          <h2 className='clarity'>Updates</h2>
          <div className='gap'>
            <p className="question">John Doe liked your answer</p>
            <p className="question">Your question got 3 new answers</p>
            <p className="question">Jane Doe started following you</p>
            <p className="question">Your answer was marked as the best answer</p>
          </div>
        </section>
      </aside>
  </div>
  </div>
  )
}
export default ClarityHub