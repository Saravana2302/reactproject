import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
