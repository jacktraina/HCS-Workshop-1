import React from "react";
import "./Education.css";
import CutePic from "../../assets/cbw.jpg";
import CutePic2 from "../../assets/harvard.jpg";
import CutePic3 from "../../assets/lse.jpg";

function EducationItem(props) {
    return (
      <div 
        onClick={() => {
          props.setActiveTitle(props.title);
        }}
        className="ed-item"
      >
        <img className="ed-picture" src={props.pic} alt=""/>
        <p>{props.title}</p>
      </div>
    )
  }

const EdDescription = (props) => {
    let leadership = [];
    let courses = [];
    let activities = [];
    let description = "";
    
    if (props.title === "Harvard University") {
        leadership = [
            'Vice President - The Delphic Club', 
            'Course Assistant - Multivariable Calculus', 
            'TEACH and Tour Coordinator - The Crimson Key Society'
        ]
        courses = [
            'CS121: Intro to Theoretical CS',
            'CS124: Data Structures and Algorithms',
            'CS179: UI/UX Design'
        ]
        activities = [
            'HCS',
            'Club Spikeball',
            'Club Basketball',
            'Harvard Open Data Project'
        ]
        description = "A.B. Candidate in Computer Science, Class of 2022"
    }
    else if (props.title === "CB West High School") {
        leadership = [
            'Valedictorian - Class of 2017',
            'Student Body Present - Junior and Senior Year', 
            'Captain - Varsity Mens Basketball', 
        ]
        courses = [
            'AP Computer Science A (Java)',
            'AP Computer Science Principles',
            'AP Statistics'
        ]
        activities = [
            'Student Government',
            'Varsity Mens Basketball',
            'Future Business Leaders of America',
            'National Honor Society'
        ]
        description="Valedictorian of the Class of 2017"
    }
    else if (props.title === "London School of Economics") {
        courses = [
            'International Culture and Economic Development',
            'International Trade',
        ]
        description = "Study Abroad in London, Courswork in International Economics"
    }

    const descriptionStyle = {
        textAlign: 'center',
    };

    return (
        <div className="ed-description">
            <p style={descriptionStyle}>{description}</p>
            <br/>
            <p><b>Course Work: </b>{courses.join(', ')}</p>
            <p><b>Leadership: </b>{leadership.join(', ')}</p>
            <p><b>Activities: </b>{activities.join(', ')}</p>
        </div>
    )
}

export default function EducationScreen() {
    const [activeTitle, setActiveTitle] = React.useState("Select A School to Learn More");

    return (
      <div className="screen-background">
        <div className="intro-background">
            <EducationItem
                title="Harvard University" 
                pic={CutePic2}
                setActiveTitle={setActiveTitle}>
            </EducationItem>
            <EducationItem 
                title="London School of Economics" 
                pic={CutePic3}
                setActiveTitle={setActiveTitle}>
            </EducationItem>
            <EducationItem 
                title="CB West High School"
                pic={CutePic}
                setActiveTitle={setActiveTitle}>
            </EducationItem>
        </div> 
        <div className="ed-background">
            <b>{activeTitle}</b>
            <EdDescription
                title={activeTitle}
            >
            </EdDescription>
        </div>
      </div>
    );
  }