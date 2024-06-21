import React from 'react';
import '../../App.css';

function Contact() {
  return (
    <>
      <div style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>Send Us an Email</div>
      <div style={{ textAlign: 'center', fontSize: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li><strong>General:</strong> <a href="mailto:foodrecoverynetwork@brown.edu">foodrecoverynetwork@brown.edu</a></li>
          <li><strong>Ayla Kim:</strong> <a href="mailto:ayla_kim@brown.edu">ayla_kim@brown.edu</a></li>
          <li><strong>Emma Weech:</strong> <a href="mailto:emma_weech@brown.edu">emma_weech@brown.edu</a></li>
          <li><strong>Seth Peiris:</strong> <a href="mailto:seth_peiris@brown.edu">seth_peiris@brown.edu</a></li>
          <li><strong>Alex Zeng:</strong> <a href="mailto:alexander_zeng@brown.edu">alexander_zeng@brown.edu</a></li>
          <li><strong>Suzie Zhang:</strong> <a href="mailto:chuyi_zhang1@brown.edu">chuyi_zhang1@brown.edu</a></li>
          <li><strong>David Veloso:</strong> <a href="mailto:david_veloso@brown.edu">david_veloso@brown.edu</a></li>
          <li><strong>Athena Deng:</strong> <a href="mailto:athena_deng@brown.edu">athena_deng@brown.edu</a></li>
          <li><strong>Ran Zhao:</strong> <a href="mailto:ran_zhao@brown.edu">ran_zhao@brown.edu</a></li>
          <li><strong>Bailey Smoko:</strong> <a href="mailto:bailey_smoko@brown.edu">bailey_smoko@brown.edu</a></li>
          {/* Add more people and their emails as needed */}
        </ul>
      </div>
    </>
  );
}

export default Contact;