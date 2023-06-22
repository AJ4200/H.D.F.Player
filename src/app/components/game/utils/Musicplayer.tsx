import React, { useState } from "react";

const MusicPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set the volume to 0.5 (50%)
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/stranger-things-124008.mp3" />
      <button className="mute" onClick={toggleMute}>
        {isMuted ? "🔊" : "🔇"}
      </button>
    </div>
  );
};

export default MusicPlayer;
