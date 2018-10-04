import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

class Home extends React.Component {
  handleClick(event) {
    event.persist();
    event.target.classList.add('animate')
    setTimeout(function() { event.target.classList.remove('animate')}, 800);
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="section__presentation">
          <h1 className="presentation__title">
            <span className="presentation__title--span" onClick={this.handleClick.bind(this)}>Luis David</span>
            <span className="presentation__title--span" onClick={this.handleClick.bind(this)}>Hernandez</span>
          </h1>
          <p className="presentation__paragraph">Electronic Engineer and Web Developer</p>
        </div>
        <SocialLinks />
      </div>
    )
  }
}

export default Home;