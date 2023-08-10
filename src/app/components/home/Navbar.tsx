import React from'react';
import Shapes from '../game/utils/Shapes';

const Navbar: React.FC = () => 
{
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
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Services</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);
}
export default Navbar;