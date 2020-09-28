import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div 
      onClick={() => {
        props.setActiveTitle(props.title);
      }}
      className="timeline-item"
    >
      <h1>{props.title}</h1>
    </div>
  )
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Click Each Position for More Info");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Project Manager" 
            setActiveTitle={setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem 
            title="Business Analyst" 
            setActiveTitle={setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem 
            title="TF" 
            setActiveTitle={setActiveTitle}>
          </TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p> Description </p>
        </div>
      </div>
    </div>
  );
}
