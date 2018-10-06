import React from 'react';
import '../styles/Home.css';
import SocialLinks from './SocialLinks';

class Home extends React.Component {
  handleClick(event) {
    event.persist();
    event.target.classList.add('animate')
    setTimeout(function() { event.target.classList.remove('animate')}, 800);
  }

  render() {
    const styles = {position: 'absolute', bottom: '10%'}
    return (
      <div className="home">
        <div className="section__presentation">
          <h1 className="presentation__title">
            <span className="presentation__title--span" onClick={this.handleClick.bind(this)}>Luis David</span>
            <span className="presentation__title--span" onClick={this.handleClick.bind(this)}>Hernandez</span>
          </h1>
          <p className="presentation__paragraph">Electronic Engineer and Web Developer</p>
        </div>
        <SocialLinks styles={styles}/>
      </div>
    )
  }
}

export default Home;