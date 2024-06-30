import React from 'react';
import { useEffect } from 'react';
import Fade from "react-reveal/Fade";

// E-Board Photos
import team from './Images/Team.png';
import ayla from './Images/Ayla.png';
import emma from './Images/Emma.png';
import seth from './Images/Seth.png';
import alex from './Images/Alex.png';
import david from './Images/David.png';
import athena from './Images/Athena.png';
import ran from './Images/Ran.png';
import bailey from './Images/Bailey.png';

// Partner Photos
import PRM from './Images/PRM_logo.png';
import elisha from './Images/Elisha_logo.png';
import sunrise from './Images/SunRise_logo.png';
import BMS from './Images/BMS_logo.png';
import st_stephens from './Images/St_stephens_logo.png';

import Footer from '../Footer';

const fade_duration = 750

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="about-heading-container">
        <div style={{ overflow: "hidden" }}>
          <img src={team} alt="Team" className="about-img" /> {/* Team photo at the top */}
          <h1 className="about-heading">
            OUR TEAM
          </h1>
        </div>
      </div>
      

      <div>
        <h2 className="about-subheading">
          Meet our E-Board!
        </h2>
        
        {/* Board Member Descriptions - Alternating left & right-align */}
        <div className="about-media-container">
          {/* Ayla */}
          <div class="about-media">
              <div class="about-media-headshot">
                <Fade duration={fade_duration}>
                <img src={ayla} alt="Ayla"/>
                </Fade>
              </div>
              <div class="about-media-content">
                <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Ayla Kim</h4>
                <p>
                  I’m a senior at Brown from New Jersey, concentrating in Behavioral Decision Sciences + Public Policy Economics! I’ve been on the FRN E-Board for a year now, having joined the organization as a volunteer driver my freshman year. My favorite hobby is (you guessed it) going for long drives.
                </p>
                </Fade>
              </div>
          </div>
          
          {/* Emma */}
          <div class="about-media about-media-flip">
              <div class="about-media-headshot">
                <Fade duration={fade_duration}>
                  <img src={emma} alt="Emma"/>
                </Fade>
              </div>
            <div class="about-media-content about-media-content-flip">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Emma Weech</h4>
                <p>
                  I’m a senior at Brown, concentrating in Environmental Studies and International and Public Affairs! My hometown is Nassau, Bahamas and I’ve been on the FRN E-Board since the spring term of my first year. Since joining FRN, I have enjoyed collaborating with and learning from various community members and organizations who are working to combat food insecurity in Providence and beyond.
                </p>
              </Fade>
            </div>
          </div>
          
          {/* Seth */}
          <div class="about-media">
            <div class="about-media-headshot">
              <Fade duration={fade_duration}>
                <img src={seth} alt="Seth"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Seth Peiris</h4>
                <p>
                  I’m a junior at Brown from Maplewood, NJ, studying Applied Math-Economics and History! Coming to a college campus, I realized that the sheer amount of nutritious food discarded each day had so much potential to help our local communities fight food insecurity. Besides the work I do for FRN, I love to sing and hike!
                </p>
              </Fade>
            </div>
          </div>

          {/* Alex */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <Fade duration={fade_duration}>
                <img src={alex} alt="Alex"/>
              </Fade>
            </div>
            <div class="about-media-content about-media-content-flip">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Alex Zeng</h4>
                <p>
                  Hi! I’m Alex, and I am a senior at Brown studying Biochemistry and Archaeology and the Ancient World. I grew up in a family that composted all of our scraps for our vegetable garden, so joining FRN@Brown has helped me to continue saving food away from home. I’ve been with FRN for over two years now, and I’m excited to see how far we can go to divert edible food from our dining halls to better serve our local communities. 
                </p>
              </Fade>
            </div>
          </div>

          {/* David */}
          <div class="about-media">
            <div class="about-media-headshot">
              <Fade duration={fade_duration}>
                <img src={david} alt="David"/> 
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">David Veloso</h4>
                <p>
                  I’m a junior at Brown from Baltimore, Maryland, studying Mechanical Engineering. This is my second semester on FRN E-board!  Through FRN, I’ve learned so much about food insecurity around Providence and how much impact one shift can have on the community.  Outside of FRN, I love running and watching anime and basketball.
                </p>
              </Fade>
            </div>
          </div>

          {/* Athena */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <Fade duration={fade_duration}>
                <img src={athena} alt="Athena"/>
              </Fade>
            </div>
            <div class="about-media-content about-media-content-flip">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Athena Deng</h4>
                <p>
                  I’m a sophomore at Brown from the Chicago suburbs studying CS & Cognitive Neuroscience (for now lol). I joined FRN to not only combat food insecurity and systemic discrimination, but also further my passion for sustainability, and it's been an incredibly rewarding experience! I love going on walks, baking, reading, and playing violin–come find me playing in BUO's concerts :)
                </p>
              </Fade>
            </div>
          </div>

          {/* Ran */}
          <div class="about-media">
            <div class="about-media-headshot">
              <Fade duration={fade_duration}>
                <img src={ran} alt="Ran"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Ran Zhao</h4>
                <p>
                I’m a sophomore at Brown from Hong Kong, studying comparative literature! I've been on the e-board since spring semester of my first year, and it's been a privilege working with so many wonderful people who care about food redistribution and are set on making it happen. Outside of FRN, I enjoy painting with gouache and taking long walks.
                </p>
              </Fade>
            </div>
          </div>

          {/* Bailey */}
          <div class="about-media about-media-flip">
            <div class="about-media-headshot">
              <Fade duration={fade_duration}>
                <img src={bailey} alt="Bailey"/>
              </Fade>
            </div>
            <div class="about-media-content about-media-content-flip">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">Bailey Smoko</h4>
                <p>
                  I am a junior at Brown from Connecticut studying statistics and math-cs. I have always been passionate about promoting sustainability, so FRN has been an amazing way for me to help make a difference. In my free time, I like to play basketball, solve Rubik's cubes, and play music.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      
        <div className='about-separator'></div>

        <div>
          <h2 className="about-subheading">
            Meet our Partners!
          </h2>
        </div>

        <div className="about-media-container">
          <div class="about-media">
            <div class="about-media-logo">
              <Fade duration={fade_duration}>
                <img src={PRM} alt="Providence Rescue Mission logo"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">
                  <a href="https://www.providencerescuemission.org"> 
                    Providence Rescue Mission
                  </a>
                </h4>
                <p>
                  Founded in 1999, PRM's mission is to reach the homeless and needy of Rhode Island's urban centers with the Gospel of Jesus Christ while providing physical, emotional, educational and rehabilitative services at no expense to those in need. They are the only emergency shelter in Rhode Island open 24/7 and serve over 7,000 meals a week.
                </p>
              </Fade>
            </div>
          </div>

          <div class="about-media">
            <div class="about-media-logo">
              <Fade duration={fade_duration}>
                <img src={elisha} alt="Elisha Project logo"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">
                  <a href="https://elishaproject.org">
                    Elisha Project
                  </a>
                </h4>
                <p>
                  elisha project description
                </p>
              </Fade>
            </div>
          </div>

          <div class="about-media">
            <div class="about-media-logo">
              <Fade duration={fade_duration}>
                <img src={sunrise} alt="SunRise Forever logo"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">
                  <a href="https://www.sunriseforeverinc.org">
                    SunRise Forever
                  </a>
                </h4>
                <p>
                  SunRise forever description
                </p>
              </Fade>
            </div>
          </div>

          <div class="about-media">
            <div class="about-media-logo">
              <Fade duration={fade_duration}>
                <img src={BMS} alt="Brown Market Shares logo"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">
                  <a href="http://www.brownmarketshares.com">
                    Brown Market Shares
                  </a>
                </h4>
                <p>
                  BMS description
                </p>
              </Fade>
            </div>
          </div>

          <div class="about-media">
            <div class="about-media-logo">
              <Fade duration={fade_duration}>
                <img src={st_stephens} alt="St. Stephen's logo"/>
              </Fade>
            </div>
            <div class="about-media-content">
              <Fade duration={fade_duration}>
                <h4 className="about-media-heading">
                  <a href="https://www.sstephens.org">
                    Saint Stephen's Episcopal Church
                  </a>
                </h4>
                <p>
                  st stephens description
                </p>
              </Fade>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default About;