import React from 'react';
import SchoolNotesImg from '../assets/img/schoolnotes.png';

const projects = [
    {
        title: 'AxOS',
        description: 'The Linux experience, enhanced.',
        link: 'https://axos-project.com',
        image: 'https://www.axos-project.com/static/media/axpc.c809cee289d47a66ed12.png'
    },
    {
        title: 'SchoolNotes',
        description: 'A simple note-taking app for me (FR).',
        link: 'https://notes.lvardox.com',
        image: SchoolNotesImg
    },
    {
        title: 'JFCocktails',
        description: 'A functional cocktail machine.',
        link: 'https://github.com/mouuxime/jfcocktails',
        image: 'https://github.com/LeVraiArdox/levraiardox.github.io/blob/main/assets/png/jfcocktails.png?raw=true'
    }
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h2 className='aboutTitle'>Some of my Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt='' />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;