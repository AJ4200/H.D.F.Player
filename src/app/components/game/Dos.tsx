import React, { useState } from "react";
import gameList from "./doslist.json";
import Downloadbutton from "./utils/Downloadbutton";
import RouletteMode from "./utils/Roulettemode";
import Resetbutton from "./utils/Resetbutton";
import Search from "./utils/Search";
import Tooltip from "./utils/Tooltip";

const Dos: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState("");
  const [showlist, setShowlist] = useState(true);
  const [showlistcont, setShowlistcont] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showHeading, setShowHeading] = useState(true);

  const handleGameSelection = (game: string) => {
    setSelectedGame(game);
    setShowlist(false);
    setShowlistcont(false);
    setShowSearch(false);
    setShowHeading(false);
  };

  const handlelist = () => {
    setShowlist(true);
    setShowlistcont(true);
    setSelectedGame("");
    setShowSearch(true);
    setShowHeading(true);
  };

  return (
    <div className="container">
      {showHeading ? (
        <h2>
          Dos Games
        </h2>
      ) : null}

      {showSearch ? (
        <>
          <RouletteMode />
          <Search />
        </>
      ) : null}

      {showlistcont ? (
        <div className="list-container">
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
        </div>
      ) : null}

      {selectedGame && (
        <div className="game-container">
          <center>
            <Tooltip text="Right click for fullscreen">
              <h1>{selectedGame}</h1>
              <embed src={`/games/dos/${selectedGame}`}></embed>
            </Tooltip>
            <Downloadbutton
              filelink={`/games/dos/${selectedGame}`}
              filename={`${selectedGame}`}
            />
            <Resetbutton onClick={handlelist} />
          </center>
        </div>
      )}
    </div>
  );
};

export default Dos;
