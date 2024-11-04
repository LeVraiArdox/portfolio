import React from 'react';

const About = () => {
    return (
        <div className='about' id='about'>
            <h2 className='aboutTitle'>About Me</h2>
            <div className='flex-row '>
                <p className='aboutText about-bg'>
                    I'm the developer of AxOS, a cool and open-source and Linux distribution based on Arch Linux.
                    <hr className='separator' />
                    I love spending my time creating something that not only looks good but also perfectly usable and practical. That's how AxOS came to life. I've been creating, updating and maintaining it for the last 4 years. 
                    <hr className='separator' />
                    I'm also a french student in Computer Science at Sup de Vinci Paris. I'm currently in my 1st year of Bachelor's degree. I'm learning a lot of things about programming, networking, databases and more.
                </p>
                <div className='skills'>
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=arch" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=js" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=css" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=html" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=react" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=arduino" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=bash" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=c" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=lua" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=markdown" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=mysql" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=python" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=linux" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=nodejs" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=git" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=github" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=vscode" alt="skills" />
                    <img className='skillsImg' src="https://skillicons.dev/icons?i=rust" alt="skills" />
                </div>
            </div>
        </div>
    );  
};

export default About;
