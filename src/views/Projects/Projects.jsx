import React from "react";
import Project from "../../components/Project/Project";

const descriptionStyle = {
  textAlign: 'center',
};

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <div>
        <p style={descriptionStyle} >Click below to see some of my projects!</p>
      </div>
      <div className="project-item">
        <Project 
          title="Project1"
          link="https://github.com/jacktraina/Puzzle-Solver"
        ></Project>
        <Project 
          title="Project2"
          link="https://github.com/jacktraina/PrimsMST"
        ></Project>
        <Project 
          title="Project3"
          link="https://github.com/jacktraina/lab3"
        ></Project>
      </div>
    </div>
  );
}
