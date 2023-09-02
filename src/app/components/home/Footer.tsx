import React from "react";
import Splashbackground from "./splash/Splashbackground";
import ChuckNorrisJoke from "../game/utils/ChuckNorrisjoke";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <Splashbackground />
      </div>
      <ChuckNorrisJoke />{" "}
    </footer>
  );
};

export default Footer;
