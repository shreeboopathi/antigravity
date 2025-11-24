import React from 'react';
import { motion } from 'framer-motion';
import './Skill.css';

const Skill = () => {
    const skills = [
        "FRONTEND: HTML, CSS, JAVASCRIPT, REACT, NEXT.JS",
        "TOOLS: GIT, GITHUB, VS CODE, FIGMA",
        "OTHER: PROBLEM-SOLVING, CREATIVITY, TEAMWORK",
        "PERSONALITY DEVELOPEMENT",
        "CRITICAL THINKING"
    ];

    return (
        <div className="skill-container">
            <div className="skill-header">
                <span className="skill-label">SKILL:</span>
            </div>

            <div className="skill-content">
                <div className="skill-list">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="skill-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chess" />
                </motion.div>
            </div>
        </div>
    );
};

export default Skill;
