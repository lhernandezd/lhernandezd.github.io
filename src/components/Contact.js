import React from 'react';
import '../styles/Contact.css';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

const Contact = (props) => {
  return (
    <div className="contact">
      <Navbar />
      <SocialLinks />
    </div>
  )
}

export default Contact;