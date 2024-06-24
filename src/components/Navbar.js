import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './FRNPhoto.jpg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav className={visible ? 'navbar' : 'navbar hidden'} style={{ backgroundColor: 'white' }}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='Logo' className='navbar-logo-img' style={{ width: '140px', height: 'auto', marginRight: '120px' }} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>
                News and Events
              </Link>
            </li>
            <li className='nav-item'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScBrPF6CzX7IMW7iMPVf5_I4_p8HPEfc0yHI1wGVlNYLw6F_A/viewform" className='nav-links' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                Donate
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <a href="https://www.foodrecoverynetwork.org/" className='nav-links' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                FRN National Website
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
