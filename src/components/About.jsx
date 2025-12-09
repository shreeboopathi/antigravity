import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const playHoverSound = () => {
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_13b6924b18.mp3?filename=pop-39222.mp3");
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed", e));
    };

    const text1 = "Hi, I'm Shree — a passionate Frontend Developer who loves building clean, responsive, and user-friendly web experiences. I specialize in React, Next.js, JavaScript, and modern frontend technologies. With a strong eye for design and a focus on performance, I enjoy turning ideas into polished digital products.";

    const text2 = "I'm always learning, improving, and exploring new tools that help me build better solutions. My goal is to create meaningful user experiences and grow as a developer by working on real-world projects.";

    const words1 = text1.split(' ');
    const words2 = text2.split(' ');

    return (
        <div className="about-container">
            <div className="about-header">
                <span className="about-label">ABOUT</span>
            </div>

            <div className="about-content" style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
                {/* First paragraph with falling words */}
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#fff',
                    margin: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.3em'
                }}>
                    {words1.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{
                                y: [0, -8, 0],
                                opacity: 1
                            }}
                            transition={{
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.1
                                },
                                opacity: {
                                    duration: 0.5,
                                    delay: index * 0.05,
                                    ease: "easeOut"
                                }
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>

                {/* Second paragraph with falling words */}
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#fff',
                    margin: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.3em'
                }}>
                    {words2.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{
                                y: [0, -8, 0],
                                opacity: 1
                            }}
                            transition={{
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: (words1.length * 0.1) + (index * 0.1)
                                },
                                opacity: {
                                    duration: 0.5,
                                    delay: (words1.length * 0.05) + (index * 0.05),
                                    ease: "easeOut"
                                }
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>

            {/* Navigation Buttons */}
            <motion.div
                className="nav-button-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link to="/">
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
                <Link to="/skill">
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

export default About;
