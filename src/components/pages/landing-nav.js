import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class LandingNav extends Component {

  render() {
    return (
      <div className="boards-wrapper">
        <h1>Boards</h1>
        <div className='boards-links' >
          
          <NavLink to="/boards">
          Com
          </NavLink>
          <NavLink to="/boards">
          Pol
          </NavLink>
          <NavLink to="/boards">
          BS
          </NavLink>
          <NavLink to="/boards">
          Random
          </NavLink>
          
        </div>
      </div>
    );
  }
}