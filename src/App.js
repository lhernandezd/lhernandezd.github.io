import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import Bubbles from './components/Bubbles';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bubbles />
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
