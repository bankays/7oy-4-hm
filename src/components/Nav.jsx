import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/save"}>
            <li>save</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
