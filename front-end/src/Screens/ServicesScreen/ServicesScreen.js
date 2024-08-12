import React from 'react'
import "./ServicesScreen.css"
const services = [
    {
        title : "ClarityHub : Doubt Clearing Platform",
        desc: `EdUnity's Discussion Forum is the heart of collaborative
                learning. Here, students from different regions come together to
                share their knowledge, ask questions, and engage in discussions.
                Users can express themselves through various mediums, including
                text, stickers, emojis, and even voice messages. The platform
                fosters a sense of community, connecting minds across
                geographical boundaries and promoting a vibrant exchange of
                ideas.`,
        image: "https://res.cloudinary.com/dg6yoc2r4/image/upload/v1722795184/edUnity/r7cn1a7zp3b4uasysyfh.png",
    },

    {
        title : " MentorMagic : Guidance and Mentoring Space",
        desc: `EdUnity's Discussion Forum is the heart of collaborative
                learning. Here, students from different regions come together to
                share their knowledge, ask questions, and engage in discussions.
                Users can express themselves through various mediums, including
                text, stickers, emojis, and even voice messages. The platform
                fosters a sense of community, connecting minds across
                geographical boundaries and promoting a vibrant exchange of
                ideas.`,
        image: "https://res.cloudinary.com/dg6yoc2r4/image/upload/v1722795184/edUnity/pshxcyggwl3gka0bdbgx.jpg",
    },
    {
        title : "TalkSphere :Discussion Forum",
        desc: `EdUnity's Discussion Forum is the heart of collaborative
                learning. Here, students from different regions come together to
                share their knowledge, ask questions, and engage in discussions.
                Users can express themselves through various mediums, including
                text, stickers, emojis, and even voice messages. The platform
                fosters a sense of community, connecting minds across
                geographical boundaries and promoting a vibrant exchange of
                ideas.`,
        image: " https://res.cloudinary.com/dg6yoc2r4/image/upload/v1722795184/edUnity/j4nuc02r89jmoujt834d.jpg",
    },
    {
        title : "LearnLab : Access the Best Educational Resources",
        desc: ` EdUnity's Academic Forum serves as a comprehensive resource hub.
                Users can discover top-notch notes, tutorial videos, and
                practice questions sourced from across the internet. This
                curated collection ensures that students have access to
                high-quality educational materials, aiding them in their studies
                and academic growth.`,
        image: "https://res.cloudinary.com/dg6yoc2r4/image/upload/v1722795184/edUnity/jua6qivnre4iledaanod.jpg",
    },
    {
        title : "JoyJunction : Unwind and Relax",
        desc: ` Recognizing the importance of relaxation, the Stress Relief
                Space offers a unique opportunity for users to unwind. Engage in
                fun games, quizzes, or enjoy light reading materials available
                on the website. This feature aims to provide a mental break,
                promoting stress relief and creating a balanced and enjoyable
                user experience.`,
        image: "https://res.cloudinary.com/dg6yoc2r4/image/upload/v1722795184/edUnity/wapyi3hp2zdpbkgygmwn.jpg",
    },
]
function ServicesScreen() {
  return (
    <div className='services-screen-container'>
      <div className='services-content-container'>
        {services.map((item,key)=>(
            <div key={key} className='services-container'>
                <div className='services-content'>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
                <div className='services-image'>
                    <img src={item.image} alt={item.title} />
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesScreen
