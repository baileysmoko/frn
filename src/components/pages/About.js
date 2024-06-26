import React from 'react';
import team from './Images/Team.png';
import ayla from './Images/Ayla.png';
import emma from './Images/Emma.png';
import seth from './Images/Seth.png';
import alex from './Images/Alex.png';
// import suzie from './Images/Suzie.png';
import david from './Images/David.png';
import athena from './Images/Athena.png';
import ran from './Images/Ran.png';
import bailey from './Images/Bailey.png';

import Footer from '../Footer';

import { useEffect } from 'react';

function About() {
  const people = [
    { name: "Ayla Kim", introduction: "I’m a junior at Brown from New Jersey, concentrating in Behavioral Decision Sciences + Public Policy Economics! I’ve been on the FRN E-Board for a year now, having joined the organization as a volunteer driver my freshman year. My favorite hobby is (you guessed it) going for long drives.", image: ayla },
    { name: "Emma Weech", introduction: "I’m a junior at Brown, concentrating in Environmental Studies and International and Public Affairs! My hometown is Nassau, Bahamas and I’ve been on the FRN E-Board since the spring term of my first year. Since joining FRN, I have enjoyed collaborating with and learning from various community members and organizations who are working to combat food insecurity in Providence and beyond.", image: emma },
    { name: "Seth Peiris", introduction: "I’m a sophomore at Brown from Maplewood, NJ, studying Applied Math-Economics and History! Coming to a college campus, I realized that the sheer amount of nutritious food discarded each day had so much potential to help our local communities fight food insecurity. Besides the work I do for FRN, I love to sing and hike!", image: seth },
    { name: "Alex Zeng", introduction: "I’m a junior at Brown from Dallas, Texas, studying biochemistry and archaeology.", image: alex },
    { name: "David Veloso", introduction: "I’m a sophomore at Brown from Baltimore, Maryland, studying Mechanical Engineering. This is my first semester on FRN E-board!  Through FRN, I’ve learned so much about food insecurity around Providence and how much impact one shift can have on the community.  Outside of FRN, I love running and watching anime and basketball.", image: david },
    { name: "Athena Deng", introduction: "I’m a first-year at Brown (currently) concentrating in Computer Science and Cognitive Neuroscience! I’m from the Chicago suburbs and this is my first semester on FRN e-board.", image: athena },
    { name: "Ran Zhao", introduction: "I’m a sophomore at Brown from Hong Kong studying comparative literature! This is my first semester on FRN E-board, and it’s been so wonderful both seeing the amount of food we’re able to rescue and interacting with community partners to learn about their approaches to tackling food insecurity. Outside of FRN, I love drawing and thinking about frogs.", image: ran },
    { name: "Bailey Smoko", introduction: "I am a junior at Brown from Connecticut studying statistics and math-cs. I have always been passionate about promoting sustainability, so FRN has been an amazing way for me to help make a difference. In my free time, I like to play basketball, solve Rubik's cubes, and play music.", image: bailey },
    // Add more people as needed
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="about-heading-container">
        <div style={{ overflow: "hidden" }}>
          <img src={team} alt="Team Photo" className="about-img" /> {/* Team photo at the top */}
          <h1 className="about-heading">
            OUR TEAM
          </h1>
        </div>
      </div>
      
      <div>
        <h2 className="about-subheading">
          FRN@BROWN
        </h2>
        
        <div className="about-media-container">
          {/* Ayla */}
          <div class="about-media">
            <div class="about-media-headshot">
              <img src={ayla} alt="Ayla"/>
            </div>
            <div class="about-media-content">
              <h4 className="about-media-heading">Ayla Kim</h4>
              <p>
                I’m a senior at Brown from New Jersey, concentrating in Behavioral Decision Sciences + Public Policy Economics! I’ve been on the FRN E-Board for a year now, having joined the organization as a volunteer driver my freshman year. My favorite hobby is (you guessed it) going for long drives.
              </p>
            </div>
          </div>
          
          {/* Emma */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <img src={emma} alt="Emma"/>
            </div>
            <div class="about-media-content about-media-content-flip">
              <h4 className="about-media-heading">Emma Weech</h4>
              <p>
                I’m a senior at Brown, concentrating in Environmental Studies and International and Public Affairs! My hometown is Nassau, Bahamas and I’ve been on the FRN E-Board since the spring term of my first year. Since joining FRN, I have enjoyed collaborating with and learning from various community members and organizations who are working to combat food insecurity in Providence and beyond.
              </p>
            </div>
          </div>
          
          {/* Seth */}
          <div class="about-media">
            <div class="about-media-headshot">
              <img src={seth} alt="Seth"/>
            </div>
            <div class="about-media-content">
              <h4 className="about-media-heading">Seth Peiris</h4>
              <p>
                I’m a junior at Brown from Maplewood, NJ, studying Applied Math-Economics and History! Coming to a college campus, I realized that the sheer amount of nutritious food discarded each day had so much potential to help our local communities fight food insecurity. Besides the work I do for FRN, I love to sing and hike!
              </p>
            </div>
          </div>

          {/* Alex */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <img src={alex} alt="Alex"/>
            </div>
            <div class="about-media-content about-media-content-flip">
              <h4 className="about-media-heading">Alex Zeng</h4>
              <p>
                I’m a senior at Brown from Dallas, Texas, studying biochemistry and archaeology.
              </p>
            </div>
          </div>

          {/* David */}
          <div class="about-media">
            <div class="about-media-headshot">
              <img src={david} alt="David"/>
            </div>
            <div class="about-media-content">
              <h4 className="about-media-heading">David Veloso</h4>
              <p>
                I’m a junior at Brown from Baltimore, Maryland, studying Mechanical Engineering. This is my second semester on FRN E-board!  Through FRN, I’ve learned so much about food insecurity around Providence and how much impact one shift can have on the community.  Outside of FRN, I love running and watching anime and basketball.
              </p>
            </div>
          </div>

          {/* Athena */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <img src={athena} alt="Athena"/>
            </div>
            <div class="about-media-content about-media-content-flip">
              <h4 className="about-media-heading">Athena Deng</h4>
              <p>
              I’m a sophomore at Brown from the Chicago area (currently) studying CS & Cognitive Neuroscience! I joined FRN to not only combat food insecurity and systemic discrimination, but also further my passion for sustainability, and it's been an incredibly rewarding experience–I would highly recommend! For hobbies, I love baking, reading, and playing violin :).
              </p>
            </div>
          </div>

          {/* Ran */}
          <div class="about-media">
            <div class="about-media-headshot">
              <img src={ran} alt="Ran"/>
            </div>
            <div class="about-media-content">
              <h4 className="about-media-heading">Ran Zhao</h4>
              <p>
                I’m a sophomore at Brown from Hong Kong studying comparative literature! This is my second semester on FRN E-board, and it’s been so wonderful both seeing the amount of food we’re able to rescue and interacting with community partners to learn about their approaches to tackling food insecurity. Outside of FRN, I love drawing and thinking about frogs.
              </p>
            </div>
          </div>

          {/* Bailey */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <img src={bailey} alt="Bailey"/>
            </div>
            <div class="about-media-content about-media-content-flip">
              <h4 className="about-media-heading">Bailey Smoko</h4>
              <p>
                I am a junior at Brown from Connecticut studying statistics and math-cs. I have always been passionate about promoting sustainability, so FRN has been an amazing way for me to help make a difference. In my free time, I like to play basketball, solve Rubik's cubes, and play music.
              </p>
            </div>
          </div>
        </div>

        <h2 className="about-subheading">
            OUR PARTNERS
        </h2>

      </div>
      <Footer />
    </div>
  );
}

export default About;