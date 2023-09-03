import React from "react";

interface AlbumArtProps {
  img_src: string;
  song: string;
}

const AlbumArt: React.FC<AlbumArtProps> = ({ img_src, song }) => {
  return (
      <>
          <div className="Art-Container">      <h3>{song}</h3>
      <img src={img_src} alt="Album Art" className="album-art" /></div>

    </>
  );
};
export default AlbumArt;
