import React, { useState } from "react";
import NavInfo from "./NavInfo";
import About from "./navSections/About";
import airplay from "react-useanimations/lib/airplay";
import settings from "react-useanimations/lib/settings";
import archive from "react-useanimations/lib/archive";
import star from "react-useanimations/lib/star";
import UseAnimations from "react-useanimations";
import { transform } from "typescript";

const Navbar: React.FC = () => {
  const [showNavInfo, setShowNavInfo] = useState(false);
  const [navHeading, setNavHeading] = useState("");
  const [navChildren, setNavChildren] = useState<React.ReactNode>();
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleNavItemClick = (heading: string, children: React.ReactNode) => {
    setNavHeading(heading);
    setNavChildren(children);
    setShowNavInfo(true);
    setIsModelOpen(true);
  };

  const handleCloseNavInfo = () => {
    setShowNavInfo(false);
    setIsModelOpen(false);
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
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="/"
            >
              {" "}
              <UseAnimations
                animation={airplay}
                strokeColor="#00ff00"
                size={30}
              />
              Home
            </a>
          </li>
          <li data-tooltip="About Us" data-flow="top" className="nav-item">
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
              onClick={() => handleNavItemClick("About Us", <About />)}
            >
              <UseAnimations
                animation={archive}
                strokeColor="#00ff00"
                size={30}
              />
              About
            </a>
          </li>
          <li
            data-tooltip="Other Projects"
            data-flow="top"
            className="nav-item"
          >
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
              onClick={() => handleNavItemClick("Other Projects", <p></p>)}
            >
              <UseAnimations
                animation={settings}
                strokeColor="#00ff00"
                size={30}
              />
              Services
            </a>
          </li>
          <li data-tooltip="Reach Out" data-flow="top" className="nav-item">
            <a
              href="#"
              onClick={() => handleNavItemClick("Reach Out", <p></p>)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UseAnimations animation={star} strokeColor="#00ff00" size={30} />
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {showNavInfo && (
        <NavInfo
          heading={navHeading}
          onClose={handleCloseNavInfo}
          isModalOpen={isModelOpen}
        >
          {navChildren}
        </NavInfo>
      )}
    </header>
  );
};

export default Navbar;
