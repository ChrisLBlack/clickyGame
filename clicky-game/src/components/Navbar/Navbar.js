import React, { Component } from "react";
import "./Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Clicky Game</li>

          <li id="rw">Guess Away!</li>

          <li id="cur-sco">Current Score:</li>

          <li id="top-sco">Top Score: </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
