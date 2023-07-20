import React, { createRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
const MusicPlayer: React.FC = () => {
  const player = createRef<AudioPlayer>()

  const [showMusic, setshowMusic] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMusic = () => {
    setshowMusic(!showMusic);
  };
  return (
    <>
      <button
        className={`music ${showMusic ? "active" : null}`}
        onClick={toggleMusic}
      
      >
        🎶
      </button>
      {showMusic ? (
        <AudioPlayer
        layout="stacked-reverse"
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
          muted
          volume={0.2}
          className={`animate__animated ${
            showMusic ? "animate__backInLeft" : "animate__backOutRight"
          }`}
          style={{
            background: "transparent",
            color: "magenta",
            fontFamily: "Press Start 2P",
          }}

          customProgressBarSection={
            [
              RHAP_UI.CURRENT_TIME,
              <div>/</div>,
              RHAP_UI.DURATION,
              RHAP_UI.PROGRESS_BAR,
             
            ]
          }
          customVolumeControls={[]}
      
        />
      ) : null}
    </>
  );
};
export default MusicPlayer;
