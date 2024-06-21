import React from 'react';
import food from './Images/Food.png';

function Purpose() {
  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${food})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '68vh', // Adjust the height here
    width: '100%',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%', // Position the text vertically at 50% of the container
    left: '50%', // Position the text horizontally at 50% of the container
    transform: 'translate(-50%, -50%)', // Center the text both vertically and horizontally
    color: 'white', // Set the text color to white
    fontSize: '60px', // Set the font size of the text
    fontWeight: 'bold', // Set the font weight of the text
    textAlign: 'center', // Align the text to the center
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
  };

  const messageStyle = {
    textAlign: 'center', 
    color: 'black', 
    marginTop: '50px', // Adjust margin-top for vertical positioning
    marginLeft: 'auto', // Center horizontally
    marginRight: 'auto', // Center horizontally
    width: '80%', // Adjust width to fit your design
    fontSize: '30px', // Set the font size of the text
  };

  const subTextStyle = {
    marginTop: '20px', // Adjust margin-top for vertical positioning
    fontSize: '50px', // Set the font size of the text
  };

  const additionalMessageStyle = {
    marginTop: '20px', // Adjust margin-top for vertical positioning
    fontSize: '30px', // Set the font size of the text
  };

  const volunteerMessageStyle = {
    marginTop: '20px', // Adjust margin-top for vertical positioning
    fontSize: '30px', // Set the font size of the text
    fontStyle: 'italic',
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={textStyle}>
          WHAT WE DO
        </div>
      </div>
      <div style={messageStyle}>
        Food Recovery Network (FRN) unites 6,000+ college students, food suppliers, farmers, and local businesses across the U.S. in the fight against climate change and hunger by recovering surplus food from across the supply chain and donating it to local nonprofit organizations that feed people experiencing hunger.
        <div style={subTextStyle}>
          What does FRN at Brown do?
        </div>
        <div style={additionalMessageStyle}>
          We take the leftover dining hall food and deliver it to people in need. We have over 50 volunteers at Brown who help to weigh and deliver food to reduce food insecurity in Providence and reduce food waste.
        </div>
        <div style={volunteerMessageStyle}>
          What can you do to help? <br />
          You can volunteer for shifts to deliver food. It is a very low time commitment and you can make a big difference in people's lives.
        </div>
      </div>
    </div>
  );
}

export default Purpose;