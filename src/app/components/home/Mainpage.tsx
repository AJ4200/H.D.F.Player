import React, { useState } from "react";
import Flash from "../game/Flash";
import Dos from "../game/Dos";
import Html5 from "../game/Html5";
import Infopage from "./Infopage";
import MusicPlayer from "../game/utils/Musicplayer";

const Mainpage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("flash");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const renderTabContent = () => {
    if (currentTab === "flash") {
      return <Flash />;
    } else if (currentTab === "dos") {
      return <Dos />;
    } else if (currentTab === "html5") {
      return <Html5 />;
    }
    return <Infopage />;
  };

  return (
    <>
      <div className="tab-buttons">
        {" "}
        <button
          className={
            currentTab === "html5"
              ? "active animate__animated animate__tada"
              : ""
          }
          onClick={() => handleTabChange("html5")}
        >
          HTML5
        </button>{" "}
        <button
          className={
            currentTab === "dos" ? "active animate__animated animate__tada" : ""
          }
          onClick={() => handleTabChange("dos")}
        >
          Dos
        </button>
        <button
          className={
            currentTab === "flash"
              ? "active animate__animated animate__tada"
              : ""
          }
          onClick={() => handleTabChange("flash")}
        >
          Flash
        </button> 
          <MusicPlayer/>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </>
  );
};

export default Mainpage;
