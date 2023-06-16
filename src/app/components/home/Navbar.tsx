import React from'react';
import Splashbackground from '../splash/Splashbackground';
const Navbar: React.FC = () => 
{
return (<header>
    <Splashbackground/>
    <nav className="navbar">
<ul className="nav-list">
  <li className="nav-item"><a href="#">Home</a></li>
  <li className="nav-item"><a href="#">About</a></li>
  <li className="nav-item"><a href="#">Services</a></li>
  <li className="nav-item"><a href="#">Contact</a></li>
</ul>
</nav>
</header>);
}
export default Navbar;