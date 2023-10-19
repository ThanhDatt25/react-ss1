import React from "react";
import "./Nav.scss";

import { Link, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink activeClassName=" active" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName=" active" to="/todo">
            Todo
          </NavLink>
          <NavLink activeClassName=" active" to="/form">
            Form
          </NavLink>
          <NavLink activeClassName=" active" to="/listuser">
            Users
          </NavLink>
          <NavLink activeClassName=" active" to="/about">
            About
          </NavLink>
        </div>
      </>
    );
  }
}

export default Navigation;
