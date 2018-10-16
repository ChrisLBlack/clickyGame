import React, { Component } from "react";
import "./Jumbo.css";

class Jumbo extends Component {
  render() {
    return (
      <div className="jumbo">
        <h1>Clicky Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
      </div>
    );
  }
}

export default Jumbo;
