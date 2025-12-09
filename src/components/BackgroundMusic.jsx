import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Placeholder URL - User should replace this with their own music file
    // Using a royalty-free sample from a reliable source if possible, or a placeholder
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-mountains-rivers-127495.mp3";

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Optional: Auto-play with low volume if desired, but usually blocked by browsers
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
        }
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <audio ref={audioRef} loop>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <button
                onClick={togglePlay}
                className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg group"
                aria-label={isPlaying ? "Mute background music" : "Play background music"}
            >
                {isPlaying ? (
                    <Volume2 className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                ) : (
                    <VolumeX className="w-6 h-6 text-gray-400 group-hover:text-white" />
                )}
            </button>
        </div>
    );
};

export default BackgroundMusic;
