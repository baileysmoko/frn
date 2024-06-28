import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ image, title }) {
  return (
    <div className="header-container" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

// Prop types validation for Header component
Header.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
