import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to our LISTSERV for updates on FRN@Brown!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <Link to="/about" className='footer-link'>
            OUR TEAM
          </Link>
          <span className='footer-link-separator'> | </span>
          <Link to="/contact" className='footer-link'>
            CONTACT US
          </Link>
        <span className='footer-link-separator'> | </span>
          <a
            href='https://docs.google.com/spreadsheets/d/12FrjTKR6OTZoPPXx7t6NWFnBzCxf_WJt1_t5Vr3Vltk/edit?gid=110689926#gid=110689926'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            ANNUAL REPORTS
          </a>
          <span className='footer-link-separator'> | </span>
          <a
            href='https://docs.google.com/spreadsheets/d/1YuzBM5KBdwxv-IPzfpTOIvmTidpL37fYNjkDT_su4u0/edit#gid=0'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            SIGN UP
          </a>
          <span className='footer-link-separator'> | </span>
          <a
            href='https://app.slack.com/client/T02KCD5F37T/C02KCD5GHFT'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            OUR SLACK
          </a>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/foodatbrown/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/frnatbrown/?igsh=MXFodm5jbjBjdHhtbg%3D%3D'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://x.com/FRNatBROWN'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
