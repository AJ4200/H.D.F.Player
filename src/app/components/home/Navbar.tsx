import React, { useState } from "react";
import Shapes from "../game/utils/Shapes";
import NavInfo from "./NavInfo";

const Navbar: React.FC = () => {
  const [showNavInfo, setShowNavInfo] = useState(false);
  const [navHeading, setNavHeading] = useState("");
  const [navChildren, setNavChildren] = useState<React.ReactNode>();

  const handleNavItemClick = (heading: string, children: React.ReactNode) => {
    setNavHeading(heading);
    setNavChildren(children);
    setShowNavInfo(true);
  };

  const handleCloseNavInfo = () => {
    setShowNavInfo(false);
  };

  return (
    <header>
      <h1>H.D.F.Player.</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li
            data-tooltip="No landing page till beta"
            data-flow="top"
            className="nav-item"
          >
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => handleNavItemClick("About Us",<p></p>)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => handleNavItemClick("Other Projects",<p></p>)}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => handleNavItemClick("Reach Out",<p></p>)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {showNavInfo && (
        <NavInfo heading="Nav Info" onClose={handleCloseNavInfo}>
          {navInfoContent}
        </NavInfo>
      )}
    </header>
  );
};

export default Navbar;
