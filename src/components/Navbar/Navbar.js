import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li>{props.title}</li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;
