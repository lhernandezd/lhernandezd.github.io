import React from 'react';
import '../styles/SocialLinks.css';

const SocialLinks = (props) => {
  return (
    <div className="section__social" style={props.styles}>
      <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://github.com/lhernandezd">
        <i className="fab fa-github"></i>
      </a>
      <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/ldhdv1195">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lhernandezd95/">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/luis1195/">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  )
}

export default SocialLinks;