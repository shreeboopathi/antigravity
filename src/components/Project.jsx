import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';

const Project = () => {
    return (
        <div className="project-container">
            <div className="project-header">
                <span className="project-label">PROJECT:</span>
            </div>

            <motion.div
                className="project-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div
                    className="project-image-wrapper"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="tablet-mockup">
                        <div className="screen">
                            {/* Placeholder for project screenshot */}
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project Screenshot" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="project-details"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>GAMIFIED EDUCATION</h3>

                    <div className="stat-group">
                        <label>NO OF STUDENTS LOVE GAME:</label>
                        <div className="progress-bar">
                            <motion.div
                                className="fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: '80%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                            ></motion.div>
                        </div>
                    </div>

                    <div className="stat-group">
                        <label>Establishes rapport with students</label>
                        <div className="progress-bar">
                            <motion.div
                                className="fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: '60%' }}
                                transition={{ duration: 1, delay: 0.4 }}
                            ></motion.div>
                        </div>
                    </div>

                    <div className="link-group">
                        <label>LINK:</label>
                        <a
                            href="https://unesdoc.unesco.org/ark:/48223/pf0000385324"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            https://unesdoc.unesco.org/ark:/48223/pf0000385324
                        </a>
                    </div>

                    <div className="stat-group">
                        <label>Uses online teaching tools</label>
                        <div className="progress-bar">
                            <motion.div
                                className="fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: '75%' }}
                                transition={{ duration: 1, delay: 0.6 }}
                            ></motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Project;
