import React from 'react';
import '../App.css'; // Ensure your global styles are imported if necessary
import { Button } from './Button'; // Import your Button component
import './HeroSection.css'; // Import your specific component styles
import { useHistory } from 'react-router-dom';

function HeroSection() {
  const history = useHistory();

  const handleInvolvedClick = () => {
    history.push('/involved');
  };


  const slack = () => {
    window.open('https://app.slack.com/client/T02KCD5F37T/C02KCD5GHFT', '_blank');
  };

  return (
    <div className='hero-container'>
      <video src='/videos/frn20122024.mov' autoPlay loop muted />
      <h1>FOOD RECOVERY NETWORK AT BROWN</h1>
      <p>Fight waste. Feed people.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleInvolvedClick}
          style={{ marginRight: '10px' }} // Add inline style for margin-right
        >
          JOIN OUR TEAM
        </Button>
        <p>&nbsp; &nbsp; &nbsp; </p> {/* Non-breaking space */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={slack}
          style={{ marginLeft: '10px' }} // Add inline style for margin-left
        >
          JOIN OUR SLACK
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;