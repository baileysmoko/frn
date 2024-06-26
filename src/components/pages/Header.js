import React from 'react';
import './Header.css';

function Header({ image, title }) {
  return (
    <div className="header-container" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

export default Header;