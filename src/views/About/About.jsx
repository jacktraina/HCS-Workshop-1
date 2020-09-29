import React from "react";
import "./About.css";
import CutePic from "../../assets/jacktraina.JPG";

let showButton = false;

function button() {
  return (
    <button 
      onClick={() => {
        showButton = !showButton;
      }}
      className="button1"
    >
      Click Here to Learn More About Me!
    </button>
  )
}

function displayInfo(props) {
  var x = document.getElementById("moreInfo");
  if (props) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const descriptionStyle = {
  display: 'none',
};

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img className="intro-picture" src={CutePic} alt=""/>
        </div>
        <div className="intro-item">
          <p>Welcome to my website!</p>
          <br />
          <button
            onClick={() => {
              showButton = !showButton;
              displayInfo(showButton);
            }}
            className="button1"
          >
            {}
            Click Here to Learn More About Me!
          </button>
          <br/>
          <div id="moreInfo" className="intro-text" style={descriptionStyle}>
            Hello! I'm glad you were able to make it to my website! My name is Jack Traina and I'm a passionate coder, entrepreneur, and adventurer. Feel free to look around the website and shoot me an email if you'd like to connect.
          </div>
        </div>
      </div>
    </div>
  );
}
