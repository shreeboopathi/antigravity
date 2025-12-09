import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

function StarField(props) {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const SolarSystem = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5
        }}>
            {/* Sun at center */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #FDB813 0%, #FF8C00 50%, #FF4500 100%)',
                    boxShadow: '0 0 40px #FDB813, 0 0 80px #FF8C00',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Mercury - smallest, fastest orbit */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '120px',
                    height: '120px',
                    marginLeft: '-60px',
                    marginTop: '-60px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#8C7853',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 8px rgba(140, 120, 83, 0.6)'
                }} />
            </motion.div>

            {/* Venus - second planet */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '180px',
                    height: '180px',
                    marginLeft: '-90px',
                    marginTop: '-90px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#FFC649',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px rgba(255, 198, 73, 0.6)'
                }} />
            </motion.div>

            {/* Earth - blue planet */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '260px',
                    height: '260px',
                    marginLeft: '-130px',
                    marginTop: '-130px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E90FF 0%, #00CED1 100%)',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 12px rgba(30, 144, 255, 0.8)'
                }} />
            </motion.div>

            {/* Mars - red planet */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '340px',
                    height: '340px',
                    marginLeft: '-170px',
                    marginTop: '-170px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#CD5C5C',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px rgba(205, 92, 92, 0.6)'
                }} />
            </motion.div>

            {/* Jupiter - largest planet */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '480px',
                    height: '480px',
                    marginLeft: '-240px',
                    marginTop: '-240px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #C88B3A 0%, #E8C468 50%, #C88B3A 100%)',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 15px rgba(200, 139, 58, 0.7)'
                }} />
            </motion.div>

            {/* Saturn - with rings */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '620px',
                    height: '620px',
                    marginLeft: '-310px',
                    marginTop: '-310px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: '#FAD5A5',
                        boxShadow: '0 0 12px rgba(250, 213, 165, 0.6)',
                        position: 'relative'
                    }} />
                    {/* Saturn's ring */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '50px',
                        height: '15px',
                        border: '2px solid rgba(250, 213, 165, 0.4)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%) rotateX(75deg)',
                    }} />
                </div>
            </motion.div>
        </div>
    );
};

const GalaxyBackground = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000000', overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
            </Canvas>

            <SolarSystem />
        </div>
    );
};

export default GalaxyBackground;
