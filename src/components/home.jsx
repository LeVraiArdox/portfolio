import React from 'react';

const Home = () => {
    return (
        <div className="home-container" id='home'>
            <div className='home-components'>
                <img src="https://avatars.githubusercontent.com/u/110931544?s=400&u=c02e0a88f203bea15ebe9a2be2bbdfca7660392f&v=4" alt="Profile" className="profile-picture" />
                <h1 className="slogan">Hi, I'm Adrian</h1>
                <p className="bio">
                    Linux Architect, french student and AI enthusiast. I love to code and learn new things.
                    <br />
                    I'm the Founder of <a href="https://www.github.com/axos-project" target="_blank" rel="noopener noreferrer">AxOS</a>.
                </p>
                <div class="main__action">
                <a class="main__scroll" href="#about">
                    <div class="main__scroll-box">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#fff">
                        </path>
                    </svg>
                    </div>
                    <span class="main__scroll-text">Scroll</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Home;