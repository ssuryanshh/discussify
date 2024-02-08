import React from "react";
import "./JoyJunction.css";
import dino from "./dino.jpg"
import skribble from "./skribbl.io.jpg";
import street_skater from "./street_skater.png";
import sunset_bike_racer from "./sunset_bike_racer.jpg";
function JoyJunction() {
  return (
    <div className="joyjuction-container">
      <div className="joy-head">
        <h1 className="junction">JoyJunction</h1>
        <p className="joy-head"> relief your stress by enjoying some of our fun activites</p>
      </div>
      <div className="joy-main">
        <div className="games-comntainer">
          <h1 className="joy">Games</h1>
          <div className="games-card-container">
            <div class="game-card">
              <div class="GameImg">
                <div class="Gfooter">
                  <div class="SmallIcon"><img src={dino} className="game-icon"></img></div>
                  <span class="Stars">
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 50.000000 50.000000"
                      height="50.000000pt"
                      width="50.000000pt"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      class="StarIcon"
                    >
                      <g
                        stroke="none"
                        fill="#ebd300"
                        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                      >
                        <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z"></path>
                      </g>
                    </svg>
                    5/5
                  </span>
                  <span class="Descripion">Similar to the original Dino game</span>
                </div>

                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 50.000000 50.000000"
                  height="50.000000pt"
                  width="50.000000pt"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  class="GameIcon"
                >
                  <g
                    stroke="none"
                    fill="#ff5858"
                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                  >
                    <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path>
                  </g>
                </svg>
                <span class="Name">Chrome Dino</span>
              </div>
              <a href="https://chromedino.com/">
              <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Play&nbsp;</span>
                <span aria-hidden="true" class="hover-text">
                  &nbsp;Play&nbsp;
                </span>
              </button>
              </a>
            </div>
            <div class="game-card">
              <div class="GameImg">
                <div class="Gfooter">
                  <div class="SmallIcon"><img src={skribble} className="game-icon"></img></div>
                  <span class="Stars">
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 50.000000 50.000000"
                      height="50.000000pt"
                      width="50.000000pt"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      class="StarIcon"
                    >
                      <g
                        stroke="none"
                        fill="#ebd300"
                        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                      >
                        <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z"></path>
                      </g>
                    </svg>
                    5/5
                  </span>
                  <span class="Descripion">Multiplayer drawing & guessing game</span>
                </div>

                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 50.000000 50.000000"
                  height="50.000000pt"
                  width="50.000000pt"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  class="GameIcon"
                >
                  <g
                    stroke="none"
                    fill="#ff5858"
                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                  >
                    <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path>
                  </g>
                </svg>
                <span class="Name">Scribbl.io</span>
              </div>
              <a href="https://skribbl.io/">
              <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Play&nbsp;</span>
                <span aria-hidden="true" class="hover-text">
                  &nbsp;Play&nbsp;
                </span>
              </button>
              </a>
            </div>
            <div class="game-card">
              <div class="GameImg">
                <div class="Gfooter">
                  <div class="SmallIcon"><img src={sunset_bike_racer} className="game-icon"></img></div>
                  <span class="Stars">
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 50.000000 50.000000"
                      height="50.000000pt"
                      width="50.000000pt"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      class="StarIcon"
                    >
                      <g
                        stroke="none"
                        fill="#ebd300"
                        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                      >
                        <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z"></path>
                      </g>
                    </svg>
                    5/5
                  </span>
                  <span class="Descripion">If you are a fan of bike racing and stunts, this might be the right game.</span>
                </div>

                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 50.000000 50.000000"
                  height="50.000000pt"
                  width="50.000000pt"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  class="GameIcon"
                >
                  <g
                    stroke="none"
                    fill="#ff5858"
                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                  >
                    <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path>
                  </g>
                </svg>
                <span class="Name">Sunset Racer</span>
              </div>
              <a href="https://kamgam.itch.io/sunset-bike-racer-2d-motocross-racing">
              <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Play&nbsp;</span>
                <span aria-hidden="true" class="hover-text">
                  &nbsp;Play&nbsp;
                </span>
              </button>
              </a>
            </div>
            <div class="game-card">
              <div class="GameImg">
                <div class="Gfooter">
                  <div class="SmallIcon"><img src={street_skater} className="game-icon"></img></div>
                  <span class="Stars">
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 50.000000 50.000000"
                      height="50.000000pt"
                      width="50.000000pt"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      class="StarIcon"
                    >
                      <g
                        stroke="none"
                        fill="#ebd300"
                        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                      >
                        <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z"></path>
                      </g>
                    </svg>
                    5/5
                  </span>
                  <span class="Descripion">Street Skater is a retro-style skating game</span>
                </div>

                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 50.000000 50.000000"
                  height="50.000000pt"
                  width="50.000000pt"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  class="GameIcon"
                >
                  <g
                    stroke="none"
                    fill="#ff5858"
                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                  >
                    <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path>
                  </g>
                </svg>
                <span class="Name">Street Skater</span>
              </div>
              <a href="https://armorgames.com/street-skater-game/18047">
              <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Play&nbsp;</span>
                <span aria-hidden="true" class="hover-text">
                  &nbsp;Play&nbsp;
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
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
        <div className="spotify-container"></div>
      </div>
    </div>
  );
}

export default JoyJunction;
