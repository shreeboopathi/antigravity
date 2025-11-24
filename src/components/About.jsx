import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <span className="about-label">ABOUT</span>
            </div>

            <div className="about-content">
                <motion.div
                    className="about-text-card"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p>
                        Hi, I'm Shree — a passionate Frontend Developer who loves building clean, responsive, and user-friendly web experiences. I specialize in React, Next.js, JavaScript, and modern frontend technologies. With a strong eye for design and a focus on performance, I enjoy turning ideas into polished digital products.
                    </p>
                    <p>
                        I'm always learning, improving, and exploring new tools that help me build better solutions. My goal is to create meaningful user experiences and grow as a developer by working on real-world projects.
                    </p>
                </motion.div>

                <motion.div
                    className="about-image-card"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                >
                    <img src="/about-bg.jpg" alt="Bookshelf" />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
