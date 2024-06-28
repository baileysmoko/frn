import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Events.css';
import { useEffect } from 'react';

function Event({ image, title, date, description }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event">
      <img src={image} alt={title} className="event-image" />
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}

// PropTypes for type validation
Event.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;
