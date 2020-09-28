import React from "react";
import "./About.css";
import CutePic from "../../assets/jacktraina.JPG";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img className="intro-picture" src={CutePic} alt=""/>
        </div>
        <div className="intro-item">
          <p>Hi, my name is Jack!</p>
          <br />
          <p>Here is where I'll include more info about myself!</p>
        </div>
      </div>
    </div>
  );
}
