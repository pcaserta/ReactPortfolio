import React from "react";
import "./style.css";

function HighScore(props) {
  return <h1 className="HighScore">{props.children}</h1>;
}

export default HighScore;