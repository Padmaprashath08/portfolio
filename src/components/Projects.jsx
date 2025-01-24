import React from 'react';
import './Projects.css';

const projects = [
  { title: 'MedBot', description: 'A medical assistant bot that predicts diseases and facilitates appointments.' },
  { title: 'Water Quality Prediction', description: 'A data science project analyzing and predicting water quality.' },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
