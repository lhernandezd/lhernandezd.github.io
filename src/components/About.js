import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <div className="section__about">
          <h1 className="about__title"><span className="title">About</span></h1>
          <div className="about__content">
            <div className="content__image"></div>
            <div className="content__paragraphs">
              <p>
                My love for technology started since I was a child. 
                I studied electronics engineering at Universidad del Norte in Barranquilla, Colombia. I also finished a Bootcamp on Web Development made by Make It Real. The bootcamp helped me to acknowledge that this is my path.
                Now I am an electronic engineer graduate looking to break into the world of Web Development and who is constantly looking for ways to
                develop himself personally and professionally.
              </p>
              <p>
                Right now I'm working with React in the frontend and has knowledge of ruby in the backend.
                <br />
                <a className="paragraphs__link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1djBdUa-SptbpnbL5E3J3ykmJqTmSJDX6/view?usp=sharing">(Link to my resume)</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;