import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css"; // Create a CSS file for styling

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => navigate("/transportation")}>Transportation</li>
        <li onClick={() => navigate("/waste")}>Waste</li>
        <li onClick={() => navigate("/houseEnergy")}>House Energy</li>
        {/* </ul><</nav>li onClick={() => navigate("/userHomePage")}>Statistics</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
