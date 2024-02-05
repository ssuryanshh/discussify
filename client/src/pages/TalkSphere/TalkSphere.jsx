import React, { useState}from 'react'
import "./TalkSphere.css"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
function TalkSphere() {
  const [selectedOption, setSelectedOption] = useState('Global Chat')
  return (
    <div className='talksphere-container'>
      <div className='talk-head'>
      <select className='talksphere' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="Global Chat">Global Chat</option>
          <option value="Category Chat">Category Chat</option>
          <option value="Mentor Chat">Mentor Chat</option>
          <option value="Mentee Chat">Mentee Chat</option>
        </select>
        <h1>TalkSphere</h1>
        <div className='talk-online'>
          <AvatarGroup total={10}>
            <Avatar>A</Avatar>
            <Avatar>S</Avatar>
            <Avatar>R</Avatar>
            <Avatar>M</Avatar>
          </AvatarGroup>
        </div>
      </div>
      <div className='chatbox'>
        
      </div>  
      <div className='send'>
        <textarea className='message' placeholder='Type a message'></textarea>
        <button className='talk' type='submit'>Send</button>
      </div>
    </div>
  )
}

export default TalkSphere
