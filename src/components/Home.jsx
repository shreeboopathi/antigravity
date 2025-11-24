import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <motion.div
                className="profile-image-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="arch-image">
                    {/* Placeholder for the user's image */}
                    <img src="/profile.png" alt="Shree" />
                </div>
            </motion.div>

            <motion.div
                className="intro-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2>HEyy THERE I'M <span className="smile">ツ</span></h2>
                <h1>SHREE</h1>
                <h3>COMPUTER SCIENCE AND<br />ENGINEERING STUDENT</h3>
                <Link to="/contact" className="reach-me-btn">Reach me</Link>
            </motion.div>
        </div>
    );
};

export default Home;
