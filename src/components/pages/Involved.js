import React from 'react';
import '../../App.css';
import './Contact.css';
import { useEffect } from 'react';
import involved from './Images/involved.png';
import Header from './Header.js'
import './Involved.css'
import Footer from '../Footer';

function Involved() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleButtonClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1YuzBM5KBdwxv-IPzfpTOIvmTidpL37fYNjkDT_su4u0/edit?gid=0#gid=0', '_blank');
  };
  return (
    
    <>
    <div>
      <Header image={involved} title="HOW TO GET INVOLVED" />
      <div className='highlighted' style={{ fontSize: '40px', marginBottom: '50px', marginTop: '70px'}}>
        Walking Shifts
      </div>
      <div className='descrip' style={{ fontSize: '25px', marginBottom: '50px', marginTop: '15px'}}>
      Everyday, we have student volunteers go to dining halls just before closing and collect all of the leftover food from the workers. Volunteers then bring the food to the ratty loading dock where they weigh the food and write the contents of the box of food on the box. Then, they put the boxes in the fridge and fill out the google form, which you can find by scanning the QR code on the fridge. Each shift lasts about 15 minutes, and sometimes the dining hall workers even give you free food! 
      </div>
      <div className='bt-container'>
        <button
          className='bt'
          onClick={handleButtonClick}
        >
          SIGN UP FOR A WALKING SHIFT
        </button>
      </div>
      <hr className='separate' />
      <div className='highlighted' style={{ fontSize: '40px', marginBottom: '50px', marginTop: '70px'}}>
        Driving Shifts
      </div>
      <div className='descrip' style={{ fontSize: '25px', marginBottom: '80px', marginTop: '15px'}}>
      Some volunteers are also needed to drive the recovered food to our community partners. These volunteers will take the food out of our fridge in the ratty loading dock, and bring it to one of our community partners. Cars are not provided, but if you rent a zipcar, you will be fully reimbursed by FRN@Brown. If this is of interest to you, leave your email below and we will be in touch with you about the details!
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Involved;
