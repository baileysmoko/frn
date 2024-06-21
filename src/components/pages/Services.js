// import React from 'react';
// import '../../App.css';

// export default function Services() {
//   return <h1 className='services'>
//     SERVICES
//     hello world
//   </h1>;
// }

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Services() {
  return (
    <>
      <HeroSection />
      <div>hello!</div>
      <Cards />
      <Footer />
    </>
  );
}

export default Services;
