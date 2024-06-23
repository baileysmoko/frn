import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button'; // Import your Button component
function Cards() {
  const handleButtonClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/12FrjTKR6OTZoPPXx7t6NWFnBzCxf_WJt1_t5Vr3Vltk/edit?gid=110689926#gid=110689926', '_blank');
  };
  return (
    <div className='cards'>
      <h2 className='highlight'>
        Founded in 2012, the Food Recovery Network at Brown is the second chapter in the United States to open under the FRN national network
      </h2>
      <hr className='separator' />
      <div className='image-wrapper'>
        <img src='images/graphic-1.jpeg' alt="Food Recovery Network at Brown" className='cards__image'/>
      </div>
      <hr className='separator' />
      <h2 className='hlight'>WHAT WE DO</h2>
 
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          </ul>
          <ul className='items'>
          
        <div className='frn-description'>
            Food Recovery Network at Brown unites students to fight food waste and hunger by recovering surplus perishable food from campus that would otherwise go to waste and donate it to people in need. In addition to recovering food, FRN aims to create community ties both on and off College Hill. We are a group committed to creating a support network and promoting community development while closing the loop in resource distribution. FRN educates the public and our peers about issues surrounding food waste, food insecurity, and homelessness. Our events are always open to the public and encourage discussion. We want to question the structure of the current system and look for creative ways to influence or make significant changes to problematic bureaucracies and private institutions. We are staffed by engaged, driven, and curious minds and encourage collaboration with other student groups, as well as groups and individuals outside the Brown community.
        </div>
        <div className='apple-image'>
          <img src='images/apple.png' alt="Apple Image" className='apple-image' />
        </div>
          </ul>
        </div>
        <hr className='separator' />
        <h2 className='highlight'>
          Since our founding in 2012, Food Recovery Network at Brown has recovered over 120,000 pounds of food! We currently recover from the Blue Room, Ivy Room, Brown RISD Hillel, ERC  Café, and Brown Market Shares.
        </h2>
        <div className='button-container'>
        <button
          className='btns'
          onClick={handleButtonClick}
        >
          POUNDS TO DATE
        </button>
      </div>
        <hr className='separator' />
        <h2 className='hlight'>
          ARTICLES ABOUT FRN@BROWN
        </h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/apples-2.png'
              text='Old Tradition: How Do You Like Them Apples?'
              label='Article'
              path='https://www.foodrecoverynetwork.org/blog/2015/12/17/how-do-you-like-them-apples-gleaning-at-brown-university'
            />
            <CardItem
              src='images/impact.jpg'
              text='Our Impact: How Food Recovery Network At Brown Reduces Food Waste'
              label='Article'
              path='https://ediblerhody.ediblecommunities.com/food-thought/food-recovery-network-how-student-led-organization-reduces-food-waste-brown-university'
            />
            <CardItem
              src='images/food.jpg'
              text='How We Feed R.I. Homeless'
              label='Article'
              path='https://www.browndailyherald.com/article/2012/02/campus-leftovers-feed-r-i-homeless'
            />
          </ul>
        </div>
      </div>
      <hr className='separator' />
      <h2 className='hlight'>
        OUR COMMUNITY PARTNERS
      </h2>
      <h2 className='blight'>
        Providence Rescue Mission | ELISHA Project | St. Anthony's Church | Crossroads R.I.
      </h2>
    </div>
  );
}

export default Cards;
