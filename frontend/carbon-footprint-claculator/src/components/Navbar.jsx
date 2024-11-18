import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => navigate("/transportation")}>Transportation</li>
        <li onClick={() => navigate("/waste")}>Waste</li>
        <li onClick={() => navigate("/houseEnergy")}>House Energy</li>
      </ul>
    </nav>
  );
};

export default Navbar;
