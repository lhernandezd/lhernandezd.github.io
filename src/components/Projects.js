import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'Portfolio',
          icons: ['fab fa-react', 'fab fa-css3-alt'],
          meta: 'React, React-router, HTML, CSS, Js',
          links: ['https://lhernandezd.github.io','https://github.com/lhernandezd/react-timer'],
          description: 'Single wep page application which includes my personal information and some projects.'
        },
        {
          name: 'React-timers',
          icons: ['fab fa-react', 'fab fa-js-square'],
          meta: 'React, Semantic-UI, Js',
          links: ['https://lhernandezd.github.io/react-timer/', 'https://github.com/lhernandezd/react-timer'],
          description: 'Project made with React for measure the time in your activities.'
        },
        {
          name: 'React-posts',
          icons: ['fab fa-react', 'fab fa-js-square'],
          meta: 'React, Semantic-UI, Js',
          links: ['https://lhernandezd.github.io/react-posts/', 'https://github.com/lhernandezd/react-posts'],
          description: 'Basic project that consist in a blog page to practice React.'
        },
        {
          name: 'Makeitgram',
          icons: ['far fa-gem', 'fab fa-html5', 'fab fa-js-square', 'fab fa-css3-alt'],
          meta: 'Ruby on Rails, HTML, CSS, Js',
          links: ['https://github.com/lhernandezd/makeitgram'],
          description: 'Instagram clone made with RoR (Ruby on Rails).'
        },
        {
          name: 'E-Commerce',
          icons: ['fab fa-html5', 'fab fa-css3-alt'],
          meta: 'HTML, CSS, Bootstrap',
          links: ['https://lhernandezd.github.io/e-commerce-b4/', 'https://github.com/lhernandezd/e-commerce-b4'],
          description: 'Mockup for a clothing store webpage.'
        },
        {
          name: 'Css Game',
          icons: ['fab fa-html5', 'fab fa-js-square', 'fab fa-css3-alt'],
          meta: 'Js, jQuery, HTML, CSS',
          links: ['https://github.com/lhernandezd/Picas-y-Fijas'],
          description: 'Game to practice JavaScript DOM Operations and jQuery.'
        },
        {
          name: 'Picas y Fijas',
          icons: ['fab fa-html5', 'fab fa-js-square', 'fab fa-css3-alt'],
          meta: 'Js, jQuery, HTML, CSS',
          links: ['https://lhernandezd.github.io/Picas-y-Fijas/', 'https://github.com/lhernandezd/Picas-y-Fijas'],
          description: 'Simple game that consists of the user introducing series of 4 different numbers until guessing the final number with the help of "picas" and "fijas".'
        }
      ]
    }
  }

  render() {
    return(
      <div className="wrapper">
        <div className="section__projects">
          <h1 className="projects__title"><span className="title">Projects</span></h1>
          <div className="projects__content">
            {this.state.projects.map((project,index) => 
              <ProjectCard
                key={index}
                name={project.name}
                icons={project.icons}
                meta={project.meta}
                links={project.links}
                description={project.description}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;