import React from 'react'
import Quiz from '../../Components/JoyJunction/Quiz/Quiz'
import Games from '../../Components/JoyJunction/Games/Games'
import "./JoyJunction.css"
import PageHeader from '../../Components/Common/PageHeader/PageHeader'
function JoyJunctionScreen({userInfo}) {
  return (
    <div className='joy-junction-screen-container'>
            <div className="joy-junction-screen-header">
            <PageHeader headerText={"JoyJunction"} content={"Relief your stress by enjoying some of our fun activity"} username={userInfo.username}/>
            </div>
      <div className='joy-junction-main'>
      <Games/>
      <Quiz />
      <div className='music'>
        <h2>Music</h2>
      <iframe style={{"border-radius":"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      </div>
    </div>
  )
}

export default JoyJunctionScreen
