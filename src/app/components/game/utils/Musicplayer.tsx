import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
 const MusicPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

   const toggleMute = () => {
    setIsMuted(!isMuted);
  };
   return (
    <>
      <button className="mute" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
      <AudioPlayer
        autoPlay={true}
        loop
        preload="auto"
        src="/stranger-things-124008.mp3"
        onPlay={(e) => console.log("playing bgm!")}
        showFilledVolume={true}
        showDownloadProgress={true}
        showJumpControls={true}
        showSkipControls={true}
        showFilledProgress={true}
        volume={0.20}
        // style={{
        //   visibility: "hidden",
        //   pointerEvents: "none",
        //   position: "absolute",
        //   opacity: 0,
        // }}
      />
    </>
  );
};
 export default MusicPlayer;