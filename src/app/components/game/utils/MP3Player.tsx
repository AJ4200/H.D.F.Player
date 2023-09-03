import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStop,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedo,
} from "react-icons/fa";
import AlbumArt from "./AlbumArt";

const MP3Player: React.FC = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [currentSong, setCurrentSong] = useState("");
  const [playlist, setPlaylist] = useState<string[]>([
    "/music/stranger-things-124008.mp3",
    // Add more songs here
  ]);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setCurrentSong(playlist[0]); // Set the first song in the playlist as the current song
  }, [playlist]);

  const togglePlayer = () => {
    setIsPlayerOpen(!isPlayerOpen);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  const handleSongClick = (song: string) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const currentIndex = playlist.indexOf(currentSong);
    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = playlist.length - 1;
    }
    setCurrentSong(playlist[previousIndex]);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const currentIndex = playlist.indexOf(currentSong);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= playlist.length) {
      nextIndex = 0;
    }
    setCurrentSong(playlist[nextIndex]);
    setIsPlaying(true);
  };

  const handleShuffle = () => {
    setShuffle(!shuffle);
  };

  const handleRepeat = () => {
    setRepeat(!repeat);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(event.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const getAlbumArt = (song: string) => {
    const songName = song.split("/").pop()?.split(".mp3")[0]; // Extract the song name and remove the .mp3 extension
    const albumArtPath = `/art/${songName}.jpg`; // Assuming the album art file is named "album-art.jpg" and located in the respective song's folder
    return albumArtPath;
  };

  return (
    <>
      {isPlayerOpen ? (
        <button>open</button>
      ) : (
        <div
          className="mp3-player"
          onMouseEnter={() => {
            setShowArt(!showArt);
          }}
        >
          <button className="mp3close" onClick={() => setIsPlayerOpen(false)}>
            ✖️
          </button>

          <div className="controls-container">
            <img
              src={getAlbumArt(currentSong)}
              alt=""
              style={{
                border: "1px solid magenta",
                width: "2rem",
                borderRadius: "50%",
              }}
            ></img>
            <button className="pauseplay" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className="stop" onClick={stop}>
              <FaStop />
            </button>
            {/* <input
            className="volume"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          /> */}
            <button className="previous" onClick={handlePrevious}>
              <FaStepBackward />
            </button>
            <button className="next" onClick={handleNext}>
              <FaStepForward />
            </button>
            <button
              className="shuffle"
              onClick={handleShuffle}
              style={{
                backgroundColor: ` ${shuffle ? "lime" : ""}`,
              }}
            >
              <FaRandom />
            </button>
            <button
              className="repeat"
              onClick={handleRepeat}
              style={{
                backgroundColor: ` ${repeat ? "lime" : ""}`,
              }}
            >
              <FaRedo />
            </button>
            {/* <input
            className="seek"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          /> */}
          </div>

          <audio ref={audioRef} src={currentSong} />
        </div>
      )}
      {showArt && (
        <AlbumArt img_src={getAlbumArt(currentSong)} song={currentSong} />
      )}
    </>
  );
};

export default MP3Player;
