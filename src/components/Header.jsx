import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/" className="nav-btn">HOME</Link>
                <Link to="/about" className="nav-btn">ABOUT</Link>
                <Link to="/skill" className="nav-btn">SKILL</Link>
                <Link to="/project" className="nav-btn">PROJECT</Link>
                <Link to="/contact" className="nav-btn">CONTACT</Link>
            </nav>
        </header>
    );
};

export default Header;
