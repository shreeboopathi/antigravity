import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Skill.css';

const Skill = () => {
    const playHoverSound = () => {
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_13b6924b18.mp3?filename=pop-39222.mp3");
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed", e));
    };

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

            <div className="skill-content" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh',
                gap: '20px',
                padding: '40px 20px'
            }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -200, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            y: {
                                duration: 0.6,
                                delay: index * 0.3,
                                ease: "easeOut"
                            },
                            opacity: {
                                duration: 0.6,
                                delay: index * 0.3
                            },
                            scale: {
                                duration: 2,
                                delay: (index * 0.3) + 0.6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: '#fff',
                            textAlign: 'center',
                            letterSpacing: '1px',
                            textShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(168, 85, 247, 0.5)',
                            padding: '10px 20px'
                        }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="nav-button-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link to="/about">
                    <motion.button
                        className="nav-btn prev-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={playHoverSound}
                        onClick={playHoverSound}
                    >
                        ← Previous
                    </motion.button>
                </Link>
                <Link to="/project">
                    <motion.button
                        className="nav-btn next-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={playHoverSound}
                        onClick={playHoverSound}
                    >
                        Next →
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Skill;
