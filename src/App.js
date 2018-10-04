import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import ProjectCard from './components/ProjectCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectCard />
      </div>
    );
  }
}

export default App;
