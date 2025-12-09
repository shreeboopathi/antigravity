import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const myEmail = "nilashree018@gmail.com";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) {
            alert("please type your message");
            return;
        }
        const subject = `Contact from Portfolio: ${email}`;
        const body = `Message from ${email}:\n\n${message}`;
        window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const playHoverSound = () => {
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_13b6924b18.mp3?filename=pop-39222.mp3");
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed", e));
    };

    return (
        <div className="contact-container">
            <motion.div
                className="contact-card"
                initial={{ scale: 0.9, opacity: 0, y: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, -10, 0]
                }}
                transition={{
                    scale: { duration: 0.5 },
                    opacity: { duration: 0.5 },
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className="card-header">
                    <h2>CONTACT ME</h2>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <label className="form-label">From</label>
                        <motion.input
                            whileHover={{ scale: 1.05 }}
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-row">
                        <label className="form-label">To</label>
                        <motion.input
                            whileHover={{ scale: 1.05 }}
                            type="text"
                            value={myEmail}
                            readOnly
                            className="form-input"
                        />
                    </div>

                    <div className="form-row message-row">
                        <motion.textarea
                            whileHover={{ scale: 1.05 }}
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="2"
                            className="form-input message-input"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        className="submit-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        DONE
                    </motion.button>
                </form>

                <div className="social-links" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <a href="https://github.com/shreeboopathi" target="_blank" rel="noopener noreferrer" className="github-link" style={{ color: '#000', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
                        <Github size={24} />
                        <span>GitHub</span>
                    </a>
                </div>
            </motion.div>

            {/* Navigation Button */}
            <motion.div
                className="nav-button-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link to="/project">
                    <motion.button
                        className="nav-btn prev-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={playHoverSound}
                    >
                        ← Previous
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Contact;
