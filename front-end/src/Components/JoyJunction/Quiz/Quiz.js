import React from 'react'
import "./Quiz.css"
function Quiz() {
  return (
    <div className="quiz-container">
    <h1 className="joy">Fun Quiz</h1>
    <div className="quiz-card-container">
      <div class="quiz-card">
        <div class="quiz-card-details">
          <p class="quiz-title">Quiz 1</p>
          <p class="quiz-body">Can You Guess What Happens Next?</p>
        </div>
        <a href="https://www.proprofs.com/quiz-school/story.php?title=can-you-guess-what-happens-next"><button class="quiz-card-button">Attempt Quiz</button></a>
      </div>
      <div class="quiz-card">
        <div class="quiz-card-details">
          <p class="quiz-title">Quiz 2</p>
          <p class="quiz-body">The First-Year Hogwarts Houses Quiz</p>
        </div>
        <a href="https://www.wizardingworld.com/quiz/the-first-year-hogwarts-houses-quiz"><button class="quiz-card-button">Attempt Quiz</button></a>
      </div>
     <div class="quiz-card">
        <div class="quiz-card-details">
          <p class="quiz-title">Quiz 3</p>
          <p class="quiz-body">The Ultimate Social Media Quiz</p>
        </div>
        <a href="https://premade.outgrow.us/social_media_quiz"><button class="quiz-card-button">Attemp Quiz</button></a>
      </div>
      <div class="quiz-card">
        <div class="quiz-card-details">
          <p class="quiz-title">Quiz 4</p>
          <p class="quiz-body">Flags of the World Quiz!</p>
        </div>
        <a href="https://premade.outgrow.us/flags_of_the_world_quiz"><button class="quiz-card-button">Attempt Quiz</button></a>
      </div>
    
    </div>
  </div>
  )
}

export default Quiz
