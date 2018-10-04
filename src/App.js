import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
