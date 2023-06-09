import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link className="link" to="/colors">
        Colors
      </Link>
      <Link className="link" to="/colors/new">
        Make a New Color
      </Link>
    </div>
  );
}

export default Nav;
