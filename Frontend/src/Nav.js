import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <ul>
      <Link to="/first"><li>Home</li></Link>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </ul>
  </div>
);

export default Nav;
