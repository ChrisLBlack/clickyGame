import React from "react";
import "./Image.css";

const Image = props => (
  <div>
    <div>
      <img alt={props.name} src={props.image} />
    </div>
    <p>ID: {props.id}</p>
  </div>
);

export default Image;
