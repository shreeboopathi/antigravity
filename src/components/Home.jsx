import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const playHoverSound = () => {
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_13b6924b18.mp3?filename=pop-39222.mp3");
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed", e));
    };

    return (
        <div className="home-container">
            <motion.div
                className="profile-image-container"
                initial={{ opacity: 0, x: -50, y: 0 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0]
                }}
                transition={{
                    opacity: { duration: 0.8 },
                    x: { duration: 0.8 },
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className="arch-image-wrapper" style={{ position: 'relative' }}>
                    <div className="arch-image">
                        {/* Placeholder for the user's image */}
                        <img src="/profile.png" alt="Shree" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="intro-text"
                initial={{ opacity: 0, x: 50, y: 0 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0]
                }}
                transition={{
                    opacity: { duration: 0.8 },
                    x: { duration: 0.8 },
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                    }
                }}
            >
                <motion.h2
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={playHoverSound}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                >
                    HEyy THERE I'M <span className="smile">ツ</span>
                </motion.h2>
                <br />
                <motion.h1
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={playHoverSound}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                >
                    SHREE
                </motion.h1>
                <br />
                <motion.h3
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={playHoverSound}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                >
                    COMPUTER SCIENCE AND<br />ENGINEERING STUDENT
                </motion.h3>
                <br />
                <Link to="/contact" className="reach-me-btn" onMouseEnter={playHoverSound}>Reach me</Link>
            </motion.div>

            {/* Navigation Button */}
            <motion.div
                className="nav-button-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link to="/about">
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

export default Home;
