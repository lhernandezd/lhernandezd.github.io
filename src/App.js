import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SocialLinks />
      </div>
    );
  }
}

export default App;
