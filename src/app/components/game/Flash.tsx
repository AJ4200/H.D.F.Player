import React, { useState } from "react";
import gameList from "./flashlist.json";
import Downloadbutton from "./utils/Downloadbutton";
import RouletteMode from "./utils/Roulettemode";
import Resetbutton from "./utils/Resetbutton";

const Flash: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState("");
  const [showlist, setShowlist] = useState(true);

  const handleGameSelection = (game: string) => {
    setSelectedGame(game);
    setShowlist(false);
  };
  const handlelist = () => {
    setShowlist(true);
    setSelectedGame("");
  };

  return (
    <div className="container">
      <h2 className="glitch" text-data="Flash Games">
        Flash Games
      </h2>
      <RouletteMode />
      <ul className="game-list">
        {showlist &&
          gameList.map((game, index) => (
            <li
              key={index}
              className="game-item"
              onClick={() => handleGameSelection(game)}
            >
              {game}
            </li>
          ))}
      </ul>
      {selectedGame && (
        <div className="game-container">
          <center>
            <p className="download">right click to go to fullscreen.</p>
            <embed src={`/games/flash/${selectedGame}`}></embed>
              <Downloadbutton
                filelink={`/games/flash/${selectedGame}`}
                filename={`${selectedGame}`}
              />
              <Resetbutton onClick={handlelist} />     
          </center>
        </div>
      )}
    </div>
  );
};
export default Flash;
