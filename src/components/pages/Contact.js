import React from 'react';
import '../../App.css';
import './Contact.css';
import Footer from '../Footer';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="info-text" style={{  marginBottom: '150px', marginTop: '150px'}}>
        The US wastes 35 million tons of food every year while 1 in every 6 Americans is food-insecure. If you are interested in learning more about FRN@Brown or have ideas on how we can further reduce food waste and help homeless shelters stay functional, shoot us an email!
      </div>
      <div className='separator2'></div>
      <div className='highli' style={{ fontSize: '36px', marginBottom: '20px', marginTop: '70px'}}>
        Reach out to us!
      </div>
      <div className='des-list'>
          Please allow us at least 3 days to respond to your emails. We will do our best to respond as soon as we can.
      </div>
      <div className='contact-list'>
      <ul>
          <li>General: </li><a href="mailto:foodrecoverynetwork@brown.edu">foodrecoverynetwork@brown.edu</a>
          <li>Ayla Kim:</li> <a href="mailto:ayla_kim@brown.edu">ayla_kim@brown.edu</a>
          <li>Emma Weech: </li><a href="mailto:emma_weech@brown.edu">emma_weech@brown.edu</a>
          <li>Seth Peiris: </li><a href="mailto:seth_peiris@brown.edu">seth_peiris@brown.edu</a>
          <li>Alex Zeng: </li><a href="mailto:alexander_zeng@brown.edu">alexander_zeng@brown.edu</a>
          <li>David Veloso: </li><a href="mailto:david_veloso@brown.edu">david_veloso@brown.edu</a>
          <li>Athena Deng: </li><a href="mailto:athena_deng@brown.edu">athena_deng@brown.edu</a>
          <li>Ran Zhao: </li><a href="mailto:ran_zhao@brown.edu">ran_zhao@brown.edu</a>
          <li>Bailey Smoko: </li><a href="mailto:bailey_smoko@brown.edu">bailey_smoko@brown.edu</a>
          {/* Add more people and their emails as needed */}
        </ul>
      </div>
      <div className='des-list'>
      &nbsp;
      </div>
      <Footer />
    </>
  );
}

export default Contact;