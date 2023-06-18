import React from'react';
import Shapes from '../game/utils/Shapes';

const Navbar: React.FC = () => 
{
return (<header>
  <h1>H.D.F.Player.</h1>
  <Shapes/>
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