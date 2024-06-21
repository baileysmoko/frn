import React from 'react';
import team from './Images/Team.png';
import ayla from './Images/Ayla.png';
import emma from './Images/Emma.png';
import seth from './Images/Seth.png';
import alex from './Images/Alex.png';
import suzie from './Images/Suzie.png';
import david from './Images/David.png';
import athena from './Images/Athena.png';
import ran from './Images/Ran.png';
import bailey from './Images/Bailey.png';

function About() {
  const people = [
    { name: "Ayla Kim", introduction: "I’m a junior at Brown from New Jersey, concentrating in Behavioral Decision Sciences + Public Policy Economics! I’ve been on the FRN E-Board for a year now, having joined the organization as a volunteer driver my freshman year. My favorite hobby is (you guessed it) going for long drives.", image: ayla },
    { name: "Emma Weech", introduction: "I’m a junior at Brown, concentrating in Environmental Studies and International and Public Affairs! My hometown is Nassau, Bahamas and I’ve been on the FRN E-Board since the spring term of my first year. Since joining FRN, I have enjoyed collaborating with and learning from various community members and organizations who are working to combat food insecurity in Providence and beyond.", image: emma },
    { name: "Seth Peiris", introduction: "I’m a sophomore at Brown from Maplewood, NJ, studying Applied Math-Economics and History! Coming to a college campus, I realized that the sheer amount of nutritious food discarded each day had so much potential to help our local communities fight food insecurity. Besides the work I do for FRN, I love to sing and hike!", image: seth },
    { name: "Alex Zeng", introduction: "I’m a junior at Brown from Dallas, Texas, studying biochemistry and archaeology.", image: alex },
    { name: "David Veloso", introduction: "I’m a sophomore at Brown from Baltimore, Maryland, studying Mechanical Engineering. This is my first semester on FRN E-board!  Through FRN, I’ve learned so much about food insecurity around Providence and how much impact one shift can have on the community.  Outside of FRN, I love running and watching anime and basketball.", image: david },
    { name: "Athena Deng", introduction: "I’m a first-year at Brown (currently) concentrating in Computer Science and Cognitive Neuroscience! I’m from the Chicago suburbs and this is my first semester on FRN e-board.", image: athena },
    { name: "Ran Zhao", introduction: "I’m a freshman at Brown from Hong Kong studying comparative literature! This is my first semester on FRN E-board, and it’s been so wonderful both seeing the amount of food we’re able to rescue and interacting with community partners to learn about their approaches to tackling food insecurity. Outside of FRN, I love drawing and thinking about frogs.", image: ran },
    { name: "Bailey Smoko", introduction: "I am a sophomore at Brown from Connecticut studying statistics and math-cs. I have always been passionate about promoting sustainability, so FRN has been an amazing way for me to help make a difference. In my free time, I like to play basketball, solve Rubik's cubes, and play music.", image: bailey },
    // Add more people as needed
  ];

  return (
    <div style={{ backgroundColor: 'white', position: "relative" }}>
      <div style={{ overflow: "hidden" }}>
        <img src={team} alt="Team Photo" style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "50% 25%", filter: "brightness(0.8)" }} /> {/* Team photo at the top */}
        <h1 style={{ fontFamily: "'Abel', sans-serif", position: "absolute", top: "9%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "60px" }}>OUR TEAM</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{ maxWidth: "800px", marginLeft: "200px" }}>
          <p style={{ textAlign: "left", fontSize: "24px", fontWeight: "bold", lineHeight: "1.5", padding: "10px 0" }}>FRN BROWN TEAM:</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
            {people.map(person => (
              <div key={person.name} style={{ margin: "10px", display: "flex", alignItems: "center" }}>
                <img src={person.image} alt={person.name} style={{ width: "200px", height: "200px" }} />
                <div style={{ marginLeft: "20px" }}>
                  <h3>{person.name}</h3>
                  <p style={{ fontSize: "18px", lineHeight: "1.4" }}>{person.introduction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;