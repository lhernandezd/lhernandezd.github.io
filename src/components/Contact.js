import React from 'react';
import '../styles/Contact.css';
import SocialLinks from './SocialLinks';

const styles = {position: 'absolute', bottom: '50%', fontSize: 50}
const Contact = (props) => {
  return (
    <div className="contact">
      <SocialLinks styles={styles}/>
    </div>
  )
}

export default Contact;