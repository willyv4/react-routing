import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="m-6">
      <Link to="/dog" className="bg-gray-900 p-2 rounded text-gray-200">
        Dogs
      </Link>
    </div>
  );
}

export default Nav;
