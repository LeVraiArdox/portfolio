import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a className='nav' href="#home"><FaHome /></a>
                <a className='nav' href="#about"><FaUser /></a>
                <a className='nav' href="#contact"><FaEnvelope /></a>
            </div>
            <div className="navbar-right">
                <a className='nav' href="https://www.github.com/levraiardox" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </nav>
    );
};

export default Navbar;