import React, { useRef, useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Footer() {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const emailData = formData.get('email');
    console.log('Sending email...', emailData); // Debugging step

    emailjs
      .sendForm('service_bwyxkaa', 'template_ywp2pd4', form.current, 'ZsMgOetuKn62a8c8a')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.status, result.text);
          setMessage('Subscription successful! Thank you.');
        },
        (error) => {
          console.log('Email sending failed...', error);
          setMessage('Subscription failed: ${error.text}');
        },
      );
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to our LISTSERV for updates on FRN@Brown!
        </p>
        <div className='input-areas'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              required
            />
            <Button buttonStyle='btn--outline' type='submit'>Subscribe</Button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <Link to="/about" className='footer-link'>OUR TEAM</Link>
          <span className='footer-link-separator'> | </span>
          <Link to="/contact" className='footer-link'>CONTACT US</Link>
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
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/foodatbrown/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/frnatbrown/?igsh=MXFodm5jbjBjdHhtbg%3D%3D'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://x.com/FRNatBROWN'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;