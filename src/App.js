import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
import Bubbles from './components/Bubbles';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    const colors = ['rgba(4, 125, 146, 0.603)','rgba(146, 37, 4, 0.603)','rgba(4, 146, 16, 0.603)','rgba(146, 132, 4, 0.603)','rgba(146, 68, 4, 0.603)','rgba(2, 90, 2, 0.8)','rgba(146, 4, 4, 0.603)','rgba(101, 4, 146, 0.603)','rgba(146, 4, 92, 0.603)']
    const random = Math.floor((Math.random() * (colors.length-1)) + 0);
    return (
      <Router>
        <div className="App" style={{'--all-color': colors[random]}}>
        <Bubbles />
          <div className="navbar">
            <nav className="navbar__section navbar__section--right">
              <div className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
              </div>
              <div className="navbar__item">
                <Link className="navbar__link" to="/about">About</Link>
              </div>
              <div className="navbar__item">
                <Link className="navbar__link" to='/projects'>Projects</Link>
              </div>
              <div className="navbar__item">
                <Link className="navbar__link" to='/contact'>Contact</Link>
              </div>
            </nav>

            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
