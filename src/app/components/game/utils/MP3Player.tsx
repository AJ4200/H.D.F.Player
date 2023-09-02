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

const MP3Player: React.FC = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
        <div className="mp3-player">
          <button className="mp3close" onClick={() => setIsPlayerOpen(false)}>
            x
          </button>
          <h3>{currentSong}</h3>
          <img
            src={getAlbumArt(currentSong)}
            alt="Album Art"
            className="album-art"
          />
          <button className="pauseplay" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="stop" onClick={stop}>
            <FaStop />
          </button>
          <input
            className="volume"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          />
          <button className="previous" onClick={handlePrevious}>
            <FaStepBackward />
          </button>
          <button className="next" onClick={handleNext}>
            <FaStepForward />
          </button>
          <button className="shuffle" onClick={handleShuffle}>
            {shuffle ? "Shuffle On" : "Shuffle Off"} <FaRandom />
          </button>
          <button className="repeat" onClick={handleRepeat}>
            {repeat ? "Repeat On" : "Repeat Off"} <FaRedo />
          </button>
          <input
            className="seek"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <audio ref={audioRef} src={currentSong} />
        </div>
      )}
    </>
  );
};

export default MP3Player;
