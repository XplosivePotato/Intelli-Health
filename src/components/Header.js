import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
