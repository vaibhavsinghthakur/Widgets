import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="header_link">
        <p>Home</p>
      </Link>
      <Link to="/Accordion" className="header_link">
        <p>Accordion</p>
      </Link>
      <Link to="/Dropdown" className="header_link">
        <p>Dropdown</p>
      </Link>
      <Link to="/Translate" className="header_link">
        <p>Translate</p>
      </Link>
    </div>
  );
}

export default Header;
