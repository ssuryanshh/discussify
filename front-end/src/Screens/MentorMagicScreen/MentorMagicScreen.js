import React from 'react'
import Mentee from '../../Components/MentorMagic/Mentee/Mentee'
import Mentor from '../../Components/MentorMagic/Mentor/Mentor'
import "./MentorMagicScreen.css"
import PageHeader from '../../Components/Common/PageHeader/PageHeader'
function MentorMagicScreen({userInfo}) {
  return (
    <div className='mentor-magic-screen-container'>
            <div className="mentor-magic-screen-header">
            <PageHeader headerText={"MentorMagic"} content={"Seek senior's Guidance and guide Juniors"} username={userInfo.username}/>
            </div>
    <div className='mentor-magic-container'>
      <Mentor userId = {userInfo.userId}/>
      <Mentee userId = {userInfo.userId}/>
      </div>
      
      
    </div>
  )
}

export default MentorMagicScreen
