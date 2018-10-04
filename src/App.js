import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Projects />
      </div>
    );
  }
}

export default App;
