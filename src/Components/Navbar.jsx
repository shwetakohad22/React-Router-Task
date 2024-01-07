import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="main">
        <Link to="/">All</Link>
        <Link to="/fullstack">Full Stack Development</Link>
        <Link to="/datascience">Data Science</Link>
        <Link to="/cyber-security"> Cyber security</Link>
        <Link to="/carrer">Career</Link>
      </div>
    </>
  );
}

export default Navbar;
