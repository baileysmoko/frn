import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Events.css';
import panel from './Images/panel.jpeg';
import Event from './Event.js';
import relay from './Images/relay.jpeg';
import social from './Images/social.jpeg';
import drive from './Images/drive.jpg';
import recap from './Images/recap.jpg';
import legislation from './Images/legislation.png';

function Events() {
  const events = [
    {
      image: legislation,
      title: 'Food Donation Legislation',
      date: 'June 23, 2024',
      description: 'We just reached out to legislators about mandating that all institutions with food waste greater than 2 tons per week (excluding hospitals) donate edible food to local community pantries provided that they have not refused delivery. We are now awaiting a response!',
    },
    {
      image: recap,
      title: 'End-of-Year Recap',
      date: 'May, 2024',
      description: 'Here is a recap of everything we achieved in the spring semester, together with our wonderful volunteers. Thank you so much for recovering with us - we are looking forward to working with you all again next fall!',
    },
    {
      image: drive,
      title: 'Move Out Drive 2024',
      date: 'May, 2024',
      description: 'We are working with Brown Food Not Bombs to collect donations during move-out season. If you have any packaged, non-perishable food or sanitary products that won’t make it home with you, put them in these boxes in dorm lobbies and they’ll go to Rhode Islanders who need them!',
    },
    {
      image: social,
      title: 'End-of-Year Social & Art Build',
      date: 'May 7, 2024',
      description: 'Thank you to everyone for coming to our art build, we had such a good time! Seth’s beautiful oat man box is dropping at a dorm lounge near you! If you have any food or sanitary products you’d like to drop off, scan the QR codes on our posters for a full list of collection locations.',
    },
    {
      image: relay,
      title: 'Relay For Life 2024',
      date: 'April 5, 2024',
      description: 'Thank you to everyone who joined us at ACS Relay for Life! FRN@Brown was able to raise over 150 dollars for cancer research and raise awareness about food insecurity in Providence. Congratulations to our birb raffle winner!',
    },
    {
      image: panel,
      title: 'Food Insecurity Panel Discussion',
      date: 'February 21, 2024',
      description: 'It was amazing hearing from our wonderful community partners in our discussion panel and learning about food insecurity in Providence, what is being done to address it, and how we can get involved. Thank you to everyone who joined us!',
    },
    // Add more events as needed
  ];

  const eventsPerPage = 10; // Number of events per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate index range for current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Handle pagination
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    const totalPages = Math.ceil(events.length / eventsPerPage);
    setCurrentPage(totalPages);
  };

  return (
    <>
      <div className='highlights' style={{ fontSize: '40px', marginBottom: '50px', marginTop: '70px'}}>
        FRN@Brown Latest Happenings
      </div>
      <div className="event-list">
        {currentEvents.map((event, index) => (
          <Event 
            key={index}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button className="pagination-btn" onClick={prevPage}>
            Previous Page
          </button>
        )}
        {indexOfLastEvent < events.length && (
          <button className="pagination-btn" onClick={nextPage}>
            Next Page
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Events;
