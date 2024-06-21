import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='highlight'>Founded in 2012, the Food Recovery Network at Brown is the second chapter in the United States to open under the FRN national network</h1>
      <hr className='separator' />
      <div className='image-wrapper'>
        <img src='images/graphic-1.jpeg' alt="Food Recovery Network at Brown" className='cards__image' />
      </div>
      <hr className='separator' />
      <h1 className='hlight'>WHAT WE DO</h1>
 
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
              label='Adventure'
              path='https://ediblerhody.ediblecommunities.com/food-thought/food-recovery-network-how-student-led-organization-reduces-food-waste-brown-university'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
