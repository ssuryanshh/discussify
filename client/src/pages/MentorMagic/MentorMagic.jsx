import React from 'react'
import "./MentorMagic.css"
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
function MentorMagic() {
  return (
    <div className='mentormagic-container'>
      <div className='mentormagic-head'>
        <center><h2 className='mentor'>MentorMagic</h2></center>
        <div  className='avatars'>  
          <Avatar>SS</Avatar>
        </div>

      </div>
      <div className='mentormagic-main'>
        <div className='mentor-main-container'>
          <div className='mentor-container'>
            <h1 className='mentor'>Mentor Profiles</h1>
            <div className='mentor-profile-container'>
              <div className='mentor-profile'>
                <Avatar className='mentor'>MM</Avatar>
                <h3 className='mentor'>MentorName</h3>
                <p className='mentor'>Area of expertise</p>
                <Button size = 'small' variant='contained' color='warning'>Request Mentorship</Button>
              </div>
              <div className='mentor-profile'>
                <Avatar className='mentor'>MM</Avatar>
                <h3 className='mentor'>MentorName</h3>
                <p className='mentor'>Area of expertise</p>
                <Button size = 'small' variant='contained' color='warning'>Request Mentorship</Button>
              </div>
              <div className='mentor-profile'>
                <Avatar className='mentor'>MM</Avatar>
                <h3 className='mentor'>MentorName</h3>
                <p className='mentor'>Area of expertise</p>
                <Button size = 'small' variant='contained' color='warning'>Request Mentorship</Button>
              </div>
            
            </div>
          </div>
        </div>
        <div className='mentee-main-container'>
          <div className='mentee-container'>
            <h1 className='mentor'>Mentee Profiles</h1>
            <div className='mentee-profile-container'>
              <div className='mentee-profile'>
                <Avatar className='mentor'>MM</Avatar>
                <h3 className='mentor'>MenteeName</h3>
                <p className='mentor'>Field of Interest</p>
                <div className='mentor-btn'>
                  <div>
                  <Button size='small' variant='contained' color='error'>Reject Mentorship Request</Button>
                  </div>
                  <div>
                  <Button size='small' variant='contained' color='success'>Accept Mentorship Request</Button>
                  </div>
                </div>
              </div>
              <div className='mentee-profile'>
                <Avatar className='mentor'>MM</Avatar>
                <h3 className='mentor'>MenteeName</h3>
                <p className='mentor'>Field of Interest</p>
                <div className='mentor-btn'>
                  <div>
                  <Button size='small' variant='contained' color='error'>Reject Mentorship Request</Button>
                  </div>
                  <div>
                  <Button size='small' variant='contained' color='success'>Accept Mentorship Request</Button>
                  </div>
                </div>
              </div>
              <div className='mentee-profile'>
                <Avatar className='mentor'>MM</Avatar>
                <h3 className='mentor'>MenteeName</h3>
                <p className='mentor'>Field of Interest</p>
                <div className='mentor-btn'>
                  <div>
                  <Button size='small' variant='contained' color='error'>Reject Mentorship Request</Button>
                  </div>
                  <div>
                  <Button size='small' variant='contained' color='success'>Accept Mentorship Request</Button>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default MentorMagic
